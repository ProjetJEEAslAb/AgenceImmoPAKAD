package fr.adaming.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@MappedSuperclass
public abstract class Bien implements Serializable {
	
	//Declaration des attributs
	@Id
	@Column(name="ref")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected int id_b;
	
	protected String statut;
	
	@Temporal(TemporalType.DATE)
	protected Date dateSoumission;
	
	@Temporal(TemporalType.DATE)
	protected Date dateDisponibilite;
	
	protected double revenuCadastral;
	
	protected double superficie;
	
	//Liaisons UML en Java
	@ManyToOne
	@JoinColumn(name="cl_id", referencedColumnName="code")
	protected Classe classe;
	
	@ManyToOne
	@JoinColumn(name="ag_id", referencedColumnName="identifiant")
	protected Agent agent;
	
	@OneToOne
	@JoinColumn(name="co_id", referencedColumnName="num")
	protected Contrat contrat;
	
	@Embedded
	protected Adresse adresse;
	
	@ManyToOne
	@JoinColumn(name="p_id", referencedColumnName="id_p")
	protected Proprietaire proprio;

	//Constructeurs
	public Bien() {
		super();
	}

		
	public Bien(String statut, Date dateSoumission, Date dateDisponibilite, double revenuCadastral, double superficie) {
		super();
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.dateDisponibilite = dateDisponibilite;
		this.revenuCadastral = revenuCadastral;
		this.superficie = superficie;
	}


	public Bien(int ref, String statut, Date dateSoumission, Date dateDisponibilite, double revenuCadastral,
			double superficie) {
		super();
		this.id_b = ref;
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.dateDisponibilite = dateDisponibilite;
		this.revenuCadastral = revenuCadastral;
		this.superficie = superficie;
	}


	//Getters et Setters
	public int getId_b() {
		return id_b;
	}


	public void setId_b(int id_b) {
		this.id_b = id_b;
	}


	public String getStatut() {
		return statut;
	}


	public void setStatut(String statut) {
		this.statut = statut;
	}


	public Date getDateSoumission() {
		return dateSoumission;
	}


	public void setDateSoumission(Date dateSoumission) {
		this.dateSoumission = dateSoumission;
	}


	public Date getDateDisponibilite() {
		return dateDisponibilite;
	}


	public void setDateDisponibilite(Date dateDisponibilite) {
		this.dateDisponibilite = dateDisponibilite;
	}


	public double getRevenuCadastral() {
		return revenuCadastral;
	}


	public void setRevenuCadastral(double revenuCadastral) {
		this.revenuCadastral = revenuCadastral;
	}


	public double getSuperficie() {
		return superficie;
	}


	public void setSuperficie(double superficie) {
		this.superficie = superficie;
	}


	public Classe getClasse() {
		return classe;
	}


	public void setClasse(Classe classe) {
		this.classe = classe;
	}


	public Agent getAgent() {
		return agent;
	}


	public void setAgent(Agent agent) {
		this.agent = agent;
	}


	public Contrat getContrat() {
		return contrat;
	}


	public void setContrat(Contrat contrat) {
		this.contrat = contrat;
	}


	public Adresse getAdresse() {
		return adresse;
	}


	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}


	public Proprietaire getProprio() {
		return proprio;
	}


	public void setProprio(Proprietaire proprio) {
		this.proprio = proprio;
	}


	@Override
	public String toString() {
		return "Bien [id_b=" + id_b + ", statut=" + statut + ", dateSoumission=" + dateSoumission
				+ ", dateDisponibilite=" + dateDisponibilite + ", revenuCadastral=" + revenuCadastral + ", superficie="
				+ superficie + ", classe=" + classe + ", agent=" + agent + ", contrat=" + contrat + ", adresse="
				+ adresse + "]";
	}

	
}
