(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("hardLevelCtrl", ["$scope", "$rootScope", "dataStorage", "AudioService", function ($scope, $rootScope, dataStorage, AudioService) {
       /* $scope.$on('$ionicView.enter', function () {
            if ((localStorage.getItem("hardLevel") == undefined) || (localStorage.getItem("hardLevel") == null)) {
                localStorage.setItem("hardLevel", 1);
            }
            $scope.nums = [];
            $scope.arrNumberOrLockHard = [];
            for (var i = 1; i <= 27; i++) {
                if (i <= localStorage.getItem("hardLevel")) {
                    $scope.arrNumberOrLockHard.push({ 'number': i, 'lock': false });
                } else {
                    $scope.arrNumberOrLockHard.push({ 'number': i, 'lock': true });
                }
                $scope.nums.push(i)
            }
            console.log($scope.arrNumberOrLockNormal)
            $rootScope.loadingShow = false;
        });
        
        $scope.levelPage = function (n) {
            if (($scope.arrNumberOrLockHard[n - 1].lock == false)) {
                $rootScope.loadingShow = true;
                dataStorage.levelNumber = n;
                location.href = "#/app/hardPlay";
            }
        }
        $scope.back = function () {
            $rootScope.loadingShow = true;
            location.href = "#/app/complexity";
        }*/
        $scope.$on('$ionicView.enter', function () {
            if ((localStorage.getItem("hardLevel") == undefined) || (localStorage.getItem("hardLevel") == null)) {
                localStorage.setItem("hardLevel", 1);
                localStorage.setItem("timerHardStart", 45)
                $scope.timerHardStart = parseInt(localStorage.getItem("timerHardStart"))
            }
            console.log(JSON.parse(localStorage.getItem("starArrHard")))

            $scope.nums = [];
            $scope.arrNumberOrLockHard = [];
            dataStorage.timerHard = []
            //$scope.timerEasyStart = 15;
            $scope.firstPlayFunc();
            var strArray = JSON.parse(localStorage.getItem("starArrHard"))
            var hardLavel = parseInt(localStorage.getItem("hardLevel")) - 1
            console.log(hardLavel)
            //$scope.timerEasyStart += 5;
            console.log(dataStorage.hardStar)
            console.log(hardLavel)
            if ((hardLavel != 0) && (dataStorage.hardStar != 0) && (dataStorage.hardStar != undefined)) {
                $scope.timerHardStart = parseInt(localStorage.getItem("timerHardStart"));
                for (var j = 1; j <= $rootScope.levelCount; j++) {
                    dataStorage.timerHard.push({ 'idTimer': j, 'timer': $scope.timerHardStart })
                    if (j == hardLavel) {
                        console.log(dataStorage.hardStar)
                        if (dataStorage.hardStar != undefined) {
                            switch (dataStorage.hardStar) {
                                case 1:
                                   // console.log(JSON.parse(localStorage.getItem("starArrHard"))[j - 1])
                                    if (JSON.parse(localStorage.getItem("starArrHard"))[j - 1].showHardStar2 == true) {
                                        strArray[j - 1].showHardStar1 = false;
                                        strArray[j - 1].showHardStar2 = true;
                                        strArray[j - 1].showHardStar3 = true;
                                        if (j != $rootScope.levelCount) {
                                            strArray[j].lock = false;
                                        }
                                        break;
                                    }
                                case 2:
                                    //console.log(JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar2)
                                    if (JSON.parse(localStorage.getItem("starArrHard"))[j - 1].showHardStar3 == true) {
                                        strArray[j - 1].showHardStar1 = false;
                                        strArray[j - 1].showHardStar2 = false;
                                        strArray[j - 1].showHardStar3 = true;
                                        if (j != $rootScope.levelCount) {
                                            strArray[j].lock = false;
                                        }
                                    }

                                    break;
                                case 3:
                                    strArray[j - 1].showHardStar1 = false;
                                    strArray[j - 1].showHardStar2 = false;
                                    strArray[j - 1].showHardStar3 = false;
                                    if (j != $rootScope.levelCount) {
                                        strArray[j].lock = false;
                                    }
                                    break;
                                default:
                                    strArray[j - 1].showHardStar1 = true;
                                    strArray[j - 1].showHardStar2 = true;
                                    strArray[j - 1].showHardStar3 = true;
                                    if (j != $rootScope.levelCount) {
                                        strArray[j].lock = true;
                                    }
                                    break;
                            }
                        }
                        localStorage.removeItem('starArrHard')
                        console.log(strArray)
                        localStorage.setItem("starArrHard", JSON.stringify(strArray))
                        $scope.arrNumberOrLockHard = strArray
                        console.log(JSON.parse(localStorage.getItem("starArrHard")))
                        console.log(j)
                        console.log($scope.arrNumberOrLockHard)
                        if (j == $rootScope.levelCount) {
                            $scope.arrNumberOrLockHard[j-1].showHardStar1 = JSON.parse(localStorage.getItem("starArrHard"))[j-1].showHardStar1
                            $scope.arrNumberOrLockHard[j-1].showHardStar2 = JSON.parse(localStorage.getItem("starArrHard"))[j-1].showHardStar2
                            $scope.arrNumberOrLockHard[j-1].showHardStar3 = JSON.parse(localStorage.getItem("starArrHard"))[j-1].showHardStar3
                        } else {
                            $scope.arrNumberOrLockHard[j].showHardStar1 = JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar1
                            $scope.arrNumberOrLockHard[j].showHardStar2 = JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar2
                            $scope.arrNumberOrLockHard[j].showHardStar3 = JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar3
                        }
                        
                    }

                }
            } else if ((dataStorage.hardStar == 0) || (dataStorage.hardStar == undefined)) {
                $scope.arrNumberOrLockHard = strArray
                for (var j = 0; j < $rootScope.levelCount; j++) {
                    dataStorage.timerHard.push({ 'idTimer': j, 'timer': $scope.timerHardStart })
                    $scope.arrNumberOrLockHard[j].showHardStar1 = JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar1
                    $scope.arrNumberOrLockHard[j].showHardStar2 = JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar2
                    $scope.arrNumberOrLockHard[j].showHardStar3 = JSON.parse(localStorage.getItem("starArrHard"))[j].showHardStar3
                }
            }
            $rootScope.loadingShow = false;
            $scope.$apply();
        });

        $scope.firstPlayFunc = function () {
            //$scope.timerEasyStart += 5;
            if ((JSON.parse(localStorage.getItem("starArrHard")) == undefined) || (JSON.parse(localStorage.getItem("starArrHard")) == null)) {
                for (var i = 1; i <= $rootScope.levelCount; i++) {
                    $scope.showHardStar1 = true;
                    $scope.showHardStar2 = true;
                    $scope.showHardStar3 = true;
                    dataStorage.timerHard.push({ 'idTimer': i, 'timer': $scope.timerHardStart })
                    console.log(localStorage.getItem("hardLevel"))
                    if (i <= parseInt(localStorage.getItem("hardLevel"))) {
                        $scope.arrNumberOrLockHard.push({ 'number': i, 'showHardStar1': $scope.showHardStar1, 'showHardStar2': $scope.showHardStar2, 'showHardStar3': $scope.showHardStar3, 'lock': false });
                    } else {
                        $scope.arrNumberOrLockHard.push({ 'number': i, 'showHardStar1': $scope.showHardStar1, 'showHardStar2': $scope.showHardStar2, 'showHardStar3': $scope.showHardStar3, 'lock': true });
                    }
                    $scope.nums.push(i)
                }
                localStorage.setItem("starArrHard", JSON.stringify($scope.arrNumberOrLockHard))
            }

        }
        $scope.levelPage = function (n) {
            console.log(n)
            
            if (($scope.arrNumberOrLockHard[n - 1].lock == false)) {
                AudioService.cardOpen();
                localStorage.setItem("timerHardStart", localStorage.getItem("timerHardStart"))
               // localStorage.setItem("timerHardStart", $scope.timerHardStart)
                $rootScope.loadingShow = true;
                dataStorage.levelNumber = n;
                location.href = "#/app/hardPlay";
            }
        }
        $scope.back = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            location.href = "#/app/complexity";
        }
    }])
})();