package fr.adaming.dao;

import java.util.List;

import fr.adaming.model.Contrat;

public interface IContratDao {
	
	public Contrat addContrat(Contrat co);
	
	public Contrat updateContrat(Contrat co);
	
	public void deleteContrat(int id);
	
	public List<Contrat> getAllContrats();
	
	public Contrat getContratById(int id);

}
