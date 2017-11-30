immoApp.factory("visiteProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/listeVisite";
	var restUrlAdd = "/visite";
	var restUrlDelete = "/visite/";
	var restUrlUpdate = "/visite";
	var restUrlFind = "/visite/";
	
	//ajout d'une visite
	function addVisite(visiteAjout, callBack){
		$http({
			method:'POST',
			url:restUrlWS+"/visite",
			data:angular.toJson(visiteAjout),
			headers:{
				'content-type' : "application/json"
			}
		}).then(function succes(reponse) {
			callBack(response.data);
		}, function echec(reponse) {
			console.log("----- Erreur : " + reponse.statusText)
		})
	}
	
	return {
		ajoutVisite:addVisite
		
	}
})