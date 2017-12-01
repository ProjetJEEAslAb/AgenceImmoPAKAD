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

