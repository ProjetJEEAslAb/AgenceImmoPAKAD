immoApp.factory("classesStandardProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/allclasses";
	var restUrlAdd = "/classe";
	var restUrlDelete = "/classe";
	var restUrlUpdate = "/classe";
	var restUrlFind = "/classe/";

	// Récupérer la liste des classes standard
	function findAllClasses(callBack) {
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

	// Ajouter une classe standard
	function addClasses(classeStandardAjout, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'POST',
			url : restUrlWS + restUrlAdd,
			data : angular.toJson(classeStandardAjout),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}

	// Supprimer une classe standard
	function deleteClasses(classeStandardSuppr, callBack) {
		$http({
			method : 'DELETE',
			url : restUrlWS + restUrlDelete,
			data : angular.toJson(classeStandardSuppr),
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
	function updateClasses(classeStandardModif, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'PUT',
			url : restUrlWS + restUrlUpdate,
			data : angular.toJson(classeStandardModif),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}

	// Rechercher une classe standard
	function findClasses(idClasseStandard, callBack) {
		// Envoyer la requête au service
		$http({
			method : 'GET',
			url : restUrlWS + restUrlFind + idClasseStandard,
		}).then(function succes(response) {
			callBack(response.data);

		}, function error(response) {
			console.log("----- Erreur : " + response.statusText)
		})
	}

	// Le retour de factory
	return {
		getAllClasses : findAllClasses,
		addClass : addClasses,
		deleteClass : deleteClasses,
		updateClass : updateClasses,
		findClass : findClasses
	}
})
