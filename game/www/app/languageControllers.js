(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("languageCtrl", ["$scope", "$rootScope", "$ionicPlatform", "AudioService", function ($scope, $rootScope, $ionicPlatform, AudioService) {
        $scope.$on('$ionicView.enter', function () {
            $rootScope.loadingShow = false;
        });
        $scope.back = function () {
            AudioService.cardOpen();
            location.href = "#/app/home";
        }
    }])
})();