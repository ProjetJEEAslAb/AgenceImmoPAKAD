immoApp.factory("visiteProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/listeVisite";
	var restUrlAdd = "/visite";
	var restUrlDelete = "/visite/";
	var restUrlUpdate = "/visite";
	var restUrlFind = "/visite/";
	
	// Récupérer la liste des clients
	function getAllVisites(callBack) {
		// Envoyer la requête au service
		$http({
			method : 'GET',
			url : restUrlWS + restUrlListe
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
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
		ajoutVisite:addVisite,
		listeVisite:getAllVisites,
		
	}
})