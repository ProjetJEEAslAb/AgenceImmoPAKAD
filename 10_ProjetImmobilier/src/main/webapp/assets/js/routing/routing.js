immoApp.config(function($routeProvider) {
	// ============= Pages Classes Standard
	// --- Liste
	$routeProvider.when("/listeClasses", {
		templateUrl : "views/listeClassesStandard.html",
		controller : "listeClassesStandardCtrl"

	// --- Ajouter
	}).when("/ajoutClasses", {
		templateUrl : "views/ajoutClassesStandard.html",
		controller : "ajoutClassesStandardCtrl"

	// --- Supprimer
	}).when("/supprClasses", {
		templateUrl : "views/supprClassesStandard.html",
		controller : "supprClassesStandardCtrl"

	// --- Modifier
	}).when("/modifClasses", {
		templateUrl : "views/modifClassesStandard.html",
		controller : "modifClassesStandardCtrl"

	// --- Rechercher
	}).when("/rechClasses", {
		templateUrl : "views/rechClassesStandard.html",
		controller : "rechClassesStandardCtrl"

	// ----- Locations -------
	}).when("/ajoutLocation", {
		templateUrl : "views/ajoutLocation.html",
		controller : "ajoutLocationCtrl"
	})

	// ----- Clients -------
	.when("/ajoutClient", {
		templateUrl : "views/ajoutClient.html",
		controller : "ajoutClientCtrl"
	// --- Redirection par défault
	}).when("/suppClient", {
		templateUrl : "views/suppClient.html",
		controller : "suppClientCtrl"

	}).when("/modifClient", {
		templateUrl : "views/modifClient.html",
		controller : "modifClientCtrl"

	}).when("/rechClient", {
		templateUrl : "views/rechClient.html",
		controller : "rechClientCtrl"

	})

	// ----- Proprio -------
	.when("/afficheProprio", {
		templateUrl : "views/listeProprio.html",
		controller : "proprioCtrl"
			
	}).when("/ajoutProprio", {
		templateUrl : "views/ajoutProprio.html",
		controller : "ajoutProprioCtrl"

	// --- Redirection par défault
	}).otherwise({
		redirectTo : "/listeClasses"
	})
})