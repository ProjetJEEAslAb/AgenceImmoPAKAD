immoApp.controller("ajoutLocationCtrl", function($scope, bienProvider, $location) {
	console.log("bla")
	//Initialisation de l'objet à ajouter
	$scope.location={
		statut:"",
		dateSoumission:null,
		dateDisponibilite:null,
		revenuCadastral:0,
		superficie:0,
		classe:{
			typeBien : "",
			modeOffre : "",
			prixMax : 0,
			superficieMin : 0,
		},
		agent:null,
		adresse:{
			rue:"",
			numero:"",
			cp:0,
			ville:""
		},
		proprietaire:null
	};
	
	$scope.ajouterLocation=function(){
		console.log("ble")
		console.log($scope.location)
	}
});