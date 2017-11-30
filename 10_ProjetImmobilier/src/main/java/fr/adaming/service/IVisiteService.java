package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Visite;

public interface IVisiteService {
	
	public List<Visite> getAllVisites();
	public Visite getVisiteById(int id);
	public Visite addVisite(Visite v);
	public Visite updateVisite(Visite v);
	public void deleteVisite(int id);
}
