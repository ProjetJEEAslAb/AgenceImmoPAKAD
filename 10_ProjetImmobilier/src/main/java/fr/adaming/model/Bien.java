package fr.adaming.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="biens")
public class Bien {
	
	//Declaration des attributs
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ref")
	protected int id_b;
	
	protected String statut;
	
	protected Date dateSoumission;
	
	protected Date dateDisponibilite;
	
	protected double revenuCadastral;
	
	protected double superficie;
	
	//Liaisons UML en Java
	
	protected Classe classe;
	
	protected Agent agent;
	
	protected Contrat contrat;

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
		this.ref = ref;
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


	@Override
	public String toString() {
		return "Bien [ref=" + ref + ", statut=" + statut + ", dateSoumission=" + dateSoumission + ", dateDisponibilite="
				+ dateDisponibilite + ", revenuCadastral=" + revenuCadastral + ", superficie=" + superficie + "]";
	}
	
	
}
