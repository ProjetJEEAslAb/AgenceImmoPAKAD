package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="agents")
public class Agent implements Serializable {
	
	//Declaration des attributs
	@Id
	private int identifiant;
	
	private String mdp;

	
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

	@Override
	public String toString() {
		return "Agent [identifiant=" + identifiant + ", mdp=" + mdp + "]";
	}
	
	

}
