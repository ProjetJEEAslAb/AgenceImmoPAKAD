immoApp.controller("listeClassesStandardCtrl", function($scope,
		classesStandardProvider, $location) {

	classesStandardProvider.getAllClasses(function(callBack) {
		$scope.classesStandardListe = callBack;
	});

})