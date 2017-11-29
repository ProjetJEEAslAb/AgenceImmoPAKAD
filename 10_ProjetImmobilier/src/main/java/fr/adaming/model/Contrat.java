package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="contrats")
public class Contrat implements Serializable {
	
	//Declaration des attributs
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="num")
	private int id_co;
	
	private Date dateAchat;
	
	private double prixFinal;
	
	//Liaisons UML en Java
	private Client client;

	//Constructeurs
	public Contrat() {
		super();
	}

	public Contrat(Date dateAchat, double prixFinal) {
		super();
		this.dateAchat = dateAchat;
		this.prixFinal = prixFinal;
	}

	public Contrat(int id_co, Date dateAchat, double prixFinal) {
		super();
		this.id_co = id_co;
		this.dateAchat = dateAchat;
		this.prixFinal = prixFinal;
	}

	//Getters et setters
	public int getId_co() {
		return id_co;
	}

	public void setId_co(int id_co) {
		this.id_co = id_co;
	}

	public Date getDateAchat() {
		return dateAchat;
	}

	public void setDateAchat(Date dateAchat) {
		this.dateAchat = dateAchat;
	}

	public double getPrixFinal() {
		return prixFinal;
	}

	public void setPrixFinal(double prixFinal) {
		this.prixFinal = prixFinal;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@Override
	public String toString() {
		return "Contrat [id_co=" + id_co + ", dateAchat=" + dateAchat + ", prixFinal=" + prixFinal + ", client="
				+ client + "]";
	}
	
	
	

}
