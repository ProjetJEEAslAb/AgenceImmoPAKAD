immoApp.controller("ajoutVisiteCtrl",
		function($scope, visiteProvider, $location) {
	
	// Initialisation de l'objet à ajouter
	$scope.visite={
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
				$location.path("listeClasses");
			}
		});
		
	}	
})












