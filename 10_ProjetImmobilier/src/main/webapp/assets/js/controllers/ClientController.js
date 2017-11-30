immoApp.controller("ajoutClientCtrl", function($scope, clientProvider, $location) {
	
	// Initialise la classe standard à ajouter
	$scope.client = {
		nom : "",
		num : "",
		adresse:{
			rue:"",
			numero:"",
			cp:0,
			ville:""
		},
	}

	// Développement de la méthode ajouter() du bouton
	$scope.ajouterClient = function() {
		
		
		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		clientProvider.addClient($scope.client,
				function(callBack) {

					if (callBack != undefined && callBack != "") {
						console.log(callBack)
						$location.path("listeClasses");
					}
				});
	}

	
	
})

.controller(
		"suppClientCtrl",
		function($scope, clientProvider, $location) {

			$scope.idClient = 0;

			$scope.supprimerClient = function() {

				// Appel de la fonction du Provider pour supprimer la classe
				// dans
				// la bdd
				clientProvider.deleteClient($scope.idClient,
						function(callBack) {

							$location.path("listeClasses");

						});
			}
		})