immoApp.controller("afficheAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	achatProvider.getAllAchats(function(callBack){
		$rootScope.achatListe=callBack;
	});
})

.controller("ajoutAchatCtrl", function($scope, achatProvider, $location) {
	$scope.achat={
		statut : "",
		dateSoumission : undefined,
		dateDisponibilite : undefined,
		revenuCadastral : 0,
		superficie : 0,
		classe : {
			id_cl : 0,
		},
		contrat : undefined,
		adresse : {
			rue : "",
			numero : "",
			cp : 0,
			ville : ""
		},
		proprio : {
			id : undefined,
		},
		prixVente:0,
		etat:""
	};

	$scope.terrain=false;
	
	$scope.miseAJour=function(){
		console.log($rootScope.proprioListe);
		if($scope.achat.classe.typeBien=="terrain"){
			console.log("On n'affiche pas")
			$scope.terrain=true;
		} else {
			console.log("On affiche")
			$scope.terrain=false;
		}
	}
	
	$scope.ajouterAchat=function(){
		console.log($scope.achat);
	}
})