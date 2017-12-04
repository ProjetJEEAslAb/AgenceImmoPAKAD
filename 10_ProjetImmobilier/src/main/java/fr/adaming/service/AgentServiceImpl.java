package fr.adaming.service;

import org.springframework.beans.factory.annotation.Autowired;

import fr.adaming.dao.IAgentDao;
import fr.adaming.model.Agent;

public class AgentServiceImpl implements IAgentService {
	@Autowired
	private IAgentDao agentDao;

	@Override
	public Agent isExist(Agent a) {
		return agentDao.isExist(a);
	}

	
}
