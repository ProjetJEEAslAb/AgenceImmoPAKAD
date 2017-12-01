immoApp.controller("afficheAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	achatProvider.getAllAchats(function(callBack){
		$rootScope.achatListe=callBack;
	});
})

.controller("ajoutAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
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
			$scope.terrain=true;
		} else {
			$scope.terrain=false;
		}
	};
	
	$scope.ajouterAchat=function(){
		achatProvider.addAchat($scope.achat, function(callBack) {
			console.log($scope.achat);
			console.log(callBack);
			if (callBack != undefined && callBack != "") {
				$location.path("listeClasses");
			}
		})
	};
	
})