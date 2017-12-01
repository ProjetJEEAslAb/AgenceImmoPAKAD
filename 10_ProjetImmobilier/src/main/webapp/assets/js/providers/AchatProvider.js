immoApp.factory("achatProvider", function($http) {
	var restUrlWS = "http://localhost:8080/10_ProjetImmobilier";
	var urlListe="/achats";
	var urlMost="/achat";
		
	function findAllAchats(callBack){
		$http({
			method:'GET',
			url:restUrlWS+urlListe
		}).then(function succes(reponse){
			callBack(reponse.data);
		}, function erreur(reponse){
			console.log("----- Erreur : " + reponse.statusText);
		});
	};
	
	function ajoutAchat(achat, callBack){
		$http({
			method:'POST',
			url:restUrlWS+urlMost,
			data : angular.toJson(achat),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(reponse) {
			callBack(reponse.data);
		}, function echec(reponse) {
			console.log("----- Erreur : " + reponse.statusText);
		});
	};
	
	function modifAchat(achat, callBack) {
		$http({
			method:'PUT',
			url:restUrlWS+urlMost,
			data : angular.toJson(achat),
			headers : {
				'content-type' : "application/json"
			}
		}).then(function succes(reponse) {
			callBack(reponse.data)
		}, function echec(reponse) {
			console.log("----- Erreur : " + reponse.statusText);
		});
	};
	
	return{
		getAllAchats:findAllAchats,
		addAchat:ajoutAchat,
		updateAchat:modifAchat
	}
	
});