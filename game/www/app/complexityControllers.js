(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("complexityCtrl", ["$scope", "$rootScope", "$state", "dataStorage", "AudioService", function ($scope, $rootScope, $state, dataStorage, AudioService) {
        $scope.$on('$ionicView.enter', function () {
            if (!dataStorage.myImageBoolean) {
                $scope.starShow = true
            } else {
                $scope.starShow = false;
            }
            $scope.normalOpenComplexity = $rootScope.starNormalOpen;
            if(localStorage.getItem("starEasyFin") == null){
                $scope.myNormalStar = 0
            } else {
                $scope.myNormalStar = localStorage.getItem("starEasyFin")
            }
            $scope.hardOpenComplexity = $rootScope.starHardOpen;
            if (localStorage.getItem("starNormalFin") == null) {
                $scope.myHardStar = 0
            } else {
                $scope.myHardStar = localStorage.getItem("starNormalFin")
            }
            
           // $scope.myHardStar = 0
            if (!dataStorage.myImageBoolean) {
                if ((localStorage.getItem("complexity") == undefined) || (localStorage.getItem("complexity") == null)) {
                    localStorage.setItem("complexity", 1);
                }
                $('.complexityDivN').removeAttr("id")
                $('.complexityDivH').removeAttr("id")
                if (localStorage.getItem("complexity") == 1) {
                    $scope.lockedE = true;
                    $scope.lockedN = false;
                    $scope.lockedH = false;
                } else if (localStorage.getItem("complexity") == 2) {
                    $scope.lockedE = true;
                    $scope.lockedN = true;
                    $scope.lockedH = false;
                } else if (localStorage.getItem("complexity") == 3) {
                    $scope.lockedE = true;
                    $scope.lockedN = true;
                    $scope.lockedH = true
                }
                if ($scope.lockedN && !dataStorage.myImageBoolean) {
                    $('.complexityDivN').attr('id', "normalOpen");
                }
                if ($scope.lockedH && !dataStorage.myImageBoolean) {
                    $('.complexityDivH').attr('id', "hardOpen");
                }
            } else {
                $('.complexityDivN').attr('id', "normalOpen");
                $('.complexityDivH').attr('id', "hardOpen");
                $scope.lockedE = true;
                $scope.lockedN = true;
                $scope.lockedH = true
            }
            dataStorage.myImgLevelEasy = false;
            dataStorage.myImgLevelNormal = false;
            dataStorage.myImgLevelHard = false;
            $rootScope.loadingShow = false;
            $scope.$apply();
        });
        $scope.easyComplexity = function () {
            AudioService.cardOpen();
                if (dataStorage.myImageBoolean) {
                    $rootScope.loadingShow = true;
                    dataStorage.myImgLevelEasy = true;
                    location.href = "#/app/myImg";
                } else if (($scope.lockedE) && !dataStorage.myImageBoolean) {
                    $rootScope.loadingShow = true;
                    location.href = "#/app/level";
                }
            
        }
        $scope.normalComplexity = function () {
            AudioService.cardOpen();
                if (dataStorage.myImageBoolean) {
                    $rootScope.loadingShow = true;
                    dataStorage.myImgLevelNormal = true;
                    location.href = "#/app/myImg";
                } else if (($scope.lockedN) && !dataStorage.myImageBoolean) {
                    $rootScope.loadingShow = true;
                    location.href = "#/app/normalLevel";
                }
        }
        $scope.hardComplexity = function () {
            AudioService.cardOpen();
                if (dataStorage.myImageBoolean) {
                    $rootScope.loadingShow = true;
                    dataStorage.myImgLevelHard = true;
                    location.href = "#/app/myImg";
                } else if (($scope.lockedH) && !dataStorage.myImageBoolean) {
                    $rootScope.loadingShow = true;
                    location.href = "#/app/hardLevel";
                }
        }
        $scope.back = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/defImgOrMyImg";
        }
    }])
})();