immoApp.factory("bienProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/locations";

	function addLocations(locations, callBack) {
		console.log(locations);
		$http({
			method : 'POST',
			url : restUrlWS + "/location",
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

	return {
		addLocation : addLocations,
		getAllLocations : findAllLocations
	}
})