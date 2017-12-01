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
		if($scope.achat.classe.typeBien=="terrain"){
			$scope.terrain=true;
		} else {
			$scope.terrain=false;
		}
	};
	
	$scope.ajouterAchat=function(){
		achatProvider.addAchat($scope.achat, function(callBack) {
			if (callBack != undefined && callBack != "") {
				$location.path("listeClasses");
			};
		})
	};
	
})

.controller("modifAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	$scope.achat={
			id_b:0,
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
			if($scope.achat.classe.typeBien=="terrain"){
				$scope.terrain=true;
			} else {
				$scope.terrain=false;
			}
		};
		
		$scope.modifierAchat=function(){
			console.log($scope.achat);
			achatProvider.updateAchat($scope.achat, function(callBack) {
				if (callBack != undefined && callBack != "") {
					$location.path("listeClasses");
				};
			})
		}
})

.controller("supprAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	$scope.id=0;
	
	$scope.supprimerAchat=function(){
		achatProvider.deleteAchat($scope.id, function(callBAck) {
			$location.path("listeClasses");
		})
	}
})
