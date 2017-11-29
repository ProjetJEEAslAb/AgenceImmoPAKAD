package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Agent;
import fr.adaming.model.Proprietaire;

public interface IProprietaireDao {
	public List<Proprietaire> getAllProprietaires();
	public Proprietaire getProprietaireById(int id);
	public Proprietaire addProprietaire(Proprietaire p);
	public Proprietaire updateProprietaire(Proprietaire p);
	public void deleteProprietaire(Proprietaire p);
}
