package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IProprietaireDao;
import fr.adaming.model.Proprietaire;

@Service
@Transactional
public class ProprietaireServiceImpl implements IProprietaireService {
	@Autowired
	private IProprietaireDao proprietaireDao;

	@Override
	public List<Proprietaire> getAllProprietaires() {
		return proprietaireDao.getAllProprietaires();
	}

	@Override
	public Proprietaire getProprietaireById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Proprietaire addProprietaire(Proprietaire p) {
		return proprietaireDao.addProprietaire(p);
	}

	@Override
	public Proprietaire updateProprietaire(Proprietaire p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteProprietaire(Proprietaire p) {
		proprietaireDao.deleteProprietaire(p);
		
	}

}
