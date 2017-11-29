package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Proprietaire;

public interface IProprietaireService {
	public List<Proprietaire> getAllProprietaires();
	public Proprietaire getProprietaireById(int id);
	public Proprietaire addProprietaire(Proprietaire p);
	public Proprietaire updateProprietaire(Proprietaire p);
	public void deleteProprietaire(Proprietaire p);
}
