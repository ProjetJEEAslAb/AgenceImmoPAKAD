immoApp.factory("contratProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var restUrlListe = "/allcontrats";
	var restUrlAdd = "/contrat";
	var restUrlDelete = "/contrat/";
	var restUrlUpdate = "/contrat";
	var restUrlFind = "/contrat/";

	// Récupérer la liste des clients
	function getAllClients(callBack) {
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
})