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

@Entity
@Table(name="visites")
public class Visite implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private Date rdv;
	
	//Liaisons UML en Java
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="bien")
	private Bien bien;
	
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

	public Bien getBien() {
		return bien;
	}

	public void setBien(Bien bien) {
		this.bien = bien;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@Override
	public String toString() {
		return "Visite [id=" + id + ", rdv=" + rdv + ", bien=" + bien + ", client=" + client + "]";
	}
	
	
	

}
