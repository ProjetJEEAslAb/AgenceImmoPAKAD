package fr.adaming.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Achat;
import fr.adaming.model.Bien;
import fr.adaming.model.Classe;
import fr.adaming.model.Location;
import fr.adaming.service.IBienService;

@RestController
public class BienRest {
	
	@Autowired
	private IBienService bienService;
	
	//---------------------------------------------------------------------------------------------
	
	@RequestMapping(value="/achat", method=RequestMethod.POST, produces="application/json", consumes="application/json")
	public Bien addAchat(@RequestBody Achat a, @RequestBody Classe c){
		return bienService.addAchat(a, c);
	}
	
	@RequestMapping(value="/location", method=RequestMethod.POST, produces="application/json", consumes="application/json")
	public Bien addLocation(@RequestBody Location l, @RequestBody Classe c){
		return bienService.addLocation(l, c);
	}
	
	//---------------------------------------------------------------------------------------------
	
	@RequestMapping(value="/achats", method=RequestMethod.GET, produces="application/json")
	public List<Achat> getAllAchats(){
		return bienService.getAllAchats();
	}
	
	@RequestMapping(value="/locations", method=RequestMethod.GET, produces="application/json")
	public List<Location> getAllLocations(){
		return bienService.getAllLocations();
	}

	//---------------------------------------------------------------------------------------------
	
	@RequestMapping(value="/achat/{id}",method=RequestMethod.GET, produces="application/json")
	public Achat getAchatById(@PathVariable int id){
		return bienService.getAchatById(id);
		
	}
	
	@RequestMapping(value="/location/{id}",method=RequestMethod.GET, produces="application/json")
	public Location getLocationById(@PathVariable int id){
		return bienService.getLocationById(id);
		
	}
	
	//---------------------------------------------------------------------------------------------

}
