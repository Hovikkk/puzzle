(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("rulesCtrl", ["$scope", "$rootScope", "$ionicPlatform", "$ionicScrollDelegate", "AudioService", function ($scope, $rootScope, $ionicPlatform, $ionicScrollDelegate, AudioService) {
        $scope.$on('$ionicView.enter', function () {
            $rootScope.loadingShow = false;
        });
        $scope.back = function () {
            AudioService.cardOpen();
            location.href = "#/app/home";
        }
    }])
})();