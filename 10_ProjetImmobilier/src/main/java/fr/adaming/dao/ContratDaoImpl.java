package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Client;
import fr.adaming.model.Contrat;

@Repository
public class ContratDaoImpl implements IContratDao {

	@Autowired
	private SessionFactory sf;

	// setter pour l'injection dépendance
	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	@Override
	public Contrat addContrat(Contrat co) {
		// Recuperation de la session
		Session s = sf.getCurrentSession();

		s.save(co);
		return co;
	}

	@Override
	public Contrat updateContrat(Contrat co) {
		Session s = sf.getCurrentSession();

		// recuperation du client par son id
		Contrat coOut = (Contrat) s.get(Contrat.class, co.getId_co());

		// mise à jour du client
		coOut.setPrixFinal(co.getPrixFinal());
		coOut.setDateAchat(co.getDateAchat());
		coOut.setClient(co.getClient());
		coOut.setAchat(co.getAchat());
		coOut.setLocation(co.getLocation());

		// modification du client
		s.saveOrUpdate(coOut);

		return coOut;
	}

	@Override
	public void deleteContrat(int id) {
		Session s = sf.getCurrentSession();
		Contrat coOut = (Contrat) s.get(Contrat.class, id);
		s.delete(coOut);

	}

	@Override
	public List<Contrat> getAllContrats() {
		Session s = sf.getCurrentSession();
		String req = "FROM Contrat co";
		Query query = s.createQuery(req);
		@SuppressWarnings("unchecked")
		List<Contrat> liste = query.list();
		return liste;
	}

	@Override
	public Contrat getContratById(int id) {
		Session s = sf.getCurrentSession();
		Contrat co = (Contrat) s.get(Contrat.class, id);
		return co;
	}

}
