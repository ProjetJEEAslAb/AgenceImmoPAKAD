package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Table;

@Embeddable
public class Adresse implements Serializable {
	
	//Attributs
	private String rue;
	
	private String numero;
	
	private int cp;
	
	private String ville;

	//Constructeurs
	public Adresse() {
		super();
	}

	public Adresse(String rue, String numero, int cp, String ville) {
		super();
		this.rue = rue;
		this.numero = numero;
		this.cp = cp;
		this.ville = ville;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public int getCp() {
		return cp;
	}

	public void setCp(int cp) {
		this.cp = cp;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	@Override
	public String toString() {
		return "Adresse [rue=" + rue + ", numero=" + numero + ", cp=" + cp + ", ville=" + ville + "]";
	}
	
	
	
	

}
