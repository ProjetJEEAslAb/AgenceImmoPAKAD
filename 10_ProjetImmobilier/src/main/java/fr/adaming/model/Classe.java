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
@Table(name="classes")
public class Classe implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="code")
	private int id_cl;
	
	private String typeBien;
	
	private String modeOffre;
	
	private double prixMax;
	
	private double superficieMin;
	
	//Liaisons UML en Java
	@OneToMany(mappedBy = "classe")
	private List<Bien> listeBiens;

	//Constructeurs
	public Classe() {
		super();
	}

	public Classe(String typeBien, String modeOffre, double prixMax, double superficieMin) {
		super();
		this.typeBien = typeBien;
		this.modeOffre = modeOffre;
		this.prixMax = prixMax;
		this.superficieMin = superficieMin;
	}

	public Classe(int id_cl, String typeBien, String modeOffre, double prixMax, double superficieMin) {
		super();
		this.id_cl = id_cl;
		this.typeBien = typeBien;
		this.modeOffre = modeOffre;
		this.prixMax = prixMax;
		this.superficieMin = superficieMin;
	}

	public int getId_cl() {
		return id_cl;
	}

	public void setId_cl(int id_cl) {
		this.id_cl = id_cl;
	}

	public String getTypeBien() {
		return typeBien;
	}

	public void setTypeBien(String typeBien) {
		this.typeBien = typeBien;
	}

	public String getModeOffre() {
		return modeOffre;
	}

	public void setModeOffre(String modeOffre) {
		this.modeOffre = modeOffre;
	}

	public double getPrixMax() {
		return prixMax;
	}

	public void setPrixMax(double prixMax) {
		this.prixMax = prixMax;
	}

	public double getSuperficieMin() {
		return superficieMin;
	}

	public void setSuperficieMin(double superficieMin) {
		this.superficieMin = superficieMin;
	}

	public List<Bien> getListeBiens() {
		return listeBiens;
	}

	public void setListeBiens(List<Bien> listeBiens) {
		this.listeBiens = listeBiens;
	}

	@Override
	public String toString() {
		return "Classe [id_cl=" + id_cl + ", typeBien=" + typeBien + ", modeOffre=" + modeOffre + ", prixMax=" + prixMax
				+ ", superficieMin=" + superficieMin + "]";
	}
	
	
	

}
