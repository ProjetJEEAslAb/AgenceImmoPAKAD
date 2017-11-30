immoApp.factory("achatProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var urlListe="/achats"
		
	function findAllAchats(callBack){
		$http({
			method:'GET',
			url:restUrlWS+urlListe
		}).then(function succes(reponse){
			callBack(reponse.data);
		}, function erreur(reponse){
			console.log("----- Erreur : " + reponse.statusText);
		});
	}
	
	return{
		getAllAchats:findAllAchats
	}
	
});