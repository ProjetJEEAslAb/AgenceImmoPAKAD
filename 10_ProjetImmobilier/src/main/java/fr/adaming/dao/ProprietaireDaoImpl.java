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
		Session s=sf.getCurrentSession();
		String req="FROM Proprietaire";
		Query query=s.createQuery(req);
		List<Proprietaire> liste=query.list();
		return liste;
	}

	@Override
	public Proprietaire getProprietaireById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Proprietaire addProprietaire(Proprietaire p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Proprietaire updateProprietaire(Proprietaire p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteProprietaire(Proprietaire p) {
		// TODO Auto-generated method stub
		
	}
	
}
