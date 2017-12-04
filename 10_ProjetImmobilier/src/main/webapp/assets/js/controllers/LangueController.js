immoApp.controller("langueCtrl", ['$scope', '$translate', function (h,g) {

h.changeLangue = function (langue) {

    g.use(langue)

}

}]);