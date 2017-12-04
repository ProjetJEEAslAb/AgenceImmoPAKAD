package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="visites")
public class Visite implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Temporal(TemporalType.DATE)
	private Date rdv;
	
	@Temporal(TemporalType.TIME)
	private Date heure;
	
	//Liaisons UML en Java
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="achat")
	private Achat achat;
	
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="location")
	private Location location;
	
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="client")
	private Client client;

	public Visite() {
		super();
	}

	public Visite(Date rdv) {
		super();
		this.rdv = rdv;
	}

	public Visite(int id, Date rdv) {
		super();
		this.id = id;
		this.rdv = rdv;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getRdv() {
		return rdv;
	}

	public void setRdv(Date rdv) {
		this.rdv = rdv;
	}

	
	public Achat getAchat() {
		return achat;
	}

	public void setAchat(Achat achat) {
		this.achat = achat;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Date getHeure() {
		return heure;
	}

	public void setHeure(Date heure) {
		this.heure = heure;
	}

	@Override
	public String toString() {
		return "Visite [id=" + id + ", rdv=" + rdv + ", heure=" + heure + ", achat=" + achat + ", location=" + location
				+ ", client=" + client + "]";
	}

	
	
	

}
