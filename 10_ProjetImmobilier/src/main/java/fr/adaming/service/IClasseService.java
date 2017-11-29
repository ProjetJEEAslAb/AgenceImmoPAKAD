package fr.adaming.service;

import java.util.List;

import fr.adaming.model.Classe;

public interface IClasseService {
	public Classe addClasse(Classe c);
	public List<Classe> getAllClasses();
	public Classe getClasseById(int id);
	public Classe updateClasse(Classe c);
	public void deleteClasse(Classe c);
}
