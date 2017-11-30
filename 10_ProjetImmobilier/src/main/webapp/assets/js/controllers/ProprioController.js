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