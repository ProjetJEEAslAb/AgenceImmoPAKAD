package fr.adaming.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.adaming.model.Agent;
import fr.adaming.service.IAgentService;

//@RestController
public class AgentRest {
	@Autowired
	private IAgentService agentService;
	
	@RequestMapping(value="/agent", method=RequestMethod.POST, produces="application/json", consumes="application/json")
	public Agent isExist(@RequestBody Agent a){
		System.out.println("Mais euh");
		return agentService.isExist(a);
	}
	
}
