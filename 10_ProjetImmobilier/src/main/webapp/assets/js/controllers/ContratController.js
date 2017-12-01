immoApp.controller("contratCtrl",
		function($scope, contratProvider, $location, $rootScope) {

	contratProvider.getAllContrats(function(callBack) {
		$rootScope.contratsListe = callBack;
	});
})

.controller("ajoutContratCtrl",
		function($scope, contratProvider, $location) {

			// Initialise la classe standard à ajouter
			$scope.contrat = {
					   "id_co": 0,
					   "dateAchat": undefined,
					   "prixFinal": 0,
					   "client": undefined,
					   "achat":undefined,
					    "location": undefined,
					}

			// Développement de la méthode ajouter() du bouton
			$scope.ajouterContrat = function() {

				// Appel de la fonction du Provider pour ajouter le client dans
				// la bdd
				contratProvider.addContrat($scope.contrat, function(callBack) {

					if (callBack != undefined && callBack != "") {
						console.log(callBack)
						$location.path("listeClasses");
					}
				});
			}

		})
		
.controller("modifContratCtrl", function($scope, contratProvider, $location) {

	// Initialise la classe standard à ajouter
	$scope.contratModif = {
			   "id_co": 0,
			   "dateAchat": undefined,
			   "prixFinal": 0,
			   "client": undefined,
			   "achat":undefined,
			    "location": undefined,
			}

	// Développement de la méthode ajouter() du bouton
	$scope.modifierContrat = function() {

		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		contratProvider.updateContrat($scope.contratModif, function(callBack) {

			if (callBack != undefined && callBack != "") {
				console.log(callBack)
				$location.path("afficheContrat");
			}
		});
	}
})

.controller("suppContratCtrl", function($scope, contratProvider, $location) {

	$scope.idContrat = 0;

	
	// Développement de la méthode supprimer() du bouton
	$scope.supprimerContrat = function() {

		// Appel de la fonction du Provider pour ajouter la classe dans
		// la bdd
		contratProvider.deleteContrat($scope.idContrat, function(callBack) {

			$location.path("afficheContrat");
		});
	}
})		

