immoApp.controller("ajoutLocationCtrl",
		function($scope, bienProvider, $location) {
			console.log("bla")
			// Initialisation de l'objet à ajouter
			$scope.locations = {
				statut : "",
				dateSoumission : null,
				dateDisponibilite : null,
				revenuCadastral : 0,
				superficie : 0,
				classe : {
					id : 0,
					typeBien : "",
					modeOffre : "",
					prixMax : 0,
					superficieMin : 0,
				},
				agent : null,
				adresse : {
					rue : "",
					numero : "",
					cp : 0,
					ville : ""
				},
				proprietaire : null,
				caution : 0,
				loyer : 0,
				charges : 0,
				bail : 0,
				meuble : ""
			};
			console.log($scope.locations)

			$scope.ajouterLocation = function() {
				console.log("ble");
				console.log($scope.locations);
				bienProvider.addLocation($scope.location, function(callBack) {
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