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
		System.out.println("Entrée dans la DAO");
		Session s = sf.getCurrentSession();
		s.save(c);
		System.out.println("c vaut : "+c);
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
		s.saveOrUpdate(cOut);
		return cOut;
	}

	@Override
	public void deleteClasse(Classe c) {
		Session s=sf.getCurrentSession();
		c=(Classe) s.get(Classe.class, c.getId_cl());
		s.delete(c);
	}

}
