(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("setingsCtrl", ["$scope", "$rootScope",  function ($scope, $rootScope) {
       
        
        $scope.$on('$ionicView.enter', function () {
            
        });
        
        $scope.back = function (num) {
            location.href = "#/app/home";
        }
    }])
})();