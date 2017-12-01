immoApp.factory("visiteProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/listeVisite";
	var restUrlAdd = "/visite";
	var restUrlDelete = "/visite/";
	var restUrlUpdate = "/visite";
	var restUrlFind = "/visite/";
	
	// Récupérer la liste des visites
	function getAllVisites(callBack) {
		// Envoyer la requête au service
		$http({
			method : 'GET',
			url : restUrlWS + "/listeVisite"
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
			url:restUrlWS + "/visite",
			data:angular.toJson(visiteAjout),
			headers:{
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);
		}, function echec(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
	// Supprimer une visite
	function deleteVisite(id, callBack) {
		$http({
			method : 'DELETE',
			url : restUrlWS + "/visite/" + id,
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	// Rechercher une visite
	function rechVisite(id, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'GET',
			url : restUrlWS + "/visite/" + id ,
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
	// Modifier une visite
	function updateVisite(visiteModif, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'PUT',
			url : restUrlWS + "/visite",
			data : angular.toJson(visiteModif),
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
		addVisite:addVisite,
		listeVisite:getAllVisites,
		deleteVisite:deleteVisite,
		rechVisite:rechVisite,
		updateVisite:updateVisite
	}
})