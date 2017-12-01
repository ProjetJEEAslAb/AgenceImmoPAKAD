immoApp.controller("contratCtrl",
		function($scope, contratProvider, $location, $rootScope) {

	contratProvider.getAllContrats(function(callBack) {
		$rootScope.contratsListe = callBack;
	});
})


