package fr.adaming.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Visite;
import fr.adaming.service.IVisiteService;

@RestController
public class VisiteRest {

	//injection du service
	@Autowired
	private IVisiteService visiteService;
	
	//===================methodes rest============================//
	
	@RequestMapping(value="/listeVisite", method=RequestMethod.GET, produces="application/json")
	public List<Visite> getAllVisite(){
		return visiteService.getAllVisites();
	}
	
	@RequestMapping(value="/visite/{id}",method=RequestMethod.GET, produces="application/json")
	public Visite getVisiteById(@PathVariable int id){
		return visiteService.getVisiteById(id);
		
	}
	
	@RequestMapping(value="/visite",method=RequestMethod.POST, produces="application/json",consumes="application/json")
	public Visite addVisite(@RequestBody Visite v){
		return visiteService.addVisite(v);
		
	}
	
	@RequestMapping(value="/visite/{id}",method=RequestMethod.DELETE)
	public void deleteVisite(@PathVariable int id){
		visiteService.deleteVisite(id);
	}
	
	@RequestMapping(value = "/visite", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
	public Visite updateVisite(@RequestBody Visite v){
		return visiteService.updateVisite(v);
		
	}
}
