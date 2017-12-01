immoApp.factory("contratProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/afficheContrat";
	var restUrlAdd = "/contrat";
	var restUrlDelete = "/contrat/";
	var restUrlUpdate = "/contrat";
	var restUrlFind = "/contrat/";

	// Récupérer la liste des clients
	function getAllContrats(callBack) {
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
	
	// Ajouter un client
	function addContrat(contratAjout, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'POST',
			url : restUrlWS + restUrlAdd,
			data : angular.toJson(contratAjout),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
	return {
		
		getAllContrats : getAllContrats,
		addContrat : addContrat,
	}
})