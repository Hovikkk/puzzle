(function () {
    "use strict";

    angular.module("myapp.controllers", [])

    .controller("appCtrl", ["$scope", function ($scope) {
    }])

    //homeCtrl provides the logic for the home screen
    .controller("homeCtrl", ["$scope", "$rootScope", "$state", "$ionicPlatform", "dataStorage", "AudioService", "$window", function ($scope, $rootScope, $state, $ionicPlatform, dataStorage, AudioService, $window) {
        $ionicPlatform.ready(function () {
            if ($window.MobileAccessibility) {
                $window.MobileAccessibility.usePreferredTextZoom(false);
            }
        });
        $scope.$on('$ionicView.enter', function () {
            $rootScope.loadingShow = false;
            $rootScope.levelCount = 6;
            $rootScope.starEasyOpen = 10;
            $rootScope.starNormalOpen = 10;
            $rootScope.starHardOpen = 10;
            $rootScope.soundButton = true;
            $scope.soundBool = true;
        })
        $rootScope.musicOffOpen = function () {
            if ($rootScope.music) {
                $rootScope.music = false
            } else {
                $rootScope.music = true
            }
        }
        $rootScope.buttonSound = function () {
            if ($rootScope.soundButton) {
                $rootScope.soundButton = false
            } else {
                $rootScope.soundButton = true
            }
        }
        $scope.refresh = function () {
            //refresh binding
            $scope.$broadcast("scroll.refreshComplete");
        };
        
        $scope.onLoad = function () {
            console.log("device reday !!!!")
            document.addEventListener("deviceready", onDeviceReady, true);
        };
        dataStorage.exitGame = true;
        $scope.exitFromApp = function () {
            AudioService.cardOpen();
            $scope.exitGame = dataStorage.exitGame;
            //navigator.app.exitApp();
        }
        $scope.gotoPlay = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/defImgOrMyImg";
        }
        $scope.gotoRules = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/rules";
        }

        /*function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        var arr = [1,2,3,4,5,6,7,8,9];
        arr = shuffle(arr);
        console.log(arr);
        */
           
        $scope.exitCancel = function (e) {
            AudioService.cardOpen();
            if (e) {
                navigator.app.exitApp();
            } else {
                $scope.exitGame = false;
            }
        }
    }])

    //errorCtrl managed the display of error messages bubbled up from other controllers, directives, myappService
    .controller("errorCtrl", ["$scope", "myappService", function ($scope, myappService) {
        //public properties that define the error message and if an error is present
        $scope.error = "";
        $scope.activeError = false;

        //function to dismiss an active error
        $scope.dismissError = function () {
            $scope.activeError = false;
        };

        //broadcast event to catch an error and display it in the error section
        $scope.$on("error", function (evt, val) {
            //set the error message and mark activeError to true
            $scope.error = val;
            $scope.activeError = true;

            //stop any waiting indicators (including scroll refreshes)
            myappService.wait(false);
            $scope.$broadcast("scroll.refreshComplete");

            //manually apply given the way this might bubble up async
            $scope.$apply();
        });
    }]);
})();