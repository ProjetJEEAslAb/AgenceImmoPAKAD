immoApp.factory("clientProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/listeClient";
	var restUrlAdd = "/client";
	var restUrlDelete = "/client/";
	var restUrlUpdate = "/client";
	var restUrlFind = "/client/";

	// Ajouter un client
	function addClient(clientAjout, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'POST',
			url : restUrlWS + restUrlAdd,
			data : angular.toJson(clientAjout),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}

	// Supprimer un client
	function deleteClient(idClient, callBack) {
		$http({
			method : 'DELETE',
			url : restUrlWS + restUrlDelete + idClient,
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
	// Modifier une classe standard
	function updateClient(clientModif, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'PUT',
			url : restUrlWS + restUrlUpdate,
			data : angular.toJson(clientModif),
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

		addClient : addClient,
		deleteClient : deleteClient,
		updateClient : updateClient,
	}


});
