immoApp.controller("proprioCtrl", function($scope, proprioProvider, $location, $rootScope) {
	proprioProvider.getAllProprio(function(callBack) {
		$rootScope.proprioListe = callBack;
	});
})

.controller("ajoutProprioCtrl", function($scope, proprioProvider, $location) {

	// Initialise la classe standard à ajouter
	$scope.proprioAjout = {
		nom : "",
		numPrive : 0,
		numTravail : 0
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

.controller("modifProprioCtrl", function($scope, proprioProvider, $location) {

	// Initialise la classe standard à ajouter
	$scope.proprioModif = {
		id : 0,
		nom : "",
		numPrive : 0,
		numTravail : 0
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