immoApp.controller("listeClientsCtrl",
		function($scope, clientProvider, $location, $rootScope) {

	clientProvider.getAllClients(function(callBack) {
		$rootScope.clientsListe = callBack;
	});
	
	// =========================================================
	// =================== Méthodes Via Lien ===================
	// =========================================================

	// Initialiser le client à modifier dans le rootScope
	$rootScope.clientModifLien = {
			id_client: undefined,
			nom : "",
			num : "",
			adresse : {
				rue : "",
				numero : "",
				cp : 0,
				ville : ""
			},
		}

	// Méthode pour modifier via un lien
	$scope.updateLien = function(client) {

		// Mettre les valeurs du pays récupéré dans le rootScope
		$rootScope.clientModifLien.id_client = client.id_client;
		$rootScope.clientModifLien.nom = client.nom;
		$rootScope.clientModifLien.num = client.num;
		$rootScope.clientModifLien.adresse.rue = client.adresse.rue;
		$rootScope.clientModifLien.adresse.numero = client.adresse.numero;
		$rootScope.clientModifLien.adresse.cp = client.adresse.cp;
		$rootScope.clientModifLien.adresse.ville = client.adresse.ville;

		// Aller dans la vue update.html
		$location.path("modifClient");
	}

	// Méthode pour supprimer via un lien
	$scope.deleteLien = function(client) {

		clientProvider.deleteClient(client.id_client, function(callBack) {
			clientProvider.getAllClients(function(callBack) {
				$rootScope.clientsListe = callBack;
			})
		})
	}
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
						$location.path("listeClients");
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

			$location.path("listeClients");

		});
	}
})

.controller("modifClientCtrl", function($scope, clientProvider, $location, $rootScope) {

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
	
	if ($rootScope.clientModifLien.id_client == undefined) {
		// Pas de passage par le lien

	} else {
		
		// Passage par le lien
		$scope.clientModif.id_client = $rootScope.clientModifLien.id_client;
		$scope.clientModif.nom = $rootScope.clientModifLien.nom;
		$scope.clientModif.num = $rootScope.clientModifLien.num;
		$scope.clientModif.adresse.rue = $rootScope.clientModifLien.adresse.rue;
		$scope.clientModif.adresse.numero = $rootScope.clientModifLien.adresse.numero;
		$scope.clientModif.adresse.cp = $rootScope.clientModifLien.adresse.cp;
		$scope.clientModif.adresse.ville = $rootScope.clientModifLien.adresse.ville;
		
	}

	// Développement de la méthode modifier() du bouton
	$scope.modifierClient = function() {
		console.log($scope.clientModif)
		// Appel de la fonction du Provider pour modifier le client dans
		// la bdd
		clientProvider.updateClient($scope.clientModif, function(callBack) {

			if (callBack != undefined && callBack != "") {
				console.log(callBack)
				$location.path("listeClients");
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