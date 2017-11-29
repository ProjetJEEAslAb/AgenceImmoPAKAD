package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Achat;
import fr.adaming.model.Classe;
import fr.adaming.model.Location;

public interface IBienService {
	
	public Achat addAchat(Achat a, Classe c);
	public Location addLocation(Location l, Classe c);
	
	public Achat updateAchat(Achat a, Classe c);
	public Location updateLocation(Location l, Classe c);
	
	public List<Achat> getAllAchats();
	public List<Location> getAllLocations();

	public Achat getAchatById(int id);
	public Location getLocationById(int id);

	public void deleteAchat(int id);
	public void deleteLocation(int id);

}
