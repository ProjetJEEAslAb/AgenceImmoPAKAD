package fr.adaming.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="agents")
public class Agent implements Serializable {
	
	//Declaration des attributs
	@Id
	private int identifiant;
	
	private String mdp;
	
	//Liaisons UML en Java
	@OneToMany(mappedBy="agent")
	private List<Achat> listeAchats;
	
	@OneToMany(mappedBy="agent")
	private List<Location> listeLocations;
	
	
	//Constructeurs
	public Agent() {
		super();
	}

	public Agent(String mdp) {
		super();
		this.mdp = mdp;
	}

	public Agent(int identifiant, String mdp) {
		super();
		this.identifiant = identifiant;
		this.mdp = mdp;
	}

	public int getIdentifiant() {
		return identifiant;
	}

	public void setIdentifiant(int identifiant) {
		this.identifiant = identifiant;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public List<Achat> getListeAchats() {
		return listeAchats;
	}

	public void setListeAchats(List<Achat> listeAchats) {
		this.listeAchats = listeAchats;
	}

	public List<Location> getListeLocations() {
		return listeLocations;
	}

	public void setListeLocations(List<Location> listeLocations) {
		this.listeLocations = listeLocations;
	}

	@Override
	public String toString() {
		return "Agent [identifiant=" + identifiant + ", mdp=" + mdp + ", listeAchats=" + listeAchats
				+ ", listeLocations=" + listeLocations + "]";
	}

	
	
	
	
	

}
