immoApp.controller("afficheAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	achatProvider.getAllAchats(function(callBack){
		$rootScope.achatListe=callBack;
	});
	
	// =========================================================
	// =================== Méthodes Via Lien ===================
	// =========================================================

	// Initialiser la classe à modifier dans le rootScope
	$rootScope.achatModifLien = {
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
	}

	// Méthode pour modifier via un lien
	$scope.updateLien = function(achat) {

		// Mettre les valeurs du pays récupéré dans le rootScope
		$rootScope.achatModifLien.id_b = achat.id_b;
		$rootScope.achatModifLien.statut = achat.statut;
		$rootScope.achatModifLien.dateSoumission = achat.dateSoumission;
		$rootScope.achatModifLien.dateDisponibilite = achat.dateDisponibilite;
		$rootScope.achatModifLien.revenuCadastral = achat.revenuCadastral;
		$rootScope.achatModifLien.superficie = achat.superficie;
		$rootScope.achatModifLien.classe.id_cl = achat.classe.id_cl;
		$rootScope.achatModifLien.adresse.rue = achat.adresse.rue;
		$rootScope.achatModifLien.adresse.numero = achat.adresse.numero;
		$rootScope.achatModifLien.adresse.cp = achat.adresse.cp;
		$rootScope.achatModifLien.adresse.ville = achat.adresse.ville;
		$rootScope.achatModifLien.proprio.id = achat.proprio.id;
		$rootScope.achatModifLien.prixVente = achat.prixVente;
		$rootScope.achatModifLien.etat = achat.etat;
		

		// Aller dans la vue update.html
		$location.path("modifAchat");
	}

	// Méthode pour supprimer via un lien
	$scope.deleteLien = function(achat) {

		achatProvider.deleteAchat(achat.id_b, function(
				callBack) {
			achatProvider.getAllAchats(function(
					callBack) {
				$rootScope.achatListe = callBack;
			})
		})
	}
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
				$location.path("afficheAchat");
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

	if ($rootScope.achatModifLien.id_b == undefined) {
		// Pas de passage par le lien

	} else {
		
		// Passage par le lien
		// Mettre les valeurs du pays récupéré dans le rootScope
		$scope.achat.id_b = $rootScope.achatModifLien.id_b;
		$scope.achat.statut = $rootScope.achatModifLien.statut;
		$scope.achat.dateSoumission = $rootScope.achatModifLien.dateSoumission;
		$scope.achat.dateDisponibilite = $rootScope.achatModifLien.dateDisponibilite;
		$scope.achat.revenuCadastral = $rootScope.achatModifLien.revenuCadastral;
		$scope.achat.superficie = $rootScope.achatModifLien.superficie;
		$scope.achat.classe.id_cl = $rootScope.achatModifLien.classe.id_cl;
		$scope.achat.adresse.rue = $rootScope.achatModifLien.adresse.rue;
		$scope.achat.adresse.numero = $rootScope.achatModifLien.adresse.numero;
		$scope.achat.adresse.cp = $rootScope.achatModifLien.adresse.cp;
		$scope.achat.adresse.ville = $rootScope.achatModifLien.adresse.ville;
		$scope.achat.proprio.id = $rootScope.achatModifLien.proprio.id;
		$scope.achat.prixVente = $rootScope.achatModifLien.prixVente;
		$scope.achat.etat = $rootScope.achatModifLien.etat;
		
	}
	
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
					$location.path("afficheAchat");
				};
			})
		}
})

.controller("supprAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	$scope.id=0;
	
	$scope.supprimerAchat=function(){
		achatProvider.deleteAchat($scope.id, function(callBAck) {
			$location.path("afficheAchat");
		})
	}
})

.controller("cherchAchatCtrl", function($scope, achatProvider, $location) {
	$scope.id=0;
	$scope.indice=false;
	
	$scope.rechercherAchat=function(){
		achatProvider.searchAchat($scope.id, function(callBack) {
			$scope.achatFind=callBack;
			if (callBack != undefined && callBack != "") {
				$scope.indice=true;
			} else{
				$scope.msg="Problème lors de la recherche."
			};
		})
	}
});
