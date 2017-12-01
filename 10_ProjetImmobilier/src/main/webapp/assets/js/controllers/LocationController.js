immoApp.controller(
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

			$scope.ajouterLocation = function() {

				locationProvider.addLocation($scope.locations, function(
						callBack) {
					if (callBack != undefined && callBack != "") {
						$location.path("afficheLocation");
					}
				});
			};
		})

.controller("afficheLocationCtrl",
		function($scope, locationProvider, $location, $rootScope) {

			locationProvider.getAllLocations(function(callBack) {
				$rootScope.locationListe = callBack;
			});
		})

.controller(
		"supprLocationCtrl",
		function($scope, locationProvider, $location, $rootScope) {

			$scope.idLocation = 0;

			$scope.supprimerLocation = function() {

				locationProvider.deleteLocation($scope.idLocation, function(
						callBack) {
					$location.path("afficheLocation");

				});
			};
		})

.controller("modifLocationCtrl", function($scope, locationProvider, $location) {

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

	$scope.modifierLocation = function() {

		console.log("---- Fonction : " + $scope.locations.id_b)
		
		locationProvider.updateLocation($scope.locations, function(callBack) {
			console.log("---- Controller : " + callBack)
			if (callBack != undefined && callBack != "") {
				$location.path("afficheLocation");
			}
		});
	};
})