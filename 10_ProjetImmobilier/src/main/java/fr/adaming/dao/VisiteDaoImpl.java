package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Visite;

@Repository
public class VisiteDaoImpl implements IVisiteDao {

	@Autowired
	private SessionFactory sf;

	// setter pour l'injection dépendance
	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	// =========================Les methodes
	// Dao=======================================//

	@Override
	public List<Visite> getAllVisites() {
		Session s = sf.getCurrentSession();
		String req = "FROM Visite v";
		Query query = s.createQuery(req);
		@SuppressWarnings("unchecked")
		List<Visite> liste = query.list();
		return liste;
	}

	@Override
	public Visite getVisiteById(int id) {
		Session s = sf.getCurrentSession();
		Visite v = (Visite) s.get(Visite.class, id);
		return v;
	}

	@Override
	public Visite addVisite(Visite v) {
		Session s = sf.getCurrentSession();
		s.save(v);
		return v;
	}

	@Override
	public Visite updateVisite(Visite v) {

		Session s = sf.getCurrentSession();
		Visite vOut = (Visite) s.get(Visite.class, v.getId());

		vOut.setRdv(v.getRdv());
		vOut.setAchat(v.getAchat());
		vOut.setClient(v.getClient());
		vOut.setLocation(v.getLocation());
		
		s.saveOrUpdate(vOut);
		
		return vOut;
	}

	@Override
	public void deleteVisite(int id) {
		Session s = sf.getCurrentSession();
		Visite vOut = (Visite) s.get(Visite.class, id);
		s.delete(vOut);

	}

}
