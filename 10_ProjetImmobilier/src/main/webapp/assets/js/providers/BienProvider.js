immoApp.factory("bienProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	function addLocations(locations, callBack){
		$http({
			method:'POST',
			url:restUrlWS+"/location",
			data:angular.toJson(locations),
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
		addLocation:addLocations
	}
})