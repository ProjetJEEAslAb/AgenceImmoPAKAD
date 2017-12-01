package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IContratDao;
import fr.adaming.model.Contrat;

@Service
@Transactional
public class ServiceContratImpl implements IContratService {
	
	@Autowired
	private IContratDao contratDao;

	public void setMarchDao(IContratDao marchDao) {
		this.contratDao = marchDao;
	}

	@Override
	public Contrat addContrat(Contrat co) {
		return contratDao.addContrat(co);
	}

	@Override
	public Contrat updateContrat(Contrat co) {
		return contratDao.updateContrat(co);
	}

	@Override
	public void deleteContrat(int id) {
		contratDao.deleteContrat(id);
		
	}

	@Override
	public List<Contrat> getAllContrats() {
		return contratDao.getAllContrats();
	}

	@Override
	public Contrat getContratById(int id) {
		return contratDao.getContratById(id);
	}

}
