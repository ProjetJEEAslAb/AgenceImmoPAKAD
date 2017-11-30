package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Contrat;

public interface IContratService {
	
public Contrat addContrat(Contrat co);
	
	public Contrat updateContrat(Contrat co);
	
	public void deleteContrat(int id);
	
	public List<Contrat> getAllContrats();
	
	public Contrat getContratById(int id);

}
