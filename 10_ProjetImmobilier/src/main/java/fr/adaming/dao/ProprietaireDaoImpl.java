package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Agent;
import fr.adaming.model.Proprietaire;

@Repository
public class ProprietaireDaoImpl implements IProprietaireDao {
	@Autowired
	private SessionFactory sf;

	@Override
	public List<Proprietaire> getAllProprietaires() {
		Session s = sf.getCurrentSession();
		String req = "FROM Proprietaire";
		Query query = s.createQuery(req);
		List<Proprietaire> liste = query.list();
		return liste;
	}

	@Override
	public Proprietaire getProprietaireById(int id) {
		Session s = sf.getCurrentSession();
		Proprietaire pGet = (Proprietaire) s.get(Proprietaire.class, id);
		return pGet;
	}

	@Override
	public Proprietaire addProprietaire(Proprietaire p) {
		Session s = sf.getCurrentSession();
		s.save(p);
		return p;
	}

	@Override
	public Proprietaire updateProprietaire(Proprietaire p) {
		Session s = sf.getCurrentSession();

		Proprietaire pUp = (Proprietaire) s.get(Proprietaire.class, p.getId());
		pUp.setNom(p.getNom());
		pUp.setNumPrivé(p.getNumPrive());
		pUp.setNumTravail(p.getNumTravail());
		s.saveOrUpdate(pUp);
		return null;
	}

	@Override
	public void deleteProprietaire(Proprietaire p) {

		// Créer la session
		Session s = sf.getCurrentSession();
		Proprietaire p_Out = (Proprietaire) s.get(Proprietaire.class, p.getId());
		s.delete(p_Out);
	}

}
