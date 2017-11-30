package fr.adaming.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.adaming.dao.IBienDao;
import fr.adaming.dao.IClasseDao;
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
	@Autowired
	private IClasseDao classeDao;

	public void setMarchDao(IBienDao marchDao) {
		this.bienDao = marchDao;
	}

	@Override
	public Achat addAchat(Achat a) {

		if (a.getClasse().getModeOffre().equals("Achat") && a.getClasse().getPrixMax() > a.getPrixVente()
				&& a.getClasse().getSuperficieMin() < a.getSuperficie()) {

			return bienDao.addAchat(a);

		} else {

			return null;

		}
	}

	@Override
	public Location addLocation(Location l) {

		Classe cl = classeDao.getClasseById(l.getClasse().getId_cl());
		l.setClasse(cl);
		// System.out.println("Service----" + l);
		// System.out.println("Service----" + cl);

		// if (cl.getModeOffre().equals("Location") && cl.getPrixMax() >
		// l.getLoyer()
		// && cl.getSuperficieMin() < l.getSuperficie()) {
		//
		// return bienDao.addLocation(l);
		//
		// } else {
		//
		// return null;
		// }

		if (l.getClasse().getModeOffre().equals("Location") && l.getClasse().getPrixMax() > l.getLoyer()
				&& l.getClasse().getSuperficieMin() < l.getSuperficie()) {

			return bienDao.addLocation(l);

		} else {

			return null;

		}
	}

	@Override
	public Achat updateAchat(Achat a) {
		return bienDao.updateAchat(a);
	}

	@Override
	public Location updateLocation(Location l) {
		// TODO Auto-generated method stub
		return bienDao.updateLocation(l);
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
		bienDao.deleteAchat(id);

	}

	@Override
	public void deleteLocation(int id) {
		bienDao.deleteLocation(id);

	}

}
