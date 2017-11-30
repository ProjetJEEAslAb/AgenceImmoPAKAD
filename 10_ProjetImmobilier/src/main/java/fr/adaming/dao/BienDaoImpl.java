package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Achat;
import fr.adaming.model.Adresse;
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
		Session s = sf.getCurrentSession();
		Achat aOut = (Achat) s.get(Achat.class, a.getId_b());
		aOut.setStatut(a.getStatut());
		aOut.setDateSoumission(a.getDateSoumission());
		aOut.setDateDisponibilite(a.getDateDisponibilite());
		aOut.setRevenuCadastral(a.getRevenuCadastral());
		aOut.setSuperficie(a.getSuperficie());
		aOut.setClasse(a.getClasse());
		aOut.setEtat(a.getEtat());
		aOut.setPrixVente(a.getPrixVente());
		aOut.setProprio(a.getProprio());
		
		aOut.setAdresse(new Adresse(a.getAdresse().getRue(), a.getAdresse().getNumero(), a.getAdresse().getCp(), a.getAdresse().getVille()));
		
		s.saveOrUpdate(aOut);
		return aOut;
	}

	@Override
	public Location updateLocation(Location l) {
		Session s = sf.getCurrentSession();
		Location lOut = (Location) s.get(Location.class, l.getId_b());
		lOut.setStatut(l.getStatut());
		lOut.setDateSoumission(l.getDateSoumission());
		lOut.setDateDisponibilite(l.getDateDisponibilite());
		lOut.setRevenuCadastral(l.getRevenuCadastral());
		lOut.setSuperficie(l.getSuperficie());
		lOut.setClasse(l.getClasse());
		lOut.setProprio(l.getProprio());
		
		lOut.setBail(l.getBail());
		lOut.setCaution(l.getCaution());
		lOut.setCharges(l.getCharges());
		lOut.setLoyer(l.getLoyer());
		lOut.setMeuble(l.isMeuble());
				
		lOut.setAdresse(new Adresse(l.getAdresse().getRue(), l.getAdresse().getNumero(), l.getAdresse().getCp(), l.getAdresse().getVille()));
		
		s.saveOrUpdate(lOut);
		return lOut;
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
		Session s=sf.getCurrentSession();
		Achat aOut=(Achat) s.get(Achat.class, id);
		s.delete(aOut);

	}

	@Override
	public void deleteLocation(int id) {
		Session s=sf.getCurrentSession();
		Location lOut=(Location) s.get(Location.class, id);
		s.delete(lOut);

	}

}