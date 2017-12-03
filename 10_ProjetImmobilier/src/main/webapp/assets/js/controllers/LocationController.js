immoApp
		.controller(
				"ajoutLocationCtrl",
				function($scope, locationProvider, $location) {
					console.log("bla")
					// Initialisation de l'objet à ajouter
					$scope.locations = {
						statut : "",
						dateSoumission : undefined,
						dateDisponibilite : undefined,
						revenuCadastral : 0,
						superficie : 0,
						classe : {
							id_cl : 0,
						},
						contrat : {
							id_co: undefined,
						},
						adresse : {
							rue : "",
							numero : "",
							cp : 0,
							ville : ""
						},
						proprio : {
							id : undefined,
						},
						caution : 0,
						loyer : 0,
						charges : 0,
						bail : "",
						meuble : false
					}

					$scope.ajouterLocation = function() {

						locationProvider
								.addLocation(
										$scope.locations,
										function(callBack) {
											if (callBack != undefined
													&& callBack != "") {
												$location
														.path("afficheLocation");
											}
										});
					};
				})

		.controller(
				"afficheLocationCtrl",
				function($scope, locationProvider, $location, $rootScope) {

					locationProvider.getAllLocations(function(callBack) {
						$rootScope.locationListe = callBack;
					});

					// =========================================================
					// =================== Méthodes Via Lien ===================
					// =========================================================

					// Initialiser la classe à modifier dans le rootScope
					$rootScope.locationModifLien = {
							id_b : undefined,
							statut : "",
							dateSoumission : undefined,
							dateDisponibilite : undefined,
							revenuCadastral : 0,
							superficie : 0,
							classe : {
								id_cl : 0,
							},
							contrat : {
								id_co: undefined,
							},
							adresse : {
								rue : "",
								numero : "",
								cp : 0,
								ville : ""
							},
							proprio : {
								id : undefined,
							},
							caution : 0,
							loyer : 0,
							charges : 0,
							bail : "",
							meuble : false
					}

					// Méthode pour modifier via un lien
					$scope.updateLien = function(location) {

						// Mettre les valeurs du pays récupéré dans le rootScope
						$rootScope.locationModifLien.id_b = location.id_b;
						$rootScope.locationModifLien.statut = location.statut;
						$rootScope.locationModifLien.dateSoumission = location.dateSoumission;
						$rootScope.locationModifLien.dateDisponibilite = location.dateDisponibilite;
						$rootScope.locationModifLien.revenuCadastral = location.revenuCadastral;
						$rootScope.locationModifLien.superficie = location.superficie;
						$rootScope.locationModifLien.classe.id_cl = location.classe.id_cl;
						$rootScope.locationModifLien.adresse.rue = location.adresse.rue;
						$rootScope.locationModifLien.adresse.numero = location.adresse.numero;
						$rootScope.locationModifLien.adresse.cp = location.adresse.cp;
						$rootScope.locationModifLien.adresse.ville = location.adresse.ville;
						$rootScope.locationModifLien.proprio.id = location.proprio.id;
						$rootScope.locationModifLien.caution = location.caution;
						$rootScope.locationModifLien.loyer = location.loyer;
						$rootScope.locationModifLien.charges = location.charges;
						$rootScope.locationModifLien.bail = location.bail;
						$rootScope.locationModifLien.meuble = location.meuble;
						

						// Aller dans la vue update.html
						$location.path("modifLocation");
					}

					// Méthode pour supprimer via un lien
					$scope.deleteLien = function(location) {

						locationProvider.deleteLocation(location.id_b, function(
								callBack) {
							locationProvider.getAllLocations(function(
									callBack) {
								$rootScope.locationListe = callBack;
							})
						})
					}
				})

		.controller(
				"supprLocationCtrl",
				function($scope, locationProvider, $location, $rootScope) {

					$scope.idLocation = 0;

					$scope.supprimerLocation = function() {

						locationProvider.deleteLocation($scope.idLocation,
								function(callBack) {
									$location.path("afficheLocation");

								});
					};
				})

		.controller(
				"modifLocationCtrl",
				function($scope, locationProvider, $location, $rootScope) {

					// Initialisation de l'objet à modifier
					$scope.locations = {
						id_b : undefined,
						statut : "",
						dateSoumission : undefined,
						dateDisponibilite : undefined,
						revenuCadastral : 0,
						superficie : 0,
						classe : {
							id_cl : 0,
						},
						contrat : undefined,
						adresse : {
							rue : "",
							numero : "",
							cp : 0,
							ville : ""
						},
						proprio : {
							id : undefined,
						},
						caution : 0,
						loyer : 0,
						charges : 0,
						bail : "",
						meuble : false
					}
					
					if ($rootScope.locationModifLien.id_b == undefined) {
						// Pas de passage par le lien

					} else {
						
						// Passage par le lien
						$scope.locations.id_b = $rootScope.locationModifLien.id_b;
						$scope.locations.statut = $rootScope.locationModifLien.statut;
						$scope.locations.dateSoumission = $rootScope.locationModifLien.dateSoumission;
						$scope.locations.dateDisponibilite = $rootScope.locationModifLien.dateDisponibilite;
						$scope.locations.revenuCadastral = $rootScope.locationModifLien.revenuCadastral;
						$scope.locations.superficie = $rootScope.locationModifLien.superficie;
						$scope.locations.classe.id_cl = $rootScope.locationModifLien.classe.id_cl;
						$scope.locations.adresse.rue = $rootScope.locationModifLien.adresse.rue;
						$scope.locations.adresse.numero = $rootScope.locationModifLien.adresse.numero;
						$scope.locations.adresse.cp = $rootScope.locationModifLien.adresse.cp;
						$scope.locations.adresse.ville = $rootScope.locationModifLien.adresse.ville;
						$scope.locations.proprio.id = $rootScope.locationModifLien.proprio.id;
						$scope.locations.caution = $rootScope.locationModifLien.caution;
						$scope.locations.loyer = $rootScope.locationModifLien.loyer;
						$scope.locations.charges = $rootScope.locationModifLien.charges;
						$scope.locations.bail = $rootScope.locationModifLien.bail;
						$scope.locations.meuble = $rootScope.locationModifLien.meuble;
						
					}

					$scope.modifierLocation = function() {

						console.log("---- Fonction : " + $scope.locations.id_b)

						locationProvider
								.updateLocation(
										$scope.locations,
										function(callBack) {
											console.log("---- Controller : "
													+ callBack)
											if (callBack != undefined
													&& callBack != "") {
												$location
														.path("afficheLocation");
											}
										});
					};
				})

		.controller(
				"rechLocationCtrl",
				function($scope, locationProvider) {

					// Initialisation de l'objet à modifier
					$scope.locationFind = {
						id_b : undefined,
						statut : "",
						dateSoumission : undefined,
						dateDisponibilite : undefined,
						revenuCadastral : 0,
						superficie : 0,
						classe : {
							id_cl : 0,
						},
						contrat : undefined,
						adresse : {
							rue : "",
							numero : "",
							cp : 0,
							ville : ""
						},
						proprio : {
							id : undefined,
						},
						caution : 0,
						loyer : 0,
						charges : 0,
						bail : "",
						meuble : false
					}

					$scope.idLocation = 0;

					$scope.indice = false;

					// Développement de la méthode ajouter() du bouton
					$scope.rechercherLocation = function() {

						// Appel de la fonction du Provider pour modifier la
						// classe dans
						// la bdd
						locationProvider
								.findLocation($scope.idLocation,
										function(callBack) {

											if (callBack != undefined
													&& callBack != "") {
												console.log(callBack)

												$scope.locationFind = callBack;
												$scope.indice = true;
											}
										});
					}

				})