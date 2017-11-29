package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Achat;
import fr.adaming.model.Classe;
import fr.adaming.model.Location;

@Repository
public class BienDaoImpl implements IBienDao {

	@Autowired // Injection automatique du collaborateur sessionFactoryBean
	private SessionFactory sf;

	// Le setter pour l'injection
	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public Achat addAchat(Achat a) {
		// Recuperation de la session
		Session s = sf.getCurrentSession();

		s.save(a);
		return a;
	}

	@Override
	public Location addLocation(Location l) {
		// Recuperation de la session
		Session s = sf.getCurrentSession();

		s.save(l);
		return l;
		
	}

	@Override
	public Achat updateAchat(Achat a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location updateLocation(Location l) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Achat> getAllAchats() {
		Session s = sf.getCurrentSession();
		String req = "FROM Achat a";
		Query query = s.createQuery(req);
		@SuppressWarnings("unchecked")
		List<Achat> liste = query.list();
		return liste;
	}

	@Override
	public List<Location> getAllLocations() {
		Session s = sf.getCurrentSession();
		String req = "FROM Location l";
		Query query = s.createQuery(req);
		@SuppressWarnings("unchecked")
		List<Location> liste = query.list();
		return liste;
	}

	@Override
	public Achat getAchatById(int id) {
		Session s = sf.getCurrentSession();
		Achat a = (Achat) s.get(Achat.class, id);
		return a;
	}

	@Override
	public Location getLocationById(int id) {
		Session s = sf.getCurrentSession();
		Location l = (Location) s.get(Location.class, id);
		return l;
	}

	@Override
	public void deleteAchat(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteLocation(int id) {
		// TODO Auto-generated method stub

	}

}