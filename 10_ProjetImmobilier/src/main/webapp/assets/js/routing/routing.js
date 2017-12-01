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
	}).when("/supprLocation", {
		templateUrl : "views/suppLocation.html",
		controller : "supprLocationCtrl"
	}).when("/modifLocation", {
		templateUrl : "views/modifLocation.html",
		controller : "modifLocationCtrl"
	}).when("/rechLocation", {
		templateUrl : "views/rechLocation.html",
		controller : "rechLocationCtrl"

	// ----- Clients -------
	}).when("/listeClients", {
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

	// ----- Proprio -------
	}).when("/afficheProprio", {
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

	// ----- Visite -------
	}).when("/afficheVisite", {
		templateUrl : "views/listeVisite.html",
		controller : "listeVisiteCtrl"

	}).when("/ajoutVisite", {
		templateUrl : "views/ajoutVisite.html",
		controller : "ajoutVisiteCtrl"
			
	}).when("/supprVisite", {
		templateUrl : "views/supprVisite.html",
		controller : "supprVisiteCtrl"
			
	}).when("/rechVisite", {
		templateUrl : "views/rechVisite.html",
		controller : "rechVisiteCtrl"
			
	}).when("/modifVisite", {
		templateUrl : "views/modifVisite.html",
		controller : "modifVisiteCtrl"

	// ------Achats---------
	}).when("/afficheAchat", {
		templateUrl : "views/afficheAchat.html",
		controller : "afficheAchatCtrl"
	}).when("/ajoutAchat", {
		templateUrl : "views/ajoutAchat.html",
		controller : "ajoutAchatCtrl"
	}).when("/supprAchat", {
		templateUrl : "views/supprAchat.html",
		controller : "supprAchatCtrl"
	}).when("/modifAchat", {
		templateUrl : "views/modifAchat.html",
		controller : "modifAchatCtrl"
	}).when("/cherchAchat", {
		templateUrl : "views/cherchAchat.html",
		controller : "cherchAchatCtrl"
			
	// ----- Contrats -------
	}).when("/afficheContrat", {
		templateUrl : "views/afficheContrat.html",
		controller : "contratCtrl"

	}).when("/ajoutContrat", {
		templateUrl : "views/ajoutContrat.html",
		controller : "ajoutContratCtrl"

	}).when("/modifContrat", {
		templateUrl : "views/modifContrat.html",
		controller : "modifContratCtrl"

	}).when("/suppContrat", {
		templateUrl : "views/suppContrat.html",
		controller : "suppContratCtrl"

	}).when("/rechContrat", {
		templateUrl : "views/rechContrat.html",
		controller : "rechContratCtrl"

	// --- Redirection par défault
	}).otherwise({
		redirectTo : "/listeClasses"
	})
})