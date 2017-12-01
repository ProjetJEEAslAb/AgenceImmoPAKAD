package fr.adaming.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Contrat;
import fr.adaming.service.IContratService;



@RestController
public class ContratRest {
	
	@Autowired
	private IContratService contratService;
	
	@RequestMapping(value="/contrat", method=RequestMethod.POST, produces="application/json", consumes="application/json")
	public Contrat addContrat(@RequestBody Contrat co){
		return contratService.addContrat(co);
	}
	
	@RequestMapping(value="/allcontrats", method=RequestMethod.GET, produces="application/json")
	public List<Contrat> getAllClasses(){
		return contratService.getAllContrats();
	}
	
	@RequestMapping(value="/contrat/{id}",method=RequestMethod.GET, produces="application/json")
	public Contrat getContratById(@PathVariable int id){
		return contratService.getContratById(id);
	}
	
	@RequestMapping(value="/contrat", method=RequestMethod.PUT, produces="application/json", consumes="application/json")
	public Contrat updateContrat(@RequestBody Contrat co){
		return contratService.updateContrat(co);
	}
	
	@RequestMapping(value="/contrat/{id}", method=RequestMethod.DELETE)
	public void deleteContrat(@PathVariable int id){
		contratService.deleteContrat(id);
	}


}
