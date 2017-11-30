package fr.adaming.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.adaming.model.Client;

@Repository
public class ClientDaoImpl implements IClientDao {

	@Autowired
	private SessionFactory sf;

	// setter pour l'injection dépendance
	public void setSf(SessionFactory sf) {
		this.sf = sf;
	}

	// =========================Les methodes
	// Dao=======================================//

	@Override
	public Client addClient(Client cl) {

		// Recuperation de la session
		Session s = sf.getCurrentSession();

		s.save(cl);
		return cl;
	}

	@Override
	public Client updateClient(Client cl) {

		Session s = sf.getCurrentSession();

		// recuperation du client par son id
		Client clOut = (Client) s.get(Client.class, cl.getId_client());

		// mise à jour du client
		clOut.setNom(cl.getNom());
		clOut.setNum(cl.getNum());
		clOut.setAdresse(cl.getAdresse());

		// modification du client
		s.saveOrUpdate(clOut);

		return clOut;
	}

	@Override
	public List<Client> getAllClient() {

		Session s = sf.getCurrentSession();
		String req = "FROM Client cl";
		Query query = s.createQuery(req);
		@SuppressWarnings("unchecked")
		List<Client> liste = query.list();
		return liste;
	}

	@Override
	public void deleteClient(int id) {
		Session s = sf.getCurrentSession();
		Client clOut = (Client) s.get(Client.class, id);
		s.delete(clOut);
	}

	@Override
	public Client getClientById(int id) {
		Session s = sf.getCurrentSession();
		Client cl = (Client) s.get(Client.class, id);
		return cl;
	}

}
