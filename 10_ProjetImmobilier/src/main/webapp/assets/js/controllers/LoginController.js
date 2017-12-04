'use strict';
 
immoApp.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
 
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;
            
            $scope.agent = {
            		identifiant : $scope.username,
            		mdp : $scope.password
            };
            
            console.log("----- Controller 1 : " + $scope.agent.identifiant)
            console.log("----- Controller 1 : " + $scope.agent.mdp)
            
            AuthenticationService.Login($scope.agent, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('accueil');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);