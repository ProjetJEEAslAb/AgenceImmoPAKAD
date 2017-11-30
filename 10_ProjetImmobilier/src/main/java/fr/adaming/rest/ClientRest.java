package fr.adaming.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Client;
import fr.adaming.service.IClientService;

@RestController
public class ClientRest {
	
	//injection du service
	
	@Autowired
	private IClientService clientService;
	
	//===================methodes rest============================//
	
	@RequestMapping(value="/client",method=RequestMethod.POST,produces="application/json", consumes="application/json")
	public Client addClient(@RequestBody Client cl){
		return clientService.addClient(cl);
		
	}
	
	//============================================================//
	@RequestMapping(value="/listeClient", method=RequestMethod.GET, produces="application/json")
	public List<Client> getAllClients(){
		return clientService.getAllClient();
	}
	
	//===========================================================//
	@RequestMapping(value="/client/{id}",method=RequestMethod.DELETE)
	public void deleteClient(@PathVariable int id){
		clientService.deleteClient(id);
	}
	
	//===========================================================//
	@RequestMapping(value = "/client", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
	public Client updateClient(@RequestBody Client cl){
		return clientService.updateClient(cl);
		
	}
	//===========================================================//
	@RequestMapping(value="/client/{id}",method=RequestMethod.GET, produces="application/json")
	public Client getClientById(@PathVariable int id){
		return clientService.getClientById(id);
	}
	
}
