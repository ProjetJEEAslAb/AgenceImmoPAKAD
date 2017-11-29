package fr.adaming.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="clients")
public class Client  {
	
	//Declaration des attributs
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_client;
	
	private String nom;
	
	private String num;
	
	//Liaisons UML en Java
	@Embedded
	private Adresse adresse;
	
	@OneToMany(mappedBy="client", fetch=FetchType.EAGER)
	private Set<Contrat> listeContrats;
	
	@ManyToMany
	@JoinColumn(name="classes")
	private Set<Classe> listeClasses;

	
	//Constructeurs
	public Client() {
		super();
	}


	public Client(String nom, String num) {
		super();
		this.nom = nom;
		this.num = num;
	}


	public Client(int id_client, String nom, String num) {
		super();
		this.id_client = id_client;
		this.nom = nom;
		this.num = num;
	}


	//Getters et setters
	public int getId_client() {
		return id_client;
	}


	public void setId_client(int id_client) {
		this.id_client = id_client;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getNum() {
		return num;
	}


	public void setNum(String num) {
		this.num = num;
	}


	public Set<Contrat> getListeContrats() {
		return listeContrats;
	}


	public void setListeContrats(Set<Contrat> listeContrats) {
		this.listeContrats = listeContrats;
	}


	public Set<Classe> getListeClasses() {
		return listeClasses;
	}


	public void setListeClasses(Set<Classe> listeClasses) {
		this.listeClasses = listeClasses;
	}


	public Adresse getAdresse() {
		return adresse;
	}


	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}


	@Override
	public String toString() {
		return "Client [id_client=" + id_client + ", nom=" + nom + ", num=" + num + ", adresse=" + adresse
				+ ", listeContrats=" + listeContrats + ", listeClasses=" + listeClasses + "]";
	}

		
}
