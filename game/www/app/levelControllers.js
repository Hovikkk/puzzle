(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("levelCtrl", ["$scope", "$rootScope", "dataStorage", "$timeout", "AudioService", function ($scope, $rootScope, dataStorage, $timeout, AudioService) {
        $scope.$on('$ionicView.enter', function () {
            if ((localStorage.getItem("easyLevel") == undefined) || (localStorage.getItem("easyLevel") == null)) {
                localStorage.setItem("easyLevel", 1);
                localStorage.setItem("timerEasyStart", 20)
                $scope.timerEasyStart = parseInt(localStorage.getItem("timerEasyStart"))
            }
            $scope.starEasyFin = 0;
            console.log(JSON.parse(localStorage.getItem("starArrEasy")))

            $scope.nums = [];
            $scope.arrNumberOrLockEasy = [];
            dataStorage.timerEasy = []
            //$scope.timerEasyStart = 15;
            $scope.firstPlayFunc();
            var strArray = JSON.parse(localStorage.getItem("starArrEasy"))
            var easyLavel = parseInt(localStorage.getItem("easyLevel")) - 1
            console.log(easyLavel)
            //$scope.timerEasyStart += 5;
            console.log(dataStorage.easyStar)
            console.log(easyLavel)
            if ((easyLavel != 0) && (dataStorage.easyStar !== 0) && (dataStorage.easyStar !== undefined)) {
                console.log("asasasad")
                $scope.timerEasyStart = parseInt(localStorage.getItem("timerEasyStart"));
                for (var j = 1; j <= $rootScope.levelCount; j++) {
                    dataStorage.timerEasy.push({ 'idTimer': j, 'timer': $scope.timerEasyStart })
                    if (j == easyLavel) {
                        console.log(dataStorage.easyStar)
                        if (dataStorage.easyStar != undefined) {
                            switch (dataStorage.easyStar) {
                                case 1:
                                    //console.log(JSON.parse(localStorage.getItem("starArrEasy"))[j - 1])
                                    if (JSON.parse(localStorage.getItem("starArrEasy"))[j - 1].showEasyStar2 == true) {
                                        strArray[j - 1].showEasyStar1 = false;
                                        strArray[j - 1].showEasyStar2 = true;
                                        strArray[j - 1].showEasyStar3 = true;
                                        strArray[j - 1].starEasyCount = dataStorage.easyStar;
                                        if (j != $rootScope.levelCount) {
                                            strArray[j].lock = false;
                                        }
                                        
                                        break;
                                    }
                                case 2:
                                    //console.log(JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar2)
                                    if (JSON.parse(localStorage.getItem("starArrEasy"))[j - 1].showEasyStar3 == true) {
                                        strArray[j - 1].showEasyStar1 = false;
                                        strArray[j - 1].showEasyStar2 = false;
                                        strArray[j - 1].showEasyStar3 = true;
                                        strArray[j - 1].starEasyCount = dataStorage.easyStar;
                                        if (j != $rootScope.levelCount) {
                                            strArray[j].lock = false;
                                        }
                                    }

                                    break;
                                case 3:
                                    strArray[j - 1].showEasyStar1 = false;
                                    strArray[j - 1].showEasyStar2 = false;
                                    strArray[j - 1].showEasyStar3 = false;
                                    strArray[j - 1].starEasyCount = dataStorage.easyStar;
                                    if (j != $rootScope.levelCount) {
                                        strArray[j].lock = false;
                                    }
                                    break;
                                default:
                                    strArray[j - 1].showEasyStar1 = true;
                                    strArray[j - 1].showEasyStar2 = true;
                                    strArray[j - 1].showEasyStar3 = true;
                                    strArray[j - 1].starEasyCount = dataStorage.easyStar;
                                    if (j != $rootScope.levelCount) {
                                        strArray[j].lock = true;
                                    }
                                    break;
                            }
                        }
                        localStorage.removeItem('starArrEasy')
                        console.log(strArray)
                        localStorage.setItem("starArrEasy", JSON.stringify(strArray))
                        $scope.arrNumberOrLockEasy = strArray
                        console.log(JSON.parse(localStorage.getItem("starArrEasy")))
                        console.log(j)
                        console.log($scope.arrNumberOrLockEasy)
                        if (j == $rootScope.levelCount) {
                            $scope.arrNumberOrLockEasy[j-1].showEasyStar1 = JSON.parse(localStorage.getItem("starArrEasy"))[j-1].showEasyStar1
                            $scope.arrNumberOrLockEasy[j-1].showEasyStar2 = JSON.parse(localStorage.getItem("starArrEasy"))[j-1].showEasyStar2
                            $scope.arrNumberOrLockEasy[j-1].showEasyStar3 = JSON.parse(localStorage.getItem("starArrEasy"))[j-1].showEasyStar3
                        } else {
                            $scope.arrNumberOrLockEasy[j].showEasyStar1 = JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar1
                            $scope.arrNumberOrLockEasy[j].showEasyStar2 = JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar2
                            $scope.arrNumberOrLockEasy[j].showEasyStar3 = JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar3
                        }
                        
                    }

                }
            } else if ((dataStorage.easyStar === 0) || (dataStorage.easyStar === undefined)) {
                console.log("ku")
                $scope.arrNumberOrLockEasy = strArray
                console.log($scope.arrNumberOrLockEasy)
                for (var j = 0; j < $rootScope.levelCount; j++) {
                    dataStorage.timerEasy.push({ 'idTimer': j, 'timer': $scope.timerEasyStart })
                    $scope.arrNumberOrLockEasy[j].showEasyStar1 = JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar1
                    $scope.arrNumberOrLockEasy[j].showEasyStar2 = JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar2
                    $scope.arrNumberOrLockEasy[j].showEasyStar3 = JSON.parse(localStorage.getItem("starArrEasy"))[j].showEasyStar3
                }
            }
            for (var j = 0; j < $rootScope.levelCount; j++) {
                $scope.starEasyFin += strArray[j].starEasyCount
               /* if ($scope.arrNumberOrLockEasy[j].lock == true) {
                    $scope.arrNumberOrLockEasy[j].showEasyStar1 = null
                    $scope.arrNumberOrLockEasy[j].showEasyStar2 = null
                    $scope.arrNumberOrLockEasy[j].showEasyStar3 = null
                }*/
            }
            localStorage.setItem("starEasyFin", $scope.starEasyFin)
            console.log($scope.starEasyFin + "___"  + $scope.starEasyOpen)
            if (($scope.starEasyFin >= $rootScope.starEasyOpen) && (parseInt(localStorage.getItem("complexity"))<=2)) {
                localStorage.setItem("complexity", 2);
            }
            console.log($scope.starEasyFin)
            $rootScope.loadingShow = false;
            $scope.$apply();
        });

        $scope.firstPlayFunc = function () {
            //$scope.timerEasyStart += 5;
            if ((JSON.parse(localStorage.getItem("starArrEasy")) == undefined) || (JSON.parse(localStorage.getItem("starArrEasy")) == null)) {
                for (var i = 1; i <= $rootScope.levelCount; i++) {
                    $scope.showEasyStar1 = true;
                    $scope.showEasyStar2 = true;
                    $scope.showEasyStar3 = true;
                    $scope.starEasyCount = 0;
                    
                    dataStorage.timerEasy.push({ 'idTimer': i, 'timer': $scope.timerEasyStart })
                    //localStorage.setItem("timerEasy", JSON.stringify(dataStorage.timerEasy))
                    console.log(localStorage.getItem("easyLevel"))
                    if (i <= parseInt(localStorage.getItem("easyLevel"))) {
                        $scope.arrNumberOrLockEasy.push({ 'number': i, 'showEasyStar1': $scope.showEasyStar1, 'showEasyStar2': $scope.showEasyStar2, 'showEasyStar3': $scope.showEasyStar3, 'starEasyCount': $scope.starEasyCount, 'lock': false });
                    } else {
                        $scope.arrNumberOrLockEasy.push({ 'number': i, 'showEasyStar1': $scope.showEasyStar1, 'showEasyStar2': $scope.showEasyStar2, 'showEasyStar3': $scope.showEasyStar3, 'starEasyCount': $scope.starEasyCount, 'lock': true });
                    }
                    $scope.nums.push(i)
                }
                localStorage.setItem("starArrEasy", JSON.stringify($scope.arrNumberOrLockEasy))
            }

        }
        $scope.levelPage = function (n) {
            console.log(n)
            /*$scope.defTimer = parseInt(localStorage.getItem("timerEasyStart"))
            if (n < localStorage.getItem("easyLevel")) {
                $scope.defTimer = parseInt(localStorage.getItem("timerEasyStart")) 
            }*/
            console.log($scope.timerEasyStart)
            console.log(localStorage.getItem("timerEasyStart"))
            
            if (($scope.arrNumberOrLockEasy[n - 1].lock == false)) {
                AudioService.cardOpen();
                localStorage.setItem("timerEasyStart", localStorage.getItem("timerEasyStart"))
                $rootScope.loadingShow = true;
                dataStorage.levelNumber = n;
                location.href = "#/app/play";
            }
        }
        $scope.back = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/complexity";
        }
    }])
})();