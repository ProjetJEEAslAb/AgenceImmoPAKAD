immoApp.controller("proprioCtrl", function($scope, proprioProvider, $location) {
	proprioProvider.getAllProprio(function(callBack) {
		$scope.proprioListe = callBack;
	});
})