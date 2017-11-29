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
@Table(name="proprietaires")
public class Proprietaire implements Serializable {
	
	//Attributs
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_p")
	private int id;
	
	private String nom;
	
	private String numPrivé;
	
	private String numTravail;
	
	//Liaisons UML en Java
	@OneToMany(mappedBy="proprio")
	private List<Bien> listeBiens;

	//Constructeurs
	public Proprietaire() {
		super();
	}

	public Proprietaire(String nom, String numPrivé, String numTravail) {
		super();
		this.nom = nom;
		this.numPrivé = numPrivé;
		this.numTravail = numTravail;
	}

	public Proprietaire(int id, String nom, String numPrivé, String numTravail) {
		super();
		this.id = id;
		this.nom = nom;
		this.numPrivé = numPrivé;
		this.numTravail = numTravail;
	}

	//Getters et Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getNumPrivé() {
		return numPrivé;
	}

	public void setNumPrivé(String numPrivé) {
		this.numPrivé = numPrivé;
	}

	public String getNumTravail() {
		return numTravail;
	}

	public void setNumTravail(String numTravail) {
		this.numTravail = numTravail;
	}

	public List<Bien> getListeBiens() {
		return listeBiens;
	}

	public void setListeBiens(List<Bien> listeBiens) {
		this.listeBiens = listeBiens;
	}

	@Override
	public String toString() {
		return "Proprietaire [id=" + id + ", nom=" + nom + ", numPrivé=" + numPrivé + ", numTravail=" + numTravail
				+ "]";
	}
	
	
	
	

}
