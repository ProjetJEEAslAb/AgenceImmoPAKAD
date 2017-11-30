immoApp.controller("afficheAchatCtrl", function($scope, achatProvider, $location, $rootScope) {
	achatProvider.getAllAchats(function(callBack){
		$rootScope.achatListe=callBack;
	});
})