package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IClientDao;
import fr.adaming.model.Client;

@Service
@Transactional
public class ClientServiceImpl implements IClientService{

	//=====injection Dao====//
	@Autowired
	private IClientDao clientDao;
	
	public void setClientDao(IClientDao clientDao) {
		this.clientDao = clientDao;
	}

//===============================================================================//
	
	@Override
	public Client addClient(Client cl) {
		return clientDao.addClient(cl);
	}
	
	@Override
	public List<Client> getAllClient() {
		return clientDao.getAllClient();
	}

	@Override
	public Client updateClient(Client cl) {
		return clientDao.updateClient(cl);
	}

	@Override
	public void deleteClient(int id) {
		 clientDao.deleteClient(id);
	}

	@Override
	public Client getClientById(int id) {
		return clientDao.getClientById(id);
	}

	

}
