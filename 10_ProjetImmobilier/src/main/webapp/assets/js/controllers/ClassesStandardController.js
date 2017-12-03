immoApp.controller(
		"listeClassesStandardCtrl",
		function($scope, classesStandardProvider, $location, $rootScope,
				proprioProvider, achatProvider, locationProvider,
				clientProvider, contratProvider) {

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

			contratProvider.getAllContrats(function(callBack) {
				$rootScope.contratsListe = callBack;
			});

			$scope.search = "";

			// =========================================================
			// =================== Méthodes Via Lien ===================
			// =========================================================

			// Initialiser la classe à modifier dans le rootScope
			$rootScope.classeModifLien = {
				typeBien : undefined,
				modeOffre : undefined,
				prixMax : undefined,
				superficieMin : undefined,
			}

			// Méthode pour modifier via un lien
			$scope.updateLien = function(classe) {

				// Mettre les valeurs du pays récupéré dans le rootScope
				$rootScope.classeModifLien.id_cl = classe.id_cl;
				$rootScope.classeModifLien.typeBien = classe.typeBien;
				$rootScope.classeModifLien.modeOffre = classe.modeOffre;
				$rootScope.classeModifLien.prixMax = classe.prixMax;
				$rootScope.classeModifLien.superficieMin = classe.superficieMin;

				// Aller dans la vue update.html
				$location.path("modifClasses");
			}

			// Méthode pour supprimer via un lien
			$scope.deleteLien = function(classe) {

				classesStandardProvider.deleteClass(classe, function(callBack) {
					classesStandardProvider.getAllClasses(function(callBack) {
						$rootScope.classesStandardListe = callBack;
					})
				})
			}
		})

.controller(
		"ajoutClassesStandardCtrl",
		function($scope, classesStandardProvider, $location, $rootScope) {

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
		function($scope, classesStandardProvider, $location, $rootScope) {

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
		function($scope, classesStandardProvider, $location, $rootScope) {

			// Initialise la classe standard à modifier
			$scope.classeStandard = {
				id_cl : 0,
				typeBien : "",
				modeOffre : "",
				prixMax : 0,
				superficieMin : 0,
			}

			// Déclarer une variable dans le scope pour initialiser le formulaire
			if ($rootScope.classeModifLien.id_cl == undefined) {
				// Pas de passage par le lien

			} else {
				
				// Passage par le lien
				$scope.classeStandard.id_cl = $rootScope.classeModifLien.id_cl;
				$scope.classeStandard.typeBien = $rootScope.classeModifLien.typeBien;
				$scope.classeStandard.modeOffre = $rootScope.classeModifLien.modeOffre;
				$scope.classeStandard.prixMax = $rootScope.classeModifLien.prixMax;
				$scope.classeStandard.superficieMin = $rootScope.classeModifLien.superficieMin;
				
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
