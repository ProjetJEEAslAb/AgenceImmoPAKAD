package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IVisiteDao;
import fr.adaming.model.Visite;

@Service
@Transactional
public class VisiteServiceImpl implements IVisiteService {

	// =====injection Dao====//
	@Autowired
	private IVisiteDao visiteDao;

	public void setVisiteDao(IVisiteDao visiteDao) {
		this.visiteDao = visiteDao;
	}


	// ===============================================================================//


	@Override
	public List<Visite> getAllVisites() {
		return visiteDao.getAllVisites();
	}

	@Override
	public Visite getVisiteById(int id) {
		return visiteDao.getVisiteById(id);
	}

	@Override
	public Visite addVisite(Visite v) {
		return visiteDao.addVisite(v);
	}

	@Override
	public Visite updateVisite(Visite v) {
		return visiteDao.updateVisite(v);
	}

	@Override
	public void deleteVisite(int id) {
		visiteDao.deleteVisite(id);

	}

}
