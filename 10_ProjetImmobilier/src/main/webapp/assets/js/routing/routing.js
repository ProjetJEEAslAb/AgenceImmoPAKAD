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

	// --- Redirection par défault
	}).otherwise({
		redirectTo : "/listeClasses"
	})
})