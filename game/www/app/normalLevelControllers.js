(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("normalLevelCtrl", ["$scope", "$rootScope", "dataStorage", "AudioService", function ($scope, $rootScope, dataStorage, AudioService) {
        /*$scope.$on('$ionicView.enter', function () {
            if ((localStorage.getItem("normalLevel") == undefined) || (localStorage.getItem("normalLevel") == null)) {
                localStorage.setItem("normalLevel", 1);
            }
            $scope.nums = [];
            $scope.arrNumberOrLockNormal = [];
            for (var i = 1; i <= 27; i++) {
                if (i <= localStorage.getItem("normalLevel")) {
                    $scope.arrNumberOrLockNormal.push({ 'number': i, 'lock': false });
                } else {
                    $scope.arrNumberOrLockNormal.push({ 'number': i, 'lock': true });
                }
                $scope.nums.push(i)
            }
            console.log($scope.arrNumberOrLockNormal)
            $rootScope.loadingShow = false;
        });
        
        $scope.levelPage = function (n) {
            if (($scope.arrNumberOrLockNormal[n - 1].lock == false)) {
                $rootScope.loadingShow = true;
                dataStorage.levelNumber = n;
                location.href = "#/app/normalPlay";
            }
        }
        $scope.back = function () {
            $rootScope.loadingShow = true;
            location.href = "#/app/complexity";
        }*/

        $scope.$on('$ionicView.enter', function () {
            if ((localStorage.getItem("normalLevel") == undefined) || (localStorage.getItem("normalLevel") == null)) {
                localStorage.setItem("normalLevel", 1);
                localStorage.setItem("timerNormalStart", 30)
                $scope.timerNormalStart = parseInt(localStorage.getItem("timerNormalStart"))
            }
            $scope.starNormalFin = 0;
            console.log(JSON.parse(localStorage.getItem("starArrNormal")))

            $scope.nums = [];
            $scope.arrNumberOrLockNormal = [];
            dataStorage.timerNormal = []
            //$scope.timerEasyStart = 15;
            $scope.firstPlayFunc();
            var strArray = JSON.parse(localStorage.getItem("starArrNormal"))
            var normalLavel = parseInt(localStorage.getItem("normalLevel")) - 1
            console.log(normalLavel)
            //$scope.timerEasyStart += 5;
            console.log(dataStorage.normalStar)
            console.log(normalLavel)
            if ((normalLavel != 0) && (dataStorage.normalStar != 0) && (dataStorage.normalStar != undefined)) {
                $scope.timerNormalStart = parseInt(localStorage.getItem("timerNormalStart"));
                for (var j = 1; j <= $rootScope.levelCount; j++) {
                    dataStorage.timerNormal.push({ 'idTimer': j, 'timer': $scope.timerNormalStart })
                    if (j == normalLavel) {
                        console.log(dataStorage.normalStar)
                        if (dataStorage.normalStar != undefined) {
                            switch (dataStorage.normalStar) {
                                case 1:
                                    //console.log(JSON.parse(localStorage.getItem("starArrNormal"))[j - 1])
                                    if (JSON.parse(localStorage.getItem("starArrNormal"))[j - 1].showNormalStar2 == true) {
                                        strArray[j - 1].showNormalStar1 = false;
                                        strArray[j - 1].showNormalStar2 = true;
                                        strArray[j - 1].showNormalStar3 = true;
                                        strArray[j - 1].starNormalCount = dataStorage.normalStar;
                                        if (j != $rootScope.levelCount) {
                                            strArray[j].lock = false;
                                        }
                                        break;
                                    }
                                case 2:
                                    //console.log(JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar2)
                                    if (JSON.parse(localStorage.getItem("starArrNormal"))[j - 1].showNormalStar3 == true) {
                                        strArray[j - 1].showNormalStar1 = false;
                                        strArray[j - 1].showNormalStar2 = false;
                                        strArray[j - 1].showNormalStar3 = true;
                                        strArray[j - 1].starNormalCount = dataStorage.normalStar;
                                        if (j != $rootScope.levelCount) {
                                            strArray[j].lock = false;
                                        }
                                    }

                                    break;
                                case 3:
                                    strArray[j - 1].showNormalStar1 = false;
                                    strArray[j - 1].showNormalStar2 = false;
                                    strArray[j - 1].showNormalStar3 = false;
                                    strArray[j - 1].starNormalCount = dataStorage.normalStar;
                                    if (j != $rootScope.levelCount) {
                                        strArray[j].lock = false;
                                    }
                                    break;
                                default:
                                    strArray[j - 1].showNormalStar1 = true;
                                    strArray[j - 1].showNormalStar2 = true;
                                    strArray[j - 1].showNormalStar3 = true;
                                    strArray[j - 1].starNormalCount = dataStorage.normalStar;
                                    if (j != $rootScope.levelCount) {
                                        strArray[j].lock = true;
                                    }
                                    break;
                            }
                        }
                        localStorage.removeItem('starArrNormal')
                        console.log(strArray)
                        localStorage.setItem("starArrNormal", JSON.stringify(strArray))
                        $scope.arrNumberOrLockNormal = strArray
                        console.log(JSON.parse(localStorage.getItem("starArrNormal")))
                        console.log(j)
                        console.log($scope.arrNumberOrLockNormal)
                        if (j == $rootScope.levelCount) {
                            $scope.arrNumberOrLockNormal[j-1].showNormalStar1 = JSON.parse(localStorage.getItem("starArrNormal"))[j-1].showNormalStar1
                            $scope.arrNumberOrLockNormal[j-1].showNormalStar2 = JSON.parse(localStorage.getItem("starArrNormal"))[j-1].showNormalStar2
                            $scope.arrNumberOrLockNormal[j-1].showNormalStar3 = JSON.parse(localStorage.getItem("starArrNormal"))[j-1].showNormalStar3
                        } else {
                            $scope.arrNumberOrLockNormal[j].showNormalStar1 = JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar1
                            $scope.arrNumberOrLockNormal[j].showNormalStar2 = JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar2
                            $scope.arrNumberOrLockNormal[j].showNormalStar3 = JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar3
                        }
                        
                    }

                }
            } else if ((dataStorage.normalStar == 0) || (dataStorage.normalStar == undefined)) {
                $scope.arrNumberOrLockNormal = strArray
                for (var j = 0; j < $rootScope.levelCount; j++) {
                    dataStorage.timerNormal.push({ 'idTimer': j, 'timer': $scope.timerNormalStart })
                    $scope.arrNumberOrLockNormal[j].showNormalStar1 = JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar1
                    $scope.arrNumberOrLockNormal[j].showNormalStar2 = JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar2
                    $scope.arrNumberOrLockNormal[j].showNormalStar3 = JSON.parse(localStorage.getItem("starArrNormal"))[j].showNormalStar3
                }
            }
            for (var j = 0; j < $rootScope.levelCount; j++) {
                $scope.starNormalFin += strArray[j].starNormalCount
            }
            localStorage.setItem("starNormalFin", $scope.starNormalFin)
            if ($scope.starNormalFin >= $rootScope.starNormalOpen) {
                localStorage.setItem("complexity", 3);
            }
            console.log($scope.starNormalFin)
            $rootScope.loadingShow = false;
            $scope.$apply();
        });

        $scope.firstPlayFunc = function () {
            //$scope.timerEasyStart += 5;
            if ((JSON.parse(localStorage.getItem("starArrNormal")) == undefined) || (JSON.parse(localStorage.getItem("starArrNormal")) == null)) {
                for (var i = 1; i <= $rootScope.levelCount; i++) {
                    $scope.showNormalStar1 = true;
                    $scope.showNormalStar2 = true;
                    $scope.showNormalStar3 = true;
                    $scope.starNormalCount = 0;
                    dataStorage.timerNormal.push({ 'idTimer': i, 'timer': $scope.timerNormalStart })
                    console.log(localStorage.getItem("normalLevel"))
                    if (i <= parseInt(localStorage.getItem("normalLevel"))) {
                        $scope.arrNumberOrLockNormal.push({ 'number': i, 'showNormalStar1': $scope.showNormalStar1, 'showNormalStar2': $scope.showNormalStar2, 'showNormalStar3': $scope.showNormalStar3, 'starNormalCount': $scope.starNormalCount, 'lock': false });
                    } else {
                        $scope.arrNumberOrLockNormal.push({ 'number': i, 'showNormalStar1': $scope.showNormalStar1, 'showNormalStar2': $scope.showNormalStar2, 'showNormalStar3': $scope.showNormalStar3, 'starNormalCount': $scope.starNormalCount, 'lock': true });
                    }
                    $scope.nums.push(i)
                }
                localStorage.setItem("starArrNormal", JSON.stringify($scope.arrNumberOrLockNormal))
            }

        }
        $scope.levelPage = function (n) {
            console.log(n)
            
            if (($scope.arrNumberOrLockNormal[n - 1].lock == false)) {
                AudioService.cardOpen();
                localStorage.setItem("timerNormalStart", localStorage.getItem("timerNormalStart"))
                //localStorage.setItem("timerNormalStart", $scope.timerNormalStart)
                $rootScope.loadingShow = true;
                dataStorage.levelNumber = n;
                location.href = "#/app/normalPlay";
            }
        }
        $scope.back = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/complexity";
        }
    }])
})();