package fr.adaming.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Classe;
import fr.adaming.service.IClasseService;

@RestController
public class ClasseRest {
	@Autowired
	private IClasseService classeService;
	
	@RequestMapping(value="/classe", method=RequestMethod.POST, produces="application/json", consumes="application/json")
	public Classe addClasse(@RequestBody Classe c){
		return classeService.addClasse(c);
	}
	
	@RequestMapping(value="/allclasses", method=RequestMethod.GET, produces="application/json")
	public List<Classe> getAllClasses(){
		return classeService.getAllClasses();
	}
	
	@RequestMapping(value="/classe/{id}",method=RequestMethod.GET, produces="application/json")
	public Classe getClasseById(@PathVariable int id){
		return classeService.getClasseById(id);
	}
	
	@RequestMapping(value="/classe", method=RequestMethod.PUT, produces="application/json", consumes="application/json")
	public Classe updateClasse(Classe c){
		return classeService.updateClasse(c);
	}
	
	@RequestMapping(value="/classe", method=RequestMethod.DELETE, consumes="application/json")
	public void deleteClasse(Classe c){
		classeService.deleteClasse(c);
	}

}
