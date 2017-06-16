(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("hardPlayCtrl", ["$scope", "$rootScope", "dataStorage", "$timeout", "$state", "AudioService", "$cordovaSocialSharing",
        function ($scope, $rootScope, dataStorage, $timeout, $state, AudioService, $cordovaSocialSharing) {
        $scope.$on('$ionicView.enter', function () {
            
            if (!dataStorage.myImageBoolean) {
                $scope.preview = "images/play/" + dataStorage.levelNumber + "/preview.jpg";
            }
            $scope.timeFin = false
            $scope.previewImg = true;
            if ($scope.previewImg) {
                $scope.count = 4;
                //$scope.previewImg = false
                countdownnull();
            }
            function countdownnull() {
                console.log($scope.defTimerTimer)

                if ($scope.count === 0) {
                    $scope.previewImg = false;
                } else {
                    $scope.count = --$scope.count;
                    dataStorage.tt = setTimeout(countdownnull, 1000);
                }
                $scope.$apply();
            }
            $scope.oneFinishNum = 0;
            $scope.twoFinishNum = 0;
            $scope.threeFinishNum = 0;
            $scope.fourFinishNum = 0;
            $scope.fiveFinishNum = 0;
            $scope.sixFinishNum = 0;
            $scope.sevenFinishNum = 0;
            $scope.eightFinishNum = 0;
            $scope.nineFinishNum = 0;
            if (!dataStorage.myImageBoolean) {
                $scope.defTimerTimer = parseInt(localStorage.getItem("timerHardStart"))
            }
            if (dataStorage.myImageBoolean) {
                $scope.imagePlay = false;
            } else {
                $scope.imagePlay = true;
            }
            /*if (dataStorage.levelNumber <= 9) {
                $scope.numberImageDef = 14;
            } else if ((dataStorage.levelNumber > 9) && (dataStorage.levelNumber < 100)) {
                $scope.numberImageDef = 15;
            } else if ((dataStorage.levelNumber >= 100) && (dataStorage.levelNumber <= 999)) {
                $scope.numberImageDef = 16;
            }*/
            

            $scope.interim = "";
            function shuffle(array) {
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
            /*$scope.specularArr = [1, 1, 1, 1, -1, -1, -1, -1, -1];
            $scope.specularArr = shuffle($scope.specularArr);*/
            /* console.log($scope.specularArr);*/
            $scope.rotateArr = [0, 90, 180, 270, 0, 90, 180, 270, 90];
            $scope.rotateArr = shuffle($scope.rotateArr);
            console.log($scope.rotateArr);
            $scope.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            $scope.arr = shuffle($scope.arr);
            $scope.numberFinMatch = 0;
            if (!dataStorage.myImageBoolean) {
                $timeout(function () {
                    if ($(".oneImgHard").attr("alt") == $scope.arr[0]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".twoImgHard").attr("alt") == $scope.arr[1]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".threeImgHard").attr("alt") == $scope.arr[2]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".fourImgHard").attr("alt") == $scope.arr[3]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".fiveImgHard").attr("alt") == $scope.arr[4]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".sixImgHard").attr("alt") == $scope.arr[5]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".sevenImgHard").attr("alt") == $scope.arr[6]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".eightImgHard").attr("alt") == $scope.arr[7]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".nineImgHard").attr("alt") == $scope.arr[8]) {
                        $scope.numberFinMatch += 1;
                    }
                    
                    $scope.one = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[0] + ".jpg";
                    $(".oneImgHard").css("transform", "rotate(" + $scope.rotateArr[0] + "deg)");
                    $scope.two = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[1] + ".jpg";
                    $(".twoImgHard").css("transform", "rotate(" + $scope.rotateArr[1] + "deg)");
                    $scope.three = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[2] + ".jpg";
                    $(".threeImgHard").css("transform", "rotate(" + $scope.rotateArr[2] + "deg)");
                    $scope.four = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[3] + ".jpg";
                    $(".fourImgHard").css("transform", "rotate(" + $scope.rotateArr[3] + "deg)");
                    $scope.five = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[4] + ".jpg";
                    $(".fiveImgHard").css("transform", "rotate(" + $scope.rotateArr[4] + "deg)");
                    $scope.six = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[5] + ".jpg";
                    $(".sixImgHard").css("transform", "rotate(" + $scope.rotateArr[5] + "deg)");
                    $scope.seven = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[6] + ".jpg";
                    $(".sevenImgHard").css("transform", "rotate(" + $scope.rotateArr[6] + "deg)");
                    $scope.eight = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[7] + ".jpg";
                    $(".eightImgHard").css("transform", "rotate(" + $scope.rotateArr[7] + "deg)");
                    $scope.nine = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[8] + ".jpg";
                    $(".nineImgHard").css("transform", "rotate(" + $scope.rotateArr[8] + "deg)");
                }, 100);
            }
            if (dataStorage.myImageBoolean) {
                $scope.picOriginal = dataStorage.pic;
                $scope.$apply();
                $scope.preview = dataStorage.pic;
                var orgImgHard = $('#orgImg').get(0);
                var canvas = document.createElement("canvas");
                canvas.width = orgImgHard.width;
                canvas.height = orgImgHard.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(orgImgHard, 0, 0);
                var imageData = [];
                var canvasD = [];
                var ctxD = [];
                var dstImgD = [];
                for (var i = 1; i <= 9; i++) {
                    if (i <= 3) {
                        imageData["imageData" + i] = ctx.getImageData((i - 1) * 100, 0, 100, 100);
                    } else if ((i > 3) && (i <= 6)) {
                        imageData["imageData" + i] = ctx.getImageData((i - 4) * 100, 100, 100, 100);
                    } else if ((i > 6) && (i <= 9)) {
                        imageData["imageData" + i] = ctx.getImageData((i - 7) * 100, 200, 100, 100);
                    }
                    canvasD["canvas" + i] = document.createElement("canvas");
                    canvasD["canvas" + i].width = 100;
                    canvasD["canvas" + i].height = 100;
                    ctxD["ctx" + i] = canvasD["canvas" + i].getContext("2d");
                    ctxD["ctx" + i].rect(0, 0, 0, 0);
                    ctxD["ctx" + i].fillStyle = 'white';
                    ctxD["ctx" + i].fill();
                    ctxD["ctx" + i].putImageData(imageData["imageData" + i], 0, 0);
                    dstImgD["dstImg" + i] = $('#newImg' + i).get(0);
                    dstImgD["dstImg" + i].src = canvasD["canvas" + i].toDataURL("image/png");
                    $scope.$apply();
                }
                $scope.arrMyImage = [{ 'src': dstImgD["dstImg1"].src, 'atr': 1 }, { 'src': dstImgD["dstImg2"].src, 'atr': 2 },
                    { 'src': dstImgD["dstImg3"].src, 'atr': 3 },
                       { 'src': dstImgD["dstImg4"].src, 'atr': 4 }, { 'src': dstImgD["dstImg5"].src, 'atr': 5 },
                       { 'src': dstImgD["dstImg6"].src, 'atr': 6 }, { 'src': dstImgD["dstImg7"].src, 'atr': 7 },
                       { 'src': dstImgD["dstImg8"].src, 'atr': 8 }, { 'src': dstImgD["dstImg9"].src, 'atr': 9 }];

                $scope.arrMyImage = shuffle($scope.arrMyImage);
                $scope.$apply();
                $scope.one = $scope.arrMyImage[0].src;
                $scope.two = $scope.arrMyImage[1].src;
                $scope.three = $scope.arrMyImage[2].src;
                $scope.four = $scope.arrMyImage[3].src;
                $scope.five = $scope.arrMyImage[4].src;
                $scope.six = $scope.arrMyImage[5].src;
                $scope.seven = $scope.arrMyImage[6].src;
                $scope.eight = $scope.arrMyImage[7].src;
                $scope.nine = $scope.arrMyImage[8].src;

                $scope.oneAtr = $scope.arrMyImage[0].atr;
                $scope.twoAtr = $scope.arrMyImage[1].atr;
                $scope.threeAtr = $scope.arrMyImage[2].atr;
                $scope.fourAtr = $scope.arrMyImage[3].atr;
                $scope.fiveAtr = $scope.arrMyImage[4].atr;
                $scope.sixAtr = $scope.arrMyImage[5].atr;
                $scope.sevenAtr = $scope.arrMyImage[6].atr;
                $scope.eightAtr = $scope.arrMyImage[7].atr;
                $scope.nineAtr = $scope.arrMyImage[8].atr;
                $(".oneImgHard").css("transform", "rotate(" + $scope.rotateArr[0] + "deg)");
                $(".twoImgHard").css("transform", "rotate(" + $scope.rotateArr[1] + "deg)");
                $(".threeImgHard").css("transform", "rotate(" + $scope.rotateArr[2] + "deg)");
                $(".fourImgHard").css("transform", "rotate(" + $scope.rotateArr[3] + "deg)");
                $(".fiveImgHard").css("transform", "rotate(" + $scope.rotateArr[4] + "deg)");
                $(".sixImgHard").css("transform", "rotate(" + $scope.rotateArr[5] + "deg)");
                $(".sevenImgHard").css("transform", "rotate(" + $scope.rotateArr[6] + "deg)");
                $(".eightImgHard").css("transform", "rotate(" + $scope.rotateArr[7] + "deg)");
                $(".nineImgHard").css("transform", "rotate(" + $scope.rotateArr[8] + "deg)");
                console.log($scope.arrMyImage)
                if (($(".oneImgHard").attr("alt") == $scope.arrMyImage[0].atr) ) {
                    console.log("1=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".twoImgHard").attr("alt") == $scope.arrMyImage[1].atr)) {
                    console.log("2=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".threeImgHard").attr("alt") == $scope.arrMyImage[2].atr)) {
                    console.log("3=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".fourImgHard").attr("alt") == $scope.arrMyImage[3].atr)) {
                    console.log("4=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".fiveImgHard").attr("alt") == $scope.arrMyImage[4].atr)) {
                    console.log("5=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".sixImgHard").attr("alt") == $scope.arrMyImage[5].atr)) {
                    console.log("6=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".sevenImgHard").attr("alt") == $scope.arrMyImage[6].atr)) {
                    console.log("7=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".eightImgHard").attr("alt") == $scope.arrMyImage[7].atr)) {
                    console.log("8=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".nineImgHard").attr("alt") == $scope.arrMyImage[8].atr)) {
                    console.log("9=")
                    $scope.numberFinMatch += 1;
                }
                console.log($scope.numberFinMatch)
                $scope.$apply();
            } 
            
            
            $scope.oneBool = false;
            $scope.twoBool = false;
            $scope.threeBool = false;
            $scope.fourBool = false;
            $scope.fiveBool = false;
            $scope.sixBool = false;
            $scope.sevenBool = false;
            $scope.eightBool = false;
            $scope.nineBool = false;
            $scope.num = 0;
            $rootScope.loadingShow = false;
            $timeout(function () { $scope.previewImg = false; }, 3000);
            if (!dataStorage.myImageBoolean) {
                $timeout(function () {
                    if ($scope.previewImg == false) {
                        dataStorage.t;
                        
                        console.log(dataStorage.timerHard)
                        for (var j = 0; j < $rootScope.levelCount; j++) {
                            if (dataStorage.timerHard[j].idTimer == dataStorage.levelNumber) {
                                //$scope.timerHardStart = dataStorage.timerHard[j].timer;
                                $scope.timerHardStart = localStorage.getItem("timerHardStart");
                                //$scope.starTimerHardStart = dataStorage.timerHard[j].timer
                                $scope.starTimerHardStart = localStorage.getItem("timerHardStart");
                                countdown();
                            }
                        }
                    }
                }, 3001);
            }
            $scope.$apply();
        });

        function countdown() {
            console.log($scope.defTimerTimer)
            if ($scope.defTimerTimer == 0) {
                $timeout(function () {
                    $scope.timeFin = true;
                }, 1000);
            } else {
                $scope.timeFin = false;
            }
            if ($scope.timerHardStart <= 6) {
                $(".timerGame").attr("id", "gameTimerRed");
            } else {
                $(".timerGame").removeAttr("id")
            }
            if ($scope.timerHardStart === 0) {
                $scope.timeFin = true;
                // time is up
            } else {
                $scope.defTimerTimer = --$scope.timerHardStart;
                dataStorage.t = setTimeout(countdown, 1000);
            }
            $scope.$apply();
        }
        $scope.oneFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".oneImgHard").attr("alt")) == parseInt($scope.one.split("/")[3].split(".")[0])) && ($scope.oneFinishNum < 1)) {
                    $scope.oneFinishNum += 1;
                    $scope.numberFinMatch += $scope.oneFinishNum;
                } else if ((parseInt($(".oneImgHard").attr("alt")) != parseInt($scope.one.split("/")[3].split(".")[0])) && ($scope.oneFinishNum >= 1)) {
                    $scope.oneFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".oneImgHard").attr("alt")) == $scope.oneAtr) && ($scope.oneFinishNum < 1)) {
                    $scope.oneFinishNum += 1;
                    $scope.numberFinMatch += $scope.oneFinishNum;
                } else if ((parseInt($(".oneImgHard").attr("alt")) != $scope.oneAtr) && ($scope.oneFinishNum >= 1)) {
                    $scope.oneFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.twoFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".twoImgHard").attr("alt")) == parseInt($scope.two.split("/")[3].split(".")[0])) && ($scope.twoFinishNum < 1)) {
                    $scope.twoFinishNum += 1;
                    $scope.numberFinMatch += $scope.twoFinishNum;
                } else if ((parseInt($(".twoImgHard").attr("alt")) != parseInt($scope.two.split("/")[3].split(".")[0])) && ($scope.twoFinishNum >= 1)) {
                    $scope.twoFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".twoImgHard").attr("alt")) == $scope.twoAtr) && ($scope.twoFinishNum < 1)) {
                    $scope.twoFinishNum += 1;
                    $scope.numberFinMatch += $scope.twoFinishNum;
                } else if ((parseInt($(".twoImgHard").attr("alt")) != $scope.twoAtr) && ($scope.twoFinishNum >= 1)) {
                    $scope.twoFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.threeFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".threeImgHard").attr("alt")) == parseInt($scope.three.split("/")[3].split(".")[0])) && ($scope.threeFinishNum < 1)) {
                    $scope.threeFinishNum += 1;
                    $scope.numberFinMatch += $scope.threeFinishNum;
                } else if ((parseInt($(".threeImgHard").attr("alt")) != parseInt($scope.three.split("/")[3].split(".")[0])) && ($scope.threeFinishNum >= 1)) {
                    $scope.threeFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".threeImgHard").attr("alt")) == $scope.threeAtr) && ($scope.threeFinishNum < 1)) {
                    $scope.threeFinishNum += 1;
                    $scope.numberFinMatch += $scope.threeFinishNum;
                } else if ((parseInt($(".threeImgHard").attr("alt")) != $scope.threeAtr) && ($scope.threeFinishNum >= 1)) {
                    $scope.threeFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.fourFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".fourImgHard").attr("alt")) == parseInt($scope.four.split("/")[3].split(".")[0])) && ($scope.fourFinishNum < 1)) {
                    $scope.fourFinishNum += 1;
                    $scope.numberFinMatch += $scope.fourFinishNum;
                } else if ((parseInt($(".fourImgHard").attr("alt")) != parseInt($scope.four.split("/")[3].split(".")[0])) && ($scope.fourFinishNum >= 1)) {
                    $scope.fourFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".fourImgHard").attr("alt")) == $scope.fourAtr) && ($scope.fourFinishNum < 1)) {
                    $scope.fourFinishNum += 1;
                    $scope.numberFinMatch += $scope.fourFinishNum;
                } else if ((parseInt($(".fourImgHard").attr("alt")) != $scope.fourAtr) && ($scope.fourFinishNum >= 1)) {
                    $scope.fourFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.fiveFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".fiveImgHard").attr("alt")) == parseInt($scope.five.split("/")[3].split(".")[0])) && ($scope.fiveFinishNum < 1)) {
                    $scope.fiveFinishNum += 1;
                    $scope.numberFinMatch += $scope.fiveFinishNum;
                } else if ((parseInt($(".fiveImgHard").attr("alt")) != parseInt($scope.five.split("/")[3].split(".")[0])) && ($scope.fiveFinishNum >= 1)) {
                    $scope.fiveFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".fiveImgHard").attr("alt")) == $scope.fiveAtr) && ($scope.fiveFinishNum < 1)) {
                    $scope.fiveFinishNum += 1;
                    $scope.numberFinMatch += $scope.fiveFinishNum;
                } else if ((parseInt($(".fiveImgHard").attr("alt")) != $scope.fiveAtr) && ($scope.fiveFinishNum >= 1)) {
                    $scope.fiveFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.sixFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".sixImgHard").attr("alt")) == parseInt($scope.six.split("/")[3].split(".")[0])) && ($scope.sixFinishNum < 1)) {
                    $scope.sixFinishNum += 1;
                    $scope.numberFinMatch += $scope.sixFinishNum;
                } else if ((parseInt($(".sixImgHard").attr("alt")) != parseInt($scope.six.split("/")[3].split(".")[0])) && ($scope.sixFinishNum >= 1)) {
                    $scope.sixFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".sixImgHard").attr("alt")) == $scope.sixAtr) && ($scope.sixFinishNum < 1)) {
                    $scope.sixFinishNum += 1;
                    $scope.numberFinMatch += $scope.sixFinishNum;
                } else if ((parseInt($(".sixImgHard").attr("alt")) != $scope.sixAtr) && ($scope.sixFinishNum >= 1)) {
                    $scope.sixFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.sevenFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".sevenImgHard").attr("alt")) == parseInt($scope.seven.split("/")[3].split(".")[0])) && ($scope.sevenFinishNum < 1)) {
                    $scope.sevenFinishNum += 1;
                    $scope.numberFinMatch += $scope.sevenFinishNum;
                } else if ((parseInt($(".sevenImgHard").attr("alt")) != parseInt($scope.seven.split("/")[3].split(".")[0])) && ($scope.sevenFinishNum >= 1)) {
                    $scope.sevenFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".sevenImgHard").attr("alt")) == $scope.sevenAtr) && ($scope.sevenFinishNum < 1)) {
                    $scope.sevenFinishNum += 1;
                    $scope.numberFinMatch += $scope.sevenFinishNum;
                } else if ((parseInt($(".sevenImgHard").attr("alt")) != $scope.sevenAtr) && ($scope.sevenFinishNum >= 1)) {
                    $scope.sevenFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.eightFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".eightImgHard").attr("alt")) == parseInt($scope.eight.split("/")[3].split(".")[0])) && ($scope.eightFinishNum < 1)) {
                    $scope.eightFinishNum += 1;
                    $scope.numberFinMatch += $scope.eightFinishNum;
                } else if ((parseInt($(".eightImgHard").attr("alt")) != parseInt($scope.eight.split("/")[3].split(".")[0])) && ($scope.eightFinishNum >= 1)) {
                    $scope.eightFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".eightImgHard").attr("alt")) == $scope.eightAtr) && ($scope.eightFinishNum < 1)) {
                    $scope.eightFinishNum += 1;
                    $scope.numberFinMatch += $scope.eightFinishNum;
                } else if ((parseInt($(".eightImgHard").attr("alt")) != $scope.eightAtr) && ($scope.eightFinishNum >= 1)) {
                    $scope.eightFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.nineFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".nineImgHard").attr("alt")) == parseInt($scope.nine.split("/")[3].split(".")[0])) && ($scope.nineFinishNum < 1)) {
                    $scope.nineFinishNum += 1;
                    $scope.numberFinMatch += $scope.nineFinishNum;
                } else if ((parseInt($(".nineImgHard").attr("alt")) != parseInt($scope.nine.split("/")[3].split(".")[0])) && ($scope.nineFinishNum >= 1)) {
                    $scope.nineFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".nineImgHard").attr("alt")) == $scope.nineAtr) && ($scope.nineFinishNum < 1)) {
                    $scope.nineFinishNum += 1;
                    $scope.numberFinMatch += $scope.nineFinishNum;
                } else if ((parseInt($(".nineImgHard").attr("alt")) != $scope.nineAtr) && ($scope.nineFinishNum >= 1)) {
                    $scope.nineFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            console.log($scope.numberFinMatch)
        }
        $scope.oneImg = function () {
            if (dataStorage.boolianHardTwo || dataStorage.boolianHardThree || dataStorage.boolianHardFour
                || dataStorage.boolianHardFive || dataStorage.boolianHardSix || dataStorage.boolianHardSeven 
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false;
                dataStorage.boolianHardFive = false
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotOne = 0;
            } else if (($(".oneImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".oneImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotOne = 90;
            } else if (($(".oneImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".oneImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotOne = 180;
            } else if (($(".oneImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".oneImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotOne = 270;
            }
            if (!$scope.oneBool) {
                $scope.oneBool = true;
                $(".oneImgHard").css("opacity", "0.3");

                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.two:
                            $scope.two = $scope.one;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.twoAtr = $scope.oneAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.one;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.threeAtr = $scope.oneAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.one;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.fourAtr = $scope.oneAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.one;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.fiveAtr = $scope.oneAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.one;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.sixAtr = $scope.oneAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.one;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.sevenAtr = $scope.oneAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.one;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.eightAtr = $scope.oneAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.one;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotOne + "deg)");
                            $scope.nineAtr = $scope.oneAtr;
                            $scope.nineFinishNumFunc();
                    }

                    $scope.one = $scope.interim;
                    $scope.oneAtr = $scope.interimAtr;
                    $(".oneImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.oneFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.one;
                $scope.interimAtr = $scope.oneAtr;
                if ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".oneImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".oneImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".oneImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".oneImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".oneImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".oneImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.oneBool = false;
                $(".oneImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.twoImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardThree || dataStorage.boolianHardFour
                || dataStorage.boolianHardFive || dataStorage.boolianHardSix || dataStorage.boolianHardSeven
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false;
                dataStorage.boolianHardFive = false
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotTwo = 0;
            } else if (($(".twoImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".twoImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotTwo = 90;
            } else if (($(".twoImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".twoImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotTwo = 180;
            } else if (($(".twoImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".twoImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotTwo = 270;
            }
            if (!$scope.twoBool) {
                $scope.twoBool = true;
                $(".twoImgHard").css("opacity", "0.3");

                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.two;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.oneAtr = $scope.twoAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.two;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.threeAtr = $scope.twoAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.two;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.fourAtr = $scope.twoAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.two;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.fiveAtr = $scope.twoAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.two;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.sixAtr = $scope.twoAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.two;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.sevenAtr = $scope.twoAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.two;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.eightAtr = $scope.twoAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.two;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotTwo + "deg)");
                            $scope.nineAtr = $scope.twoAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.two = $scope.interim;
                    $scope.twoAtr = $scope.interimAtr;
                    $(".twoImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.twoFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.two;
                $scope.interimAtr = $scope.twoAtr;
                if ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".twoImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".twoImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".twoImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".twoImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".twoImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".twoImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.twoBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.threeImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardFour
                || dataStorage.boolianHardFive || dataStorage.boolianHardSix || dataStorage.boolianHardSeven
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardFour = false;
                dataStorage.boolianHardFive = false
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotThree = 0;
            } else if (($(".threeImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".threeImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotThree = 90;
            } else if (($(".threeImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".threeImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotThree = 180;
            } else if (($(".threeImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".threeImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotThree = 270;
            }
            if (!$scope.threeBool) {
                $scope.threeBool = true;
                $(".threeImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.three;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.oneAtr = $scope.threeAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.three;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.twoAtr = $scope.threeAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.three;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.fourAtr = $scope.threeAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.three;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.fiveAtr = $scope.threeAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.three;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.sixAtr = $scope.threeAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.three;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.sevenAtr = $scope.threeAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.three;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.eightAtr = $scope.threeAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.three;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotThree + "deg)");
                            $scope.nineAtr = $scope.threeAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.three = $scope.interim;
                    $scope.threeAtr = $scope.interimAtr;
                    $(".threeImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.threeFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.three;
                $scope.interimAtr = $scope.threeAtr;
                if ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".threeImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".threeImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".threeImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".threeImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".threeImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".threeImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.threeBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.fourImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardThree
                || dataStorage.boolianHardFive || dataStorage.boolianHardSix || dataStorage.boolianHardSeven
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFive = false
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotFour = 0;
            } else if (($(".fourImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".fourImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotFour = 90;
            } else if (($(".fourImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".fourImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotFour = 180;
            } else if (($(".fourImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".fourImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotFour = 270;
            }
            if (!$scope.fourBool) {
                $scope.fourBool = true;
                $(".fourImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.four;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.oneAtr = $scope.fourAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.four;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.twoAtr = $scope.fourAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.four;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.threeAtr = $scope.fourAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.four;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.fiveAtr = $scope.fourAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.four;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.sixAtr = $scope.fourAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.four;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.sevenAtr = $scope.fourAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.four;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.eightAtr = $scope.fourAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.four;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotFour + "deg)");
                            $scope.nineAtr = $scope.fourAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.four = $scope.interim;
                    $scope.fourAtr = $scope.interimAtr;
                    $(".fourImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.fourFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.four;
                $scope.interimAtr = $scope.fourAtr;
                if ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".fourImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".fourImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".fourImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".fourImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".fourImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".fourImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.fourBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.fiveImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardThree
                || dataStorage.boolianHardFour || dataStorage.boolianHardSix || dataStorage.boolianHardSeven
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotFive = 0;
            } else if (($(".fiveImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".fiveImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotFive = 90;
            } else if (($(".fiveImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".fiveImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotFive = 180;
            } else if (($(".fiveImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".fiveImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotFive = 270;
            }
            if (!$scope.fiveBool) {
                $scope.fiveBool = true;
                $(".fiveImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.five;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.oneAtr = $scope.fiveAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.five;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.twoAtr = $scope.fiveAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.five;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.threeAtr = $scope.fiveAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.five;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.fourAtr = $scope.fiveAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.five;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.sixAtr = $scope.fiveAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.five;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.sevenAtr = $scope.fiveAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.five;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.eightAtr = $scope.fiveAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.five;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotFive + "deg)");
                            $scope.nineAtr = $scope.fiveAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.five = $scope.interim;
                    $scope.fiveAtr = $scope.interimAtr;
                    $(".fiveImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.fiveFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.five;
                $scope.interimAtr = $scope.fiveAtr;
                if ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".fiveImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".fiveImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".fiveImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".fiveImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".fiveImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".fiveImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.fiveBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.sixImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardThree
                || dataStorage.boolianHardFour || dataStorage.boolianHardFive || dataStorage.boolianHardSeven
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false
                dataStorage.boolianHardFive = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotSix = 0;
            } else if (($(".sixImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".sixImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotSix = 90;
            } else if (($(".sixImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".sixImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotSix = 180;
            } else if (($(".sixImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".sixImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotSix = 270;
            }
            if (!$scope.sixBool) {
                $scope.sixBool = true;
                $(".sixImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.six;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.oneAtr = $scope.sixAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.six;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.twoAtr = $scope.sixAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.six;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.threeAtr = $scope.sixAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.six;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.fourAtr = $scope.sixAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.six;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.fiveAtr = $scope.sixAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.six;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.sevenAtr = $scope.sixAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.six;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.eightAtr = $scope.sixAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.six;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotSix + "deg)");
                            $scope.nineAtr = $scope.sixAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.six = $scope.interim;
                    $scope.sixAtr = $scope.interimAtr;
                    $(".sixImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.sixFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.six;
                $scope.interimAtr = $scope.sixAtr;
                if ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".sixImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".sixImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".sixImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".sixImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".sixImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".sixImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.sixBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.sevenImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardThree
                || dataStorage.boolianHardFour || dataStorage.boolianHardFive || dataStorage.boolianHardSix
                || dataStorage.boolianHardEight || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false
                dataStorage.boolianHardFive = false;
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardEight = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotSeven = 0;
            } else if (($(".sevenImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".sevenImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotSeven = 90;
            } else if (($(".sevenImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".sevenImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotSeven = 180;
            } else if (($(".sevenImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".sevenImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotSeven = 270;
            }
            if (!$scope.sevenBool) {
                $scope.sevenBool = true;
                $(".sevenImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.seven;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.oneAtr = $scope.sevenAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.seven;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.twoAtr = $scope.sevenAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.seven;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.threeAtr = $scope.sevenAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.seven;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.fourAtr = $scope.sevenAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.seven;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.fiveAtr = $scope.sevenAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.seven;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.sixAtr = $scope.sevenAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.seven;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.eightAtr = $scope.sevenAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.seven;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotSeven + "deg)");
                            $scope.nineAtr = $scope.sevenAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.seven = $scope.interim;
                    $scope.sevenAtr = $scope.interimAtr;
                    $(".sevenImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.sevenFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.seven;
                $scope.interimAtr = $scope.sevenAtr;
                if ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".sevenImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".sevenImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".sevenImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".sevenImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".sevenImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".sevenImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.sevenBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.eightImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardThree
                || dataStorage.boolianHardFour || dataStorage.boolianHardFive || dataStorage.boolianHardSix
                || dataStorage.boolianHardSeven || dataStorage.boolianHardNine) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.nineBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false
                dataStorage.boolianHardFive = false;
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardNine = false;
            }
            if ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotEight = 0;
            } else if (($(".eightImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".eightImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotEight = 90;
            } else if (($(".eightImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".eightImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotEight = 180;
            } else if (($(".eightImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".eightImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotEight = 270;
            }
            if (!$scope.eightBool) {
                $scope.eightBool = true;
                $(".eightImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.eight;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.oneAtr = $scope.eightAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.eight;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.twoAtr = $scope.eightAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.eight;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.threeAtr = $scope.eightAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.eight;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.fourAtr = $scope.eightAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.eight;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.fiveAtr = $scope.eightAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.eight;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.sixAtr = $scope.eightAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.eight;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.sevenAtr = $scope.eightAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.eight;
                            $(".nineImgHard").css("transform", "rotate(" + $scope.rotEight + "deg)");
                            $scope.nineAtr = $scope.eightAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.eight = $scope.interim;
                    $scope.eightAtr = $scope.interimAtr;
                    $(".eightImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.eightFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.eight;
                $scope.interimAtr = $scope.eightAtr;
                if ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".eightImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".eightImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".eightImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".eightImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".eightImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".eightImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.eightBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.nineImg = function () {
            if (dataStorage.boolianHardOne || dataStorage.boolianHardTwo || dataStorage.boolianHardThree
                || dataStorage.boolianHardFour || dataStorage.boolianHardFive || dataStorage.boolianHardSix
                || dataStorage.boolianHardSeven || dataStorage.boolianHardEight) {
                $scope.num = 0;
                $(".oneImgHard").css("opacity", "1");
                $scope.oneBool = false;
                $(".twoImgHard").css("opacity", "1");
                $scope.twoBool = false;
                $(".threeImgHard").css("opacity", "1");
                $scope.threeBool = false;
                $(".fourImgHard").css("opacity", "1");
                $scope.fourBool = false;
                $(".fiveImgHard").css("opacity", "1");
                $scope.fiveBool = false;
                $(".sixImgHard").css("opacity", "1");
                $scope.sixBool = false;
                $(".sevenImgHard").css("opacity", "1");
                $scope.sevenBool = false;
                $(".eightImgHard").css("opacity", "1");
                $scope.eightBool = false;
                dataStorage.boolianHardOne = false;
                dataStorage.boolianHardTwo = false;
                dataStorage.boolianHardThree = false;
                dataStorage.boolianHardFour = false
                dataStorage.boolianHardFive = false;
                dataStorage.boolianHardSix = false;
                dataStorage.boolianHardSeven = false;
                dataStorage.boolianHardEight = false;
            }
            if ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                $scope.rotNine = 0;
            } else if (($(".nineImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".nineImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                $scope.rotNine = 90;
            } else if (($(".nineImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".nineImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                $scope.rotNine = 180;
            } else if (($(".nineImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".nineImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                $scope.rotNine = 270;
            }
            if (!$scope.nineBool) {
                $scope.nineBool = true;
                $(".nineImgHard").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.nine;
                            $(".oneImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.oneAtr = $scope.nineAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.nine;
                            $(".twoImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.twoAtr = $scope.nineAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.nine;
                            $(".threeImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.threeAtr = $scope.nineAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.nine;
                            $(".fourImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.fourAtr = $scope.nineAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.nine;
                            $(".fiveImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.fiveAtr = $scope.nineAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.nine;
                            $(".sixImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.sixAtr = $scope.nineAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.nine;
                            $(".sevenImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.sevenAtr = $scope.nineAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.nine;
                            $(".eightImgHard").css("transform", "rotate(" + $scope.rotNine + "deg)");
                            $scope.eightAtr = $scope.nineAtr;
                            $scope.eightFinishNumFunc();
                    }
                    $scope.nine = $scope.interim;
                    $scope.nineAtr = $scope.interimAtr;
                    $(".nineImgHard").css("transform", "rotate(" + $scope.interRot + "deg)");
                    $scope.nineFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerHardStart)
                            $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                            console.log($scope.speedsPercent)
                            $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                            console.log($scope.star)
                            if (($scope.star > 0) && ($scope.star < 1)) {
                                $scope.star = Math.ceil($scope.star)
                                $scope.goodDiv = true;
                            } else if ($scope.star > 1) {
                                $scope.star = Math.round($scope.star);
                                $scope.goodDiv = true;
                            }
                            if ($scope.timerHardStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.hardStar = $scope.star;
                        }
                        
                    }
                    $scope.num = 0;
                    $scope.oneBool = false;
                    $scope.twoBool = false;
                    $scope.threeBool = false;
                    $scope.fourBool = false;
                    $scope.fiveBool = false;
                    $scope.sixBool = false;
                    $scope.sevenBool = false;
                    $scope.eightBool = false;
                    $scope.nineBool = false;
                    $(".oneImgHard").css("opacity", "1");
                    $(".twoImgHard").css("opacity", "1");
                    $(".threeImgHard").css("opacity", "1");
                    $(".fourImgHard").css("opacity", "1");
                    $(".fiveImgHard").css("opacity", "1");
                    $(".sixImgHard").css("opacity", "1");
                    $(".sevenImgHard").css("opacity", "1");
                    $(".eightImgHard").css("opacity", "1");
                    $(".nineImgHard").css("opacity", "1");
                }
                $scope.interim = $scope.nine;
                $scope.interimAtr = $scope.nineAtr;
                if ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.interRot = 0;
                } else if (($(".nineImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".nineImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.interRot = 90;
                } else if (($(".nineImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".nineImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.interRot = 180;
                } else if (($(".nineImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".nineImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.interRot = 270;
                }
            } else {
                $scope.nineBool = false;
                $(".nineImgHard").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.interRot = null;
            }
        }
        $scope.reloadGame = function () {
            AudioService.cardOpen();
            $scope.timeFin = false;
            $scope.defTimerTimer = parseInt(localStorage.getItem("timerHardStart"))
            $state.reload();
        }
        $scope.next = function () {
            AudioService.cardOpen();
            if (!dataStorage.myImageBoolean) {
                if (dataStorage.levelNumber <= $rootScope.levelCount) {
                    dataStorage.levelNumber += 1;
                    $scope.timerHardStart = parseInt(localStorage.getItem("timerHardStart"))
                    $scope.timerHardStart += 5
                    localStorage.setItem("timerHardStart", $scope.timerHardStart)
                    location.href = "#/app/hardLevel";
                    localStorage.setItem("hardLevel", dataStorage.levelNumber);
                } else {
                    $rootScope.loadingShow = true;
                    location.href = "#/app/complexity";
                }

                $scope.numberFinMatch = 0;
                $scope.goodDiv = false;
                $scope.showClickCountHard = 0;
                $rootScope.loadingShow = true;
                $state.reload();
                
            } else {
                $rootScope.loadingShow = true;
                $scope.goodDiv = false;
                $('.picCamera').css({ "width": "80vw", "height": "80vw" });
                location.href = "#/app/defImgOrMyImg";
            }
            
        }
        $scope.rotate = function () {
            console.log($(".oneImgHard").css("transform") + "___" + $(".twoImgHard").css("transform") + "___" + $(".threeImgHard").css("transform")
                + "___" + $(".fourImgHard").css("transform") + "___" + $(".fiveImgHard").css("transform") + "___" + $(".sixImgHard").css("transform")
                + "___" + $(".sevenImgHard").css("transform") + "___" + $(".eightImgHard").css("transform") + "___" + $(".nineImgHard").css("transform"))
            if ($scope.oneBool) {
                if ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".oneImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                    ($(".oneImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".oneImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                    ($(".oneImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                    //matrix(-1.83697019872103e-16, -1, 1, -1.83697019872103e-16, 0, 0)
                } else if (($(".oneImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                    ($(".oneImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".oneImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                dataStorage.boolianHardOne = true;
            } else if ($scope.twoBool) {
                console.log($(".twoImgHard").css("transform"));
                if ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".twoImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".twoImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".twoImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".twoImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".twoImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".twoImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".twoImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardTwo = true;
            } else if ($scope.threeBool) {
                console.log($(".threeImgHard").css("transform"));
                if ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".threeImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".threeImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".threeImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".threeImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".threeImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".threeImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".threeImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardThree = true;
            } else if ($scope.fourBool) {
                console.log($(".fourImgHard").css("transform"));
                if ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".fourImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".fourImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".fourImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".fourImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".fourImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".fourImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".fourImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardFour = true;
            } else if ($scope.fiveBool) {
                console.log($(".fiveImgHard").css("transform"));
                if ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".fiveImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".fiveImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".fiveImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".fiveImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".fiveImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".fiveImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".fiveImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardFive = true;
            } else if ($scope.sixBool) {
                console.log($(".sixImgHard").css("transform"));
                if ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".sixImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".sixImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".sixImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".sixImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".sixImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".sixImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".sixImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardSix = true;
            } else if ($scope.sevenBool) {
                console.log($(".sevenImgHard").css("transform"));
                if ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".sevenImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".sevenImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".sevenImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".sevenImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".sevenImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".sevenImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".sevenImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardSeven = true;
            } else if ($scope.eightBool) {
                console.log($(".eightImgHard").css("transform"));
                if ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".eightImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".eightImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".eightImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".eightImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".eightImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".eightImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".eightImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardEight = true;
            } else if ($scope.nineBool) {
                console.log($(".nineImgHard").css("transform"));
                if ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $scope.rot = 0;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".nineImgHard").css("transform") == "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)") ||
                ($(".nineImgHard").css("transform") == "matrix(0.00000000000000006123233995736766, 1, -1, 0.00000000000000006123233995736766, 0, 0)")) {
                    $scope.rot = 90;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".nineImgHard").css("transform") == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)") ||
                ($(".nineImgHard").css("transform") == "matrix(-1, 0.00000000000000012246467991473532, -0.00000000000000012246467991473532, -1, 0, 0)")) {
                    $scope.rot = 180;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                } else if (($(".nineImgHard").css("transform") == "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)") ||
                ($(".nineImgHard").css("transform") == "matrix(-0.00000000000000018369701987210297, -1, 1, -0.00000000000000018369701987210297, 0, 0)")) {
                    $scope.rot = 270;
                    $scope.rot += 90;
                    if ($scope.rot == 360) {
                        $scope.rot = 0;
                    }
                }
                $(".nineImgHard").css("transform", "rotate(" + $scope.rot + "deg)")
                if (($scope.numberFinMatch >= 9) && ($(".oneImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".twoImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".threeImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fourImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".fiveImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sixImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".sevenImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".eightImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")
                        && ($(".nineImgHard").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    if (dataStorage.myImageBoolean) {
                        $scope.goodDiv = true;
                    } else {
                        clearTimeout(dataStorage.t);
                        console.log($scope.timerHardStart)
                        $scope.speedsLevel = $scope.starTimerHardStart - $scope.timerHardStart;
                        console.log($scope.speedsLevel)
                        $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerHardStart;
                        console.log($scope.speedsPercent)
                        $scope.star = 3 - (3 * $scope.speedsPercent) / 100
                        console.log($scope.star)
                        if (($scope.star > 0) && ($scope.star < 1)) {
                            $scope.star = Math.ceil($scope.star)
                            $scope.goodDiv = true;
                        } else if ($scope.star > 1) {
                            $scope.star = Math.round($scope.star);
                            $scope.goodDiv = true;
                        }
                        if ($scope.timerHardStart == 0) {
                            $scope.timeFin = true
                        }
                        dataStorage.hardStar = $scope.star;
                    }
                    
                }
                console.log($scope.rot)
                dataStorage.boolianHardNine = true;
            }
        }
        $scope.showClickCountHard = 0;
        $scope.showImg = function () {
            AudioService.cardOpen();
            if ($scope.showClickCountHard < 1) {
                $scope.previewImg = true;
                $scope.count = 4;
                //$scope.previewImg = false
                countdownnull();
                $timeout(function () { $scope.previewImg = false; }, 3000);
            }
            function countdownnull() {
                console.log($scope.defTimerTimer)

                if ($scope.count === 0) {
                    $scope.previewImg = false;
                } else {
                    $scope.count = --$scope.count;
                    dataStorage.tt = setTimeout(countdownnull, 1000);
                }
            }
            $scope.showClickCountHard += 1;
        }
        $scope.fbShare = function () {
            $cordovaSocialSharing
              .shareViaFacebook("test", 'images/man.png', "http://webfoundationllc.com")
              .then(function (result) {
                  // Success!
              }, function (err) {
                  // An error occurred. Show a message to the user
              });
        }
        $scope.back = function () {
            AudioService.cardOpen();
            $scope.timeFin = false
            dataStorage.hardStar = undefined;
            clearTimeout(dataStorage.t);
            $rootScope.loadingShow = true;
            $scope.showClickCountHard = 0;
            dataStorage.pic = "";
            /*if (dataStorage.myImageBoolean) {
                $scope.imagePlay = true;
            } else {
                $scope.imagePlay = false;
            }*/
            $scope.one = null;
            $scope.two = null;
            $scope.three = null;
            $scope.four = null;
            $scope.five = null;
            $scope.six = null;
            $scope.seven = null;
            $scope.eight = null;
            $scope.nine = null;
            $(".oneImgHard").css("transform", "rotate(0deg)");
            $(".twoImgHard").css("transform", "scaleX(0deg)");
            $(".threeImgHard").css("transform", "scaleX(0deg)");
            $(".fourImgHard").css("transform", "scaleX(0deg)");
            $(".fiveImgHard").css("transform", "scaleX(0deg)");
            $(".sixImgHard").css("transform", "scaleX(0deg)");
            $(".sevenImgHard").css("transform", "scaleX(0deg)");
            $(".eightImgHard").css("transform", "scaleX(0deg)");
            $(".nineImgHard").css("transform", "scaleX(0deg)");
            $scope.goodDiv = false;
            if (dataStorage.myImageBoolean) {
                $('.picCamera').css({ "width": "80vw", "height": "80vw" });
                location.href = "#/app/complexity";
            } else {
                location.href = "#/app/hardLevel";
            }
        }
    }])
})();