immoApp.controller("listeClassesStandardCtrl",
		function($scope, classesStandardProvider, $location) {

			classesStandardProvider.getAllClasses(function(callBack) {
				$scope.classesStandardListe = callBack;
			});
		})

.controller(
		"ajoutClassesStandardCtrl",
		function($scope, classesStandardProvider, $location) {

			// Initialise la classe standard à ajouter
			$scope.classeStandard = {
				typeBien : "",
				modeOffre : "",
				prixMax : 0,
				superficieMin : 0,
			}

			// Développement de la méthode ajouter() du bouton
			$scope.ajouterClasseStandard = function() {

				// Appel de la fonction du Provider pour ajouter la classe dans
				// la bdd
				classesStandardProvider.add($scope.classeStandard, function(
						callBack) {

					if (callBack != undefined && callBack != "") {

						$location.path("listeClasses");
					}
				});
			}

		})