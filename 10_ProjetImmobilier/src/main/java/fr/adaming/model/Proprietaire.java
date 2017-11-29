package fr.adaming.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "proprietaires")
public class Proprietaire implements Serializable {

	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_p")
	private int id;

	private String nom;

	private String numPrive;

	private String numTravail;

	// Liaisons UML en Java
	@OneToMany(mappedBy = "proprio", fetch=FetchType.EAGER)
	private Set<Achat> listeAchats;

	// Liaisons UML en Java
	@OneToMany(mappedBy = "proprio", fetch=FetchType.EAGER)
	private Set<Location> listeLocations;

	// Constructeurs
	public Proprietaire() {
		super();
	}

	public Proprietaire(String nom, String numPrivé, String numTravail) {
		super();
		this.nom = nom;
		this.numPrive = numPrivé;
		this.numTravail = numTravail;
	}

	public Proprietaire(int id, String nom, String numPrivé, String numTravail) {
		super();
		this.id = id;
		this.nom = nom;
		this.numPrive = numPrivé;
		this.numTravail = numTravail;
	}

	// Getters et Setters
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

	public String getNumPrive() {
		return numPrive;
	}

	public void setNumPrivé(String numPrive) {
		this.numPrive = numPrive;
	}

	public String getNumTravail() {
		return numTravail;
	}

	public void setNumTravail(String numTravail) {
		this.numTravail = numTravail;
	}

	public Set<Achat> getListeAchats() {
		return listeAchats;
	}

	public void setListeAchats(Set<Achat> listeAchats) {
		this.listeAchats = listeAchats;
	}

	public Set<Location> getListeLocations() {
		return listeLocations;
	}

	public void setListeLocations(Set<Location> listeLocations) {
		this.listeLocations = listeLocations;
	}

	@Override
	public String toString() {
		return "Proprietaire [id=" + id + ", nom=" + nom + ", numPrivé=" + numPrive + ", numTravail=" + numTravail
				+ ", listeAchats=" + listeAchats + ", listeLocations=" + listeLocations + "]";
	}

	
}
