package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="achats")
public class Achat extends Bien implements Serializable  {
	
	private double prixVente;
	
	private String etat;

	public Achat() {
		super();
	}

	public Achat(double prixVente, String etat) {
		super();
		this.prixVente = prixVente;
		this.etat = etat;
	}

	public double getPrixVente() {
		return prixVente;
	}

	public void setPrixVente(double prixVente) {
		this.prixVente = prixVente;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	@Override
	public String toString() {
		return "Achat [prixVente=" + prixVente + ", etat=" + etat + ", id_b=" + id_b + ", statut=" + statut
				+ ", dateSoumission=" + dateSoumission + ", dateDisponibilite=" + dateDisponibilite
				+ ", revenuCadastral=" + revenuCadastral + ", superficie=" + superficie + ", classe=" + classe
				+ ", agent=" + agent + ", contrat=" + contrat + ", adresse=" + adresse + ", proprio=" + proprio + "]";
	}
	
	

}
