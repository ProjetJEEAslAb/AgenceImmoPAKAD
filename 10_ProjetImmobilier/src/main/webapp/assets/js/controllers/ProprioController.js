immoApp.controller("proprioCtrl", function($scope, proprioProvider, $location, $rootScope) {
	proprioProvider.getAllProprio(function(callBack) {
		$rootScope.proprioListe = callBack;
	});
	
	// =========================================================
	// =================== Méthodes Via Lien ===================
	// =========================================================

	// Initialiser le client à modifier dans le rootScope
	$rootScope.proprioModifLien = {
			id:undefined,
			nom : "",
			numPrive : 0,
			numTravail : 0,
			adresse : {
				numero : 0,
				rue : "",
				cp : "",
				ville: ""
			}
		}

	// Méthode pour modifier via un lien
	$scope.updateLien = function(proprio) {

		// Mettre les valeurs du pays récupéré dans le rootScope
		$rootScope.proprioModifLien.id = proprio.id;
		$rootScope.proprioModifLien.nom = proprio.nom;
		$rootScope.proprioModifLien.numPrive = proprio.numPrive;
		$rootScope.proprioModifLien.numTravail = proprio.numTravail;
		$rootScope.proprioModifLien.adresse.rue = proprio.adresse.rue;
		$rootScope.proprioModifLien.adresse.numero = proprio.adresse.numero;
		$rootScope.proprioModifLien.adresse.cp = proprio.adresse.cp;
		$rootScope.proprioModifLien.adresse.ville = proprio.adresse.ville;

		// Aller dans la vue update.html
		$location.path("modifProprio");
	}

	// Méthode pour supprimer via un lien
	$scope.deleteLien = function(proprio) {

		proprioProvider.deleteProprio(proprio, function(callBack) {
			proprioProvider.getAllProprio(function(callBack) {
				$rootScope.proprioListe = callBack;
			})
		})
	}
})

.controller("ajoutProprioCtrl", function($scope, proprioProvider, $location) {

	// Initialise la classe standard à ajouter
	$scope.proprioAjout = {
		nom : "",
		numPrive : 0,
		numTravail : 0,
		adresse : {
			numero : 0,
			rue : "",
			cp : "",
			ville: ""
		}
	}

	// Développement de la méthode ajouter() du bouton
	$scope.ajouterProprio = function() {

		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		proprioProvider.addProprio($scope.proprioAjout, function(callBack) {

			if (callBack != undefined && callBack != "") {
				console.log(callBack)
				$location.path("afficheProprio");
			}
		});
	}
})

.controller("modifProprioCtrl", function($scope, proprioProvider, $location, $rootScope) {

	// Initialise le propriétaire à modifier
	$scope.proprioModif = {
		id : 0,
		nom : "",
		numPrive : 0,
		numTravail : 0,
		adresse : {
			numero : 0,
			rue : "",
			cp : "",
			ville: ""
		}
	}
	
	if ($rootScope.proprioModifLien.id == undefined) {
		// Pas de passage par le lien

	} else {
		
		// Passage par le lien
		$scope.proprioModif.id = $rootScope.proprioModifLien.id;
		$scope.proprioModif.nom = $rootScope.proprioModifLien.nom;
		$scope.proprioModif.numPrive = $rootScope.proprioModifLien.numPrive;
		$scope.proprioModif.numTravail = $rootScope.proprioModifLien.numTravail;
		$scope.proprioModif.adresse.rue = $rootScope.proprioModifLien.adresse.rue;
		$scope.proprioModif.adresse.numero = $rootScope.proprioModifLien.adresse.numero;
		$scope.proprioModif.adresse.cp = $rootScope.proprioModifLien.adresse.cp;
		$scope.proprioModif.adresse.ville = $rootScope.proprioModifLien.adresse.ville;
		
	}

	// Développement de la méthode ajouter() du bouton
	$scope.modifierProprio = function() {

		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		proprioProvider.updateProprio($scope.proprioModif, function(callBack) {

			if (callBack != undefined && callBack != "") {
				console.log(callBack)
				$location.path("afficheProprio");
			}
		});
	}
})

.controller("supprProprioCtrl", function($scope, proprioProvider, $location) {

	$scope.idSuppr = 0;

	// Initialise la classe standard à supprimer
	$scope.proprioSuppr = {
		id : $scope.idSuppr,
		nom : "",
		numPrive : 0,
		numTravail : 0
	}

	// Développement de la méthode supprimer() du bouton
	$scope.supprimerProprio = function() {

		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		proprioProvider.deleteProprio($scope.proprioSuppr, function(callBack) {

			$location.path("afficheProprio");
		});
	}
})

.controller("rechProprioCtrl", function($scope, proprioProvider, $location) {
	$scope.id=0;
	$scope.indice=false;
	$scope.msg="";
	$scope.bla="ble"
	
	$scope.proprioCherch={
			"id": 0,
			   "nom": "",
			   "numPrive": "",
			   "numTravail": "",			   
			   "adresse":    {
			      "rue": "",
			      "numero": "",
			      "cp": 0,
			      "ville": ""
			   }
	}
	
	$scope.rechercherProprio=function(){
		proprioProvider.searchProprio($scope.id, function(callBack){
			if(callBack!=undefined&&callBack!=""){
				console.log("Coucou ?")
				$scope.proprioCherch=callBack;
				$scope.indice=true;
				$scope.msg="";
				console.log($scope.proprioCherch);
			}else{
				$scope.indice=false;
				$scope.msg="Il n'y a pas de propriétaire avec cet id."
			}
		})
	}
})