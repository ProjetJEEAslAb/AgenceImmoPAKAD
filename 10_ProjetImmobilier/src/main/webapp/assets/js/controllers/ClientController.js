immoApp.controller("listeClientsCtrl",
		function($scope, clientProvider, $location, $rootScope) {

	clientProvider.getAllClients(function(callBack) {
		$rootScope.clientsListe = callBack;
	});
})


.controller("ajoutClientCtrl",
		function($scope, clientProvider, $location) {

			// Initialise la classe standard à ajouter
			$scope.client = {
				nom : "",
				num : "",
				adresse : {
					rue : "",
					numero : "",
					cp : 0,
					ville : ""
				},
			}

			// Développement de la méthode ajouter() du bouton
			$scope.ajouterClient = function() {

				// Appel de la fonction du Provider pour ajouter le client dans
				// la bdd
				clientProvider.addClient($scope.client, function(callBack) {

					if (callBack != undefined && callBack != "") {
						console.log(callBack)
						$location.path("listeClasses");
					}
				});
			}

		})

.controller("suppClientCtrl", function($scope, clientProvider, $location) {

	$scope.idClient = 0;

	$scope.supprimerClient = function() {

		// Appel de la fonction du Provider pour supprimer le client
		// dans
		// la bdd
		clientProvider.deleteClient($scope.idClient, function(callBack) {

			$location.path("listeClasses");

		});
	}
})

.controller("modifClientCtrl", function($scope, clientProvider, $location) {

	// Initialise la classe standard à modifier
	$scope.clientModif = {
		id_client : 0,
		nom : "",
		num : "",
		adresse : {
			rue : "",
			numero : "",
			cp : 0,
			ville : "",
		}
	}

	// Développement de la méthode modifier() du bouton
	$scope.modifierClient = function() {
		console.log($scope.clientModif)
		// Appel de la fonction du Provider pour modifier le client dans
		// la bdd
		clientProvider.updateClient($scope.clientModif, function(callBack) {

			if (callBack != undefined && callBack != "") {
				console.log(callBack)
				$location.path("listeClasses");
			}
		});
	}

})

.controller(
		"rechClientCtrl",
		function($scope, clientProvider) {

			$scope.idClient = 0;

			$scope.indice = false;
			$scope.msg = "";

			$scope.clientFind = {
				id_client : 0,
				nom : "",
				num : "",
				adresse : {
					rue : "",
					numero : "",
					cp : 0,
					ville : "",
				}
			}

			// Développement de la méthode rechercher() du bouton
			$scope.rechercherClient = function() {

				// Appel de la fonction du Provider pour rechercher le client
				clientProvider.rechClient($scope.idClient,
						function(callBack) {

							if (callBack != undefined && callBack != "") {
								console.log(callBack)

								$scope.clientFind = callBack;
								$scope.msg = "";
								$scope.indice = true;

							} else {

								$scope.msg = "Ce client n'existe pas.";
								$scope.indice = false;
							}
						});
			}

		})