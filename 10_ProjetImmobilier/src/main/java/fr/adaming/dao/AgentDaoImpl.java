package fr.adaming.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import fr.adaming.model.Agent;

public class AgentDaoImpl implements IAgentDao {
	@Autowired
	private SessionFactory sf;

	@Override
	public Agent isExist(Agent a) {
		Session s=sf.getCurrentSession();
		String req="FROM Agent a WHERE a.identifiant=?pId AND a.mdp=?pMdp";
		Query query=s.createQuery(req);
		query.setInteger("pId", a.getIdentifiant());
		query.setString("pMdp", a.getMdp());
		Agent aOut=(Agent) query.uniqueResult();
		return aOut;
	}



}
