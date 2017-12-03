immoApp.controller("contratCtrl",
		function($scope, contratProvider, $location, $rootScope) {

			contratProvider.getAllContrats(function(callBack) {
				$rootScope.contratsListe = callBack;
			});
		})

.controller("ajoutContratCtrl",
		function($scope, contratProvider, $location, $rootScope) {

			// Initialise la classe standard à ajouter
			$scope.contrat = {
				"id_co" : 0,
				"dateAchat" : undefined,
				"prixFinal" : 0,
				"client" : undefined,
				"achat" : undefined,
				"location" : undefined,
			}

			// Développement de la méthode ajouter() du bouton
			$scope.ajouterContrat = function() {

				// Appel de la fonction du Provider pour ajouter le client dans
				// la bdd
				contratProvider.addContrat($scope.contrat, function(callBack) {

					if (callBack != undefined && callBack != "") {
						console.log(callBack)
						$location.path("afficheContrat");
					}
				});
			}

		})

.controller(
		"modifContratCtrl",
		function($scope, contratProvider, $location, $rootScope) {

			// Initialise la classe standard à ajouter
			$scope.contratModif = {
				"id_co" : 0,
				"dateAchat" : undefined,
				"prixFinal" : 0,
				"client" : undefined,
				"achat" : undefined,
				"location" : undefined,
			}

			// Développement de la méthode ajouter() du bouton
			$scope.modifierContrat = function() {

				// Appel de la fonction du Provider pour ajouter la classe dans
				// la bdd
				contratProvider.updateContrat($scope.contratModif, function(
						callBack) {

					if (callBack != undefined && callBack != "") {
						console.log(callBack)
						$location.path("afficheContrat");
					}
				});
			}
		})

.controller(
		"suppContratCtrl",
		function($scope, contratProvider, $location, $rootScope) {

			$scope.idContrat = 0;

			// Développement de la méthode supprimer() du bouton
			$scope.supprimerContrat = function() {

				// Appel de la fonction du Provider pour ajouter la classe dans
				// la bdd
				contratProvider.deleteContrat($scope.idContrat, function(
						callBack) {

					$location.path("afficheContrat");
				});
			}
		})

.controller("rechContratCtrl", function($scope, contratProvider, $rootScope) {

	$scope.idContrat = 0;

	$scope.indice = false;
	$scope.msg = "";

	$scope.contratFind = {
		"id_co" : 0,
		"dateAchat" : undefined,
		"prixFinal" : 0,
		"client" : undefined,
		"achat" : undefined,
		"location" : undefined,
	}

	// Développement de la méthode rechercher() du bouton
	$scope.rechercherContrat = function() {

		// Appel de la fonction du Provider pour rechercher le client
		contratProvider.rechContrat($scope.idContrat, function(callBack) {

			if (callBack != undefined && callBack != "") {
				console.log(callBack)

				$scope.contratFind = callBack;
				$scope.msg = "";
				$scope.indice = true;

			} else {

				$scope.msg = "Ce contrat n'existe pas.";
				$scope.indice = false;
			}
		});
	}

})
