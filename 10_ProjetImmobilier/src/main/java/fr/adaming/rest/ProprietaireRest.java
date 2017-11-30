package fr.adaming.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Proprietaire;
import fr.adaming.service.IProprietaireService;

@RestController
public class ProprietaireRest {
	@Autowired
	private IProprietaireService proprietaireService;

	@RequestMapping(value = "/allproprietaires", method = RequestMethod.GET, produces = "application/json")
	public List<Proprietaire> getAllProprietaires() {
		return proprietaireService.getAllProprietaires();
	}

	@RequestMapping(value = "/proprietaire", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public Proprietaire addProprietaire(@RequestBody Proprietaire p) {
		return proprietaireService.addProprietaire(p);
	}

	@RequestMapping(value = "/proprietaire", method = RequestMethod.DELETE, consumes = "application/json")
	public void deleteProprietaire(@RequestBody Proprietaire p) {
		proprietaireService.deleteProprietaire(p);
	}

	@RequestMapping(value = "/proprietaire", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
	public Proprietaire updateProprietaire(@RequestBody Proprietaire p) {
		return proprietaireService.updateProprietaire(p);
	}

}
