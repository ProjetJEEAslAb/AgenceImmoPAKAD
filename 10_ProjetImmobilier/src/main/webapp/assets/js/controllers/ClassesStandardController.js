immoApp.controller(
		"listeClassesStandardCtrl",
		function($scope, classesStandardProvider, $location, $rootScope,
				proprioProvider, achatProvider, locationProvider,
				clientProvider) {

			classesStandardProvider.getAllClasses(function(callBack) {

				$rootScope.classesStandardListe = callBack;
			});
			proprioProvider.getAllProprio(function(callBack) {
				$rootScope.proprioListe = callBack;
			});
			achatProvider.getAllAchats(function(callBack) {
				$rootScope.achatListe = callBack;
			});
			locationProvider.getAllLocations(function(callBack) {
				$rootScope.locationListe = callBack;
			});
			clientProvider.getAllClients(function(callBack) {
				$rootScope.clientsListe = callBack;
			});

			$scope.search = "";
		})

.controller(
		"ajoutClassesStandardCtrl",
		function($scope, classesStandardProvider, $location) {

			// Initialise la classe standard à ajouter
			$scope.classeStandard = {
				typeBien : undefined,
				modeOffre : undefined,
				prixMax : undefined,
				superficieMin : undefined,
			}

			// Développement de la méthode ajouter() du bouton
			$scope.ajouterClasseStandard = function() {

				// Appel de la fonction du Provider pour ajouter la classe dans
				// la bdd
				classesStandardProvider.addClass($scope.classeStandard,
						function(callBack) {

							if (callBack != undefined && callBack != "") {
								console.log(callBack)
								$location.path("listeClasses");
							}
						});
			}

		})

.controller(
		"supprClassesStandardCtrl",
		function($scope, classesStandardProvider, $location) {

			$scope.idClasseStandard = 0;

			$scope.supprimerClasseStandard = function() {

				// Initialise la classe standard à supprimer
				$scope.classeStandard = {
					id_cl : $scope.idClasseStandard,
				}

				// Appel de la fonction du Provider pour supprimer la classe
				// dans
				// la bdd
				classesStandardProvider.deleteClass($scope.classeStandard,
						function(callBack) {

							$location.path("listeClasses");

						});
			}
		})

.controller(
		"modifClassesStandardCtrl",
		function($scope, classesStandardProvider, $location) {

			// Initialise la classe standard à modifier
			$scope.classeStandard = {
				id_cl : 0,
				typeBien : "",
				modeOffre : "",
				prixMax : 0,
				superficieMin : 0,
			}

			// Développement de la méthode ajouter() du bouton
			$scope.modifierClasseStandard = function() {

				// Appel de la fonction du Provider pour modifier la classe dans
				// la bdd
				classesStandardProvider.updateClass($scope.classeStandard,
						function(callBack) {

							if (callBack != undefined && callBack != "") {
								console.log(callBack)
								$location.path("listeClasses");
							}
						});
			}

		})

.controller(
		"rechClassesStandardCtrl",
		function($scope, classesStandardProvider) {

			// Initialise la classe standard à modifier
			$scope.classeStandard = {
				id_cl : 0,
				typeBien : "",
				modeOffre : "",
				prixMax : 0,
				superficieMin : 0,
			}

			$scope.idClasseStandard = 0;

			$scope.indice = false;
			$scope.msg = "";

			$scope.classeStandardFind = {
				id_cl : 0,
				typeBien : "",
				modeOffre : "",
				prixMax : 0,
				superficieMin : 0,
			}

			// Développement de la méthode ajouter() du bouton
			$scope.rechercherClasseStandard = function() {

				// Appel de la fonction du Provider pour modifier la classe dans
				// la bdd
				classesStandardProvider.findClass($scope.idClasseStandard,
						function(callBack) {

							if (callBack != undefined && callBack != "") {
								console.log(callBack)

								$scope.classeStandardFind = callBack;
								$scope.msg = "";
								$scope.indice = true;

							} else {

								$scope.msg = "Cette classe n'existe pas.";
								$scope.indice = false;
							}
						});
			}

		})
