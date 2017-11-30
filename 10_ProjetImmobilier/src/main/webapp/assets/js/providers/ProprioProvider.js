immoApp.factory("proprioProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/allproprietaires";
	var restUrlAdd = "/proprietaire";
	var restUrlUpdate = "/proprietaire";
	var restUrlDelete = "/proprietaire";
	var restUrlSearch = "/proprietaire/";

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

	// Ajouter un propriétaire
	function updateProprioPro(proprioModif, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'PUT',
			url : restUrlWS + restUrlUpdate,
			data : angular.toJson(proprioModif),
			headers : {
				'content-type' : "application/json"
			}

		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}
	
	//Rechercher un propriétaire
	function searchProprioPro(id, callBack){
		$http({
			method:'GET',
			url:restUrlWS+restUrlSearch+id
		}).then(function succes(reponse){
			callBack(reponse.data);
		}, function erreur(reponse){
			console.log("----- Erreur : " + reponse.statusText)
		});
	};

	// Le retour de factory
	return {
		getAllProprio : findAllProprio,
		addProprio : addProprioPro,
		updateProprio : updateProprioPro,
		deleteProprio : deleteProprioPro,
		searchProprio : searchProprioPro
	}

	// Ajouter un propriétaire
	function deleteProprioPro(proprioSuppr, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'DELETE',
			url : restUrlWS + restUrlDelete,
			data : angular.toJson(proprioSuppr),
			headers : {
				'content-type' : "application/json"
			}

		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}

})
