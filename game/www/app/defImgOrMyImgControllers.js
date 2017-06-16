(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("defImgOrMyImgCtrl", ["$scope", "$rootScope", "$state", "dataStorage", "AudioService", function ($scope, $rootScope, $state, dataStorage, AudioService) {
        $scope.$on('$ionicView.enter', function () {
            $rootScope.loadingShow = false;
        });
        
        $scope.default = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            dataStorage.myImageBoolean = false;
            location.href = "#/app/complexity";
        }
        $scope.myImage = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            dataStorage.myImageBoolean = true;
            location.href = "#/app/complexity";
            //location.href = "#/app/myImg";
        }
       
        
        $scope.back = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/home";
        }
    }])
})();