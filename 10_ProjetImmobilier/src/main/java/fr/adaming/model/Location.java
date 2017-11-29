package fr.adaming.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="locations")
public class Location extends Bien implements Serializable{
	
	//Attributs
	private double caution;
	
	private double loyer;
	
	private double charges;
	
	private String bail;
	
	private boolean meuble;

	
	//Constructeurs
	public Location() {
		super();
	}


	public Location(double caution, double loyer, double charges, String bail, boolean meuble) {
		super();
		this.caution = caution;
		this.loyer = loyer;
		this.charges = charges;
		this.bail = bail;
		this.meuble = meuble;
	}


	public double getCaution() {
		return caution;
	}


	public void setCaution(double caution) {
		this.caution = caution;
	}


	public double getLoyer() {
		return loyer;
	}


	public void setLoyer(double loyer) {
		this.loyer = loyer;
	}


	public double getCharges() {
		return charges;
	}


	public void setCharges(double charges) {
		this.charges = charges;
	}


	public String getBail() {
		return bail;
	}


	public void setBail(String bail) {
		this.bail = bail;
	}


	public boolean isMeuble() {
		return meuble;
	}


	public void setMeuble(boolean meuble) {
		this.meuble = meuble;
	}


	@Override
	public String toString() {
		return "Location [caution=" + caution + ", loyer=" + loyer + ", charges=" + charges + ", bail=" + bail
				+ ", meuble=" + meuble + ", id_b=" + id_b + ", statut=" + statut + ", dateSoumission=" + dateSoumission
				+ ", dateDisponibilite=" + dateDisponibilite + ", revenuCadastral=" + revenuCadastral + ", superficie="
				+ superficie + ", classe=" + classe + ", agent=" + agent + ", contrat=" + contrat + ", adresse="
				+ adresse + ", proprio=" + proprio + "]";
	}
	
	
	

}
