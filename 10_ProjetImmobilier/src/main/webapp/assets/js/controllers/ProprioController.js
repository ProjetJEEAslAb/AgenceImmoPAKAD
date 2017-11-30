immoApp.controller("proprioCtrl", function($scope, proprioProvider, $location) {
	proprioProvider.getAllProprio(function(callBack) {
		$scope.proprioListe = callBack;
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
				$location.path("listeProprio");
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
				$location.path("listeProprio");
			}
		});
	}
})

.controller("supprProprioCtrl", function($scope, proprioProvider, $location) {

	$scope.idSuppr = 0;

	// Initialise la classe standard à ajouter
	$scope.proprioSuppr = {
		id : $scope.idSuppr,
		nom : "",
		numPrive : 0,
		numTravail : 0
	}

	// Développement de la méthode ajouter() du bouton
	$scope.supprimerProprio = function() {

		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		proprioProvider.deleteProprio($scope.proprioSuppr, function(callBack) {

			$location.path("listeProprio");
		});
	}
})