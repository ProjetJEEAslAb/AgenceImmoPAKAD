immoApp.factory("proprioProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/allproprietaires";
	var restUrlAdd = "/proprietaire";

	// Récupérer la liste des propriétaires
	function findAllProprio(callBack) {
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

	// Ajouter un propriétaire
	function addProprioPro(proprioAjout, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'POST',
			url : restUrlWS + restUrlAdd,
			data : angular.toJson(proprioAjout),
			headers : {
				'content-type' : "application/json"
			}

		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	// Le retour de factory
	return {
		getAllProprio : findAllProprio,
		addProprio : addProprioPro
	}
})
