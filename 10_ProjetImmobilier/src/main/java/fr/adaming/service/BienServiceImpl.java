package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IBienDao;
import fr.adaming.model.Achat;
import fr.adaming.model.Agent;
import fr.adaming.model.Bien;
import fr.adaming.model.Classe;
import fr.adaming.model.Location;

@Service
@Transactional
public class BienServiceImpl implements IBienService {

	@Autowired
	private IBienDao bienDao;

	public void setMarchDao(IBienDao marchDao) {
		this.bienDao = marchDao;
	}

	@Override
	public Achat addAchat(Achat a, Classe c) {

		if (c.getModeOffre() == "Achat" && c.getPrixMax() > a.getPrixVente()
				&& c.getSuperficieMin() < a.getSuperficie()) {

			return bienDao.addAchat(a);

		} else {

			return null;

		}
	}

	@Override
	public Location addLocation(Location l, Classe c) {
		if (c.getModeOffre() == "Location" && c.getPrixMax() > l.getLoyer()
				&& c.getSuperficieMin() < l.getSuperficie()) {

			return bienDao.addLocation(l);

		} else {

			return null;

		}
	}

	@Override
	public Achat updateAchat(Achat a, Classe c) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location updateLocation(Location l, Classe c) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Achat> getAllAchats() {
		return bienDao.getAllAchats();
	}

	@Override
	public List<Location> getAllLocations() {
		return bienDao.getAllLocations();
	}

	@Override
	public Achat getAchatById(int id) {
		return bienDao.getAchatById(id);
	}

	@Override
	public Location getLocationById(int id) {
		return bienDao.getLocationById(id);
	}

	@Override
	public void deleteAchat(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteLocation(int id) {
		// TODO Auto-generated method stub

	}

}
