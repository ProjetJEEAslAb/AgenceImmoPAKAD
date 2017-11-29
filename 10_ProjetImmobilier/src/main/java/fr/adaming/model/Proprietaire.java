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
	
	private String numPriv�;
	
	private String numTravail;
	
	//Liaisons UML en Java
	@OneToMany(mappedBy="proprio")
	private List<Bien> listeBiens;

	//Constructeurs
	public Proprietaire() {
		super();
	}

	public Proprietaire(String nom, String numPriv�, String numTravail) {
		super();
		this.nom = nom;
		this.numPriv� = numPriv�;
		this.numTravail = numTravail;
	}

	public Proprietaire(int id, String nom, String numPriv�, String numTravail) {
		super();
		this.id = id;
		this.nom = nom;
		this.numPriv� = numPriv�;
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

	public String getNumPriv�() {
		return numPriv�;
	}

	public void setNumPriv�(String numPriv�) {
		this.numPriv� = numPriv�;
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
		return "Proprietaire [id=" + id + ", nom=" + nom + ", numPriv�=" + numPriv� + ", numTravail=" + numTravail
				+ "]";
	}
	
	
	
	

}
