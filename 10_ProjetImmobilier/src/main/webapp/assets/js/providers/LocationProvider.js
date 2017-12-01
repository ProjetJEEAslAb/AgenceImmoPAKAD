immoApp.factory("locationProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/locations";
	var restUrlAdd = "/location";
	var restUrlDelete = "/location/";
	var restUrlUpdate = "/location";
	var restUrlFind = "/location/";

	// Ajouter une location
	function addLocations(locations, callBack) {
		console.log(locations);
		$http({
			method : 'POST',
			url : restUrlWS + restUrlAdd,
			data : angular.toJson(locations),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(reponse) {
			console.log("provider" + reponse.data)
			callBack(reponse.data);
		}, function echec(reponse) {
			console.log("----- Erreur : " + reponse.statusText)
		})
	}

	// Liste des location
	function findAllLocations(callBack) {
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
	
	// Supprimer une location
	function deleteLocations(idLocation, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'DELETE',
			url : restUrlWS + restUrlDelete + idLocation
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
	// Modifier une location
	function updateLocations(locations, callBack) {

		console.log("---- Provider : " + locations)
		
		$http({
			method : 'PUT',
			url : restUrlWS + restUrlUpdate,
			data : angular.toJson(locations),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(reponse) {
			callBack(reponse.data);
		}, function echec(reponse) {
			console.log("----- Erreur : " + reponse.statusText)
		})
	}
	
	// Rechercher une location
	function findLocations(idLocation, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'GET',
			url : restUrlWS + restUrlFind + idLocation,
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	

	return {
		addLocation : addLocations,
		getAllLocations : findAllLocations,
		deleteLocation : deleteLocations,
		updateLocation : updateLocations,
		findLocation : findLocations
	}
})