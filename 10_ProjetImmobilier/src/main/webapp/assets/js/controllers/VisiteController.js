immoApp.controller("listeVisiteCtrl",
		function($scope, visiteProvider, $location, $rootScope) {

	visiteProvider.listeVisite(function(callBack) {
		$rootScope.visiteListe = callBack;
	});
}).controller("ajoutVisiteCtrl",
		function($scope, visiteProvider, $location) {
	
	// Initialisation de l'objet à ajouter
	$scope.visiteAjout={
		      id: 0,
		      rdv: null,
		      achat:   {
		         id_b: 0,
		         statut: "",
		         dateSoumission: null,
		         dateDisponibilite: null,
		         revenuCadastral: 0,
		         superficie: 0,
		         classe: 0,
		         agent: 0,
		         contrat: 0,
		         	adresse:          {
		            rue: "",
		            numero: "",
		            cp: 0,
		            ville: ""
		         },
		         proprio: 0,
		         prixVente: "",
		         etat: ""
		      },
		      location: null,
		      	client:      {
		          id_client: 0,
		          nom: "",
		          num: "",
		          adresse:  {
		            rue: "",
		            numero: "",
		            cp: 0,
		            ville: ""
		         },
		      }
		   }
	
	
	// Développement de la méthode ajouter() du bouton
	$scope.ajouterVisite = function() {
	
	// Appel de la fonction du Provider pour ajouter une visite dans la bdd
		visiteProvider.addVisite($scope.visite,function(callBack) {
		
			if (callBack != undefined && callBack != "") {
				console.log(callBack)
				$location.path("afficheVisite");
			}
		});
		
	}	
}).controller("supprVisiteCtrl", function($scope, visiteProvider, $location) {

	$scope.id = 0;

	$scope.supprimerVisite = function() {

		// Appel de la fonction du Provider pour supprimer le client
		// dans
		// la bdd
		visiteProvider.deleteVisite($scope.id, function(callBack) {

			$location.path("listeClasses");

		});
	}
}).controller("rechVisiteCtrl",function($scope, visiteProvider) {

			$scope.id = 0;
			
			$scope.msg = "";
			$scope.indice = false;
			
			$scope.visiteFind = {
			      id: 0,
			      rdv: null,
			      	achat:       {
			         id_b: "",
			         statut: null,
			         dateSoumission: null,
			         dateDisponibilite: null,
			         revenuCadastral: "",
			         superficie: "",
			         classe: null,
			         agent: null,
			         adresse:          {
			            rue: null,
			            numero: null,
			            cp: "",
			            ville: null
			         },
			         proprio: null,
			         prixVente: "",
			         etat: null
			      },
			      location: null,
			      client:       {
			         id_client: "",
			         nom: "",
			         num: "",
			         adresse:          {
			            rue: "",
			            numero: "",
			            cp: "",
			            ville: ""
			         }
			      }
			   }
			

			// Développement de la méthode rechercher() du bouton
			$scope.rechercherVisite = function() {

				// Appel de la fonction du Provider pour rechercher le client
				visiteProvider.rechVisite($scope.id,
						function(callBack) {

							if (callBack != undefined && callBack != "") {
								console.log(callBack)

								$scope.visiteFind = callBack;
								$scope.msg = "";
								$scope.indice = true;

							} else {

								$scope.msg = "Cette visite n'existe pas.";
								$scope.indice = false;
							}
						});
			}

		}).controller("modifVisiteCtrl", function($scope, visiteProvider, $location) {

			// Initialise la classe standard à modifier
			$scope.visiteModif = {
					id: 0,
				      rdv: null,
				      	achat:       {
				         id_b: "",
				         statut: null,
				         dateSoumission: null,
				         dateDisponibilite: null,
				         revenuCadastral: "",
				         superficie: "",
				         classe: null,
				         agent: null,
				         adresse:          {
				            rue: null,
				            numero: null,
				            cp: "",
				            ville: null
				         },
				         proprio: null,
				         prixVente: "",
				         etat: null
				      },
				      location: null,
				      client:       {
				         id_client: "",
				         nom: "",
				         num: "",
				         adresse:          {
				            rue: "",
				            numero: "",
				            cp: "",
				            ville: ""
				         }
				      }
				   }
				

			// Développement de la méthode modifier() du bouton
			$scope.modifierVisite = function() {
				console.log($scope.visiteModif)
				// Appel de la fonction du Provider pour modifier le client dans
				// la bdd
				visiteProvider.updateVisite($scope.visiteModif, function(callBack) {

					if (callBack != undefined && callBack != "") {
						console.log(callBack)
						$location.path("listeClasses");
					}
				});
			}

		})












