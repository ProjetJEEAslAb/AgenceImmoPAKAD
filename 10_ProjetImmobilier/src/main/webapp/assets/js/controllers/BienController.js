immoApp.controller("ajoutLocationCtrl",
		function($scope, bienProvider, $location) {
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
				console.log($scope.locations);
				bienProvider.addLocation($scope.locations, function(callBack) {
					if (callBack != undefined && callBack != "") {
						$location.path("listeClasses");
					}
				});
			};
		})

.controller("afficheLocationCtrl",
		function($scope, bienProvider, $location, $rootScope) {

			bienProvider.getAllLocations(function(callBack) {
				$rootScope.locationListe = callBack;
			});
		})