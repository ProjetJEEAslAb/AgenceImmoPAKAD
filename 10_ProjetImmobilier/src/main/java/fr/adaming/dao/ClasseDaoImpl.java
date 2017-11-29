package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Classe;

@Repository
public class ClasseDaoImpl implements IClasseDao {
	@Autowired
	private SessionFactory sf;

	@Override
	public Classe addClasse(Classe c) {
		Session s = sf.getCurrentSession();
		s.save(c);
		return c;
	}

	@Override
	public List<Classe> getAllClasses() {
		Session s = sf.getCurrentSession();
		String req = "FROM Classe c";
		Query query = s.createQuery(req);
		List<Classe> liste = query.list();
		return liste;
	}

	@Override
	public Classe getClasseById(int id) {
		Session s = sf.getCurrentSession();
		Classe c = (Classe) s.get(Classe.class, id);
		return c;
	}

	@Override
	public Classe updateClasse(Classe c) {
		Session s = sf.getCurrentSession();
		Classe cOut = (Classe) s.get(Classe.class, c.getId_cl());
		cOut.setListeBiens(c.getListeBiens());
		cOut.setModeOffre(c.getModeOffre());
		cOut.setPrixMax(c.getPrixMax());
		cOut.setSuperficieMin(c.getSuperficieMin());
		cOut.setTypeBien(c.getTypeBien());
		s.saveOrUpdate(cOut);
		return cOut;
	}

	@Override
	public void deleteClasse(Classe c) {
		System.out.println("Je suis dans la DAO de la suppression");
		Session s=sf.getCurrentSession();
		Classe cOut=(Classe) s.get(Classe.class, c.getId_cl());
		s.delete(cOut);
	}

}
