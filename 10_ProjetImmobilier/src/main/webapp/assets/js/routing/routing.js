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
	}).when("/afficheLocation", {
		templateUrl : "views/listeLocations.html",
		controller : "afficheLocationCtrl"
	})

	// ----- Clients -------
	.when("/listeClients", {
		templateUrl : "views/listeClients.html",
		controller : "listeClientsCtrl"
	}).when("/ajoutClient", {
		templateUrl : "views/ajoutClient.html",
		controller : "ajoutClientCtrl"
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

	}).when("/modifProprio", {
		templateUrl : "views/modifProprio.html",
		controller : "modifProprioCtrl"

	}).when("/supprProprio", {
		templateUrl : "views/supprProprio.html",
		controller : "supprProprioCtrl"

	}).when("/rechProprio", {
		templateUrl : "views/rechProprio.html",
		controller : "rechProprioCtrl"

	// --- Redirection par défault
	}).otherwise({
		redirectTo : "/listeClasses"
	})
})