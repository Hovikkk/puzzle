(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("playCtrl", ["$scope", "$rootScope", "dataStorage", "$timeout", "$state", "AudioService", "$cordovaSocialSharing",
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
                $scope.defTimerTimer = parseInt(localStorage.getItem("timerEasyStart"))
            }
            var w = window.innerWidth;
            var h = window.innerHeight;
            console.log(w + "____" + h);
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
            $scope.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            $scope.arr = shuffle($scope.arr);
            $scope.numberFinMatch = 0
            if (!dataStorage.myImageBoolean) {
                $timeout(function () {
                    if ($(".oneImg").attr("alt") == $scope.arr[0]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".twoImg").attr("alt") == $scope.arr[1]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".threeImg").attr("alt") == $scope.arr[2]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".fourImg").attr("alt") == $scope.arr[3]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".fiveImg").attr("alt") == $scope.arr[4]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".sixImg").attr("alt") == $scope.arr[5]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".sevenImg").attr("alt") == $scope.arr[6]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".eightImg").attr("alt") == $scope.arr[7]) {
                        $scope.numberFinMatch += 1;
                    }
                    if ($(".nineImg").attr("alt") == $scope.arr[8]) {
                        $scope.numberFinMatch += 1;
                    }

                    $scope.one = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[0] + ".jpg";
                    $scope.two = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[1] + ".jpg";
                    $scope.three = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[2] + ".jpg";
                    $scope.four = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[3] + ".jpg";
                    $scope.five = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[4] + ".jpg";
                    $scope.six = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[5] + ".jpg";
                    $scope.seven = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[6] + ".jpg";
                    $scope.eight = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[7] + ".jpg";
                    $scope.nine = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[8] + ".jpg";
                }, 100);
            }

            if (dataStorage.myImageBoolean) {
                $scope.picOriginal = dataStorage.pic;
                console.log($scope.picOriginal)
                $scope.$apply();
                //console.log(dataStorage.pic)
                /* var img = new Image();
                 img.src = $('#importantImgPre').attr('src');
                 var originalWidth = img.width;*/
                //console.log(img.src)
                $scope.preview = dataStorage.pic;
                $("#importantImgPre").attr("width", "80vw")
                var orgImg = $('#orgImg').get(0);
                console.log(orgImg);
                // draw image to canvas and get image data
                var canvas = document.createElement("canvas");
                canvas.width = orgImg.width;
                canvas.height = orgImg.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(orgImg, 0, 0);
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
                    // create destiantion canvas
                    canvasD["canvas" + i] = document.createElement("canvas");
                    //var canvas1 = document.createElement("canvas");
                    canvasD["canvas" + i].width = 100;
                    canvasD["canvas" + i].height = 100;
                    ctxD["ctx" + i] = canvasD["canvas" + i].getContext("2d");
                    //var ctx1 = canvasD["canvas"+i].getContext("2d");
                    ctxD["ctx" + i].rect(0, 0, 0, 0);
                    ctxD["ctx" + i].fillStyle = 'white';
                    ctxD["ctx" + i].fill();
                    ctxD["ctx" + i].putImageData(imageData["imageData" + i], 0, 0);
                    // put data to the img element
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

                if ($(".oneImg").attr("alt") == $scope.arrMyImage[0].atr) {
                    console.log("1=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".twoImg").attr("alt") == $scope.arrMyImage[1].atr) {
                    console.log("2=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".threeImg").attr("alt") == $scope.arrMyImage[2].atr) {
                    console.log("3=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".fourImg").attr("alt") == $scope.arrMyImage[3].atr) {
                    console.log("4=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".fiveImg").attr("alt") == $scope.arrMyImage[4].atr) {
                    console.log("5=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".sixImg").attr("alt") == $scope.arrMyImage[5].atr) {
                    console.log("6=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".sevenImg").attr("alt") == $scope.arrMyImage[6].atr) {
                    console.log("7=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".eightImg").attr("alt") == $scope.arrMyImage[7].atr) {
                    console.log("8=")
                    $scope.numberFinMatch += 1;
                }
                if ($(".nineImg").attr("alt") == $scope.arrMyImage[8].atr) {
                    console.log("9=")
                    $scope.numberFinMatch += 1;
                }
                console.log($scope.arrMyImage)
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
            console.log($scope.previewImg)
            if (!dataStorage.myImageBoolean) {
                $timeout(function () {
                    if ($scope.previewImg == false) {
                        dataStorage.t;
                        console.log(localStorage.getItem("timerEasyStart"))
                        console.log(dataStorage.timerEasy)
                        //  console.log(JSON.parse(localStorage.getItem("timerEasy")))

                        for (var j = 0; j < $rootScope.levelCount; j++) {
                            console.log(dataStorage.timerEasy[j].idTimer)
                            console.log(dataStorage.levelNumber)
                            if (dataStorage.timerEasy[j].idTimer == dataStorage.levelNumber) {
                                // $scope.timerEasyStart = dataStorage.timerEasy[j].timer;
                                $scope.timerEasyStart = localStorage.getItem("timerEasyStart")
                                console.log()
                                //$scope.starTimerEasyStart = dataStorage.timerEasy[j].timer
                                $scope.starTimerEasyStart = localStorage.getItem("timerEasyStart")
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
            //dataStorage.timerSec = $scope.defTimerTimer
            /*if ($scope.defTimerTimer == 0) {
                $scope.timeFin = true;
            } else {
                $scope.timeFin = false;
            }*/
            /* if ($scope.defTimerTimer) {
                 $scope.timerEasyStart = $scope.defTimerTimer;
             }*/
            if ($scope.timerEasyStart <= 6) {
                $(".timerGame").attr("id", "gameTimerRed");
            } else {
                $(".timerGame").removeAttr("id")
            }
            if ($scope.timerEasyStart === 0) {
                // time is up
                $scope.timeFin = true;
            } else {
                $scope.defTimerTimer = --$scope.timerEasyStart;
                dataStorage.t = setTimeout(countdown, 1000);
            }
            $scope.$apply();
        }
        $scope.oneFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                console.log($scope.one)
                console.log($scope.one.split("/")[3].split(".")[0])
                if ((parseInt($(".oneImg").attr("alt")) == parseInt($scope.one.split("/")[3].split(".")[0])) && ($scope.oneFinishNum < 1)) {
                    $scope.oneFinishNum += 1;
                    $scope.numberFinMatch += $scope.oneFinishNum;
                } else if ((parseInt($(".oneImg").attr("alt")) != parseInt($scope.one.split("/")[3].split(".")[0])) && ($scope.oneFinishNum >= 1)) {
                    $scope.oneFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".oneImg").attr("alt")) == $scope.oneAtr) && ($scope.oneFinishNum < 1)) {
                    $scope.oneFinishNum += 1;
                    $scope.numberFinMatch += $scope.oneFinishNum;
                } else if ((parseInt($(".oneImg").attr("alt")) != $scope.oneAtr) && ($scope.oneFinishNum >= 1)) {
                    $scope.oneFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.twoFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".twoImg").attr("alt")) == parseInt($scope.two.split("/")[3].split(".")[0])) && ($scope.twoFinishNum < 1)) {
                    $scope.twoFinishNum += 1;
                    $scope.numberFinMatch += $scope.twoFinishNum;
                } else if ((parseInt($(".twoImg").attr("alt")) != parseInt($scope.two.split("/")[3].split(".")[0])) && ($scope.twoFinishNum >= 1)) {
                    $scope.twoFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".twoImg").attr("alt")) == $scope.twoAtr) && ($scope.twoFinishNum < 1)) {
                    $scope.twoFinishNum += 1;
                    $scope.numberFinMatch += $scope.twoFinishNum;
                } else if ((parseInt($(".twoImg").attr("alt")) != $scope.twoAtr) && ($scope.twoFinishNum >= 1)) {
                    $scope.twoFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.threeFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".threeImg").attr("alt")) == parseInt($scope.three.split("/")[3].split(".")[0])) && ($scope.threeFinishNum < 1)) {
                    $scope.threeFinishNum += 1;
                    $scope.numberFinMatch += $scope.threeFinishNum;
                } else if ((parseInt($(".threeImg").attr("alt")) != parseInt($scope.three.split("/")[3].split(".")[0])) && ($scope.threeFinishNum >= 1)) {
                    $scope.threeFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".threeImg").attr("alt")) == $scope.threeAtr) && ($scope.threeFinishNum < 1)) {
                    $scope.threeFinishNum += 1;
                    $scope.numberFinMatch += $scope.threeFinishNum;
                } else if ((parseInt($(".threeImg").attr("alt")) != $scope.threeAtr) && ($scope.threeFinishNum >= 1)) {
                    $scope.threeFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.fourFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".fourImg").attr("alt")) == parseInt($scope.four.split("/")[3].split(".")[0])) && ($scope.fourFinishNum < 1)) {
                    $scope.fourFinishNum += 1;
                    $scope.numberFinMatch += $scope.fourFinishNum;
                } else if ((parseInt($(".fourImg").attr("alt")) != parseInt($scope.four.split("/")[3].split(".")[0])) && ($scope.fourFinishNum >= 1)) {
                    $scope.fourFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".fourImg").attr("alt")) == $scope.fourAtr) && ($scope.fourFinishNum < 1)) {
                    $scope.fourFinishNum += 1;
                    $scope.numberFinMatch += $scope.fourFinishNum;
                } else if ((parseInt($(".fourImg").attr("alt")) != $scope.fourAtr) && ($scope.fourFinishNum >= 1)) {
                    $scope.fourFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.fiveFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".fiveImg").attr("alt")) == parseInt($scope.five.split("/")[3].split(".")[0])) && ($scope.fiveFinishNum < 1)) {
                    $scope.fiveFinishNum += 1;
                    $scope.numberFinMatch += $scope.fiveFinishNum;
                } else if ((parseInt($(".fiveImg").attr("alt")) != parseInt($scope.five.split("/")[3].split(".")[0])) && ($scope.fiveFinishNum >= 1)) {
                    $scope.fiveFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".fiveImg").attr("alt")) == $scope.fiveAtr) && ($scope.fiveFinishNum < 1)) {
                    $scope.fiveFinishNum += 1;
                    $scope.numberFinMatch += $scope.fiveFinishNum;
                } else if ((parseInt($(".fiveImg").attr("alt")) != $scope.fiveAtr) && ($scope.fiveFinishNum >= 1)) {
                    $scope.fiveFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.sixFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".sixImg").attr("alt")) == parseInt($scope.six.split("/")[3].split(".")[0])) && ($scope.sixFinishNum < 1)) {
                    $scope.sixFinishNum += 1;
                    $scope.numberFinMatch += $scope.sixFinishNum;
                } else if ((parseInt($(".sixImg").attr("alt")) != parseInt($scope.six.split("/")[3].split(".")[0])) && ($scope.sixFinishNum >= 1)) {
                    $scope.sixFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".sixImg").attr("alt")) == $scope.sixAtr) && ($scope.sixFinishNum < 1)) {
                    $scope.sixFinishNum += 1;
                    $scope.numberFinMatch += $scope.sixFinishNum;
                } else if ((parseInt($(".sixImg").attr("alt")) != $scope.sixAtr) && ($scope.sixFinishNum >= 1)) {
                    $scope.sixFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.sevenFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".sevenImg").attr("alt")) == parseInt($scope.seven.split("/")[3].split(".")[0])) && ($scope.sevenFinishNum < 1)) {
                    $scope.sevenFinishNum += 1;
                    $scope.numberFinMatch += $scope.sevenFinishNum;
                } else if ((parseInt($(".sevenImg").attr("alt")) != parseInt($scope.seven.split("/")[3].split(".")[0])) && ($scope.sevenFinishNum >= 1)) {
                    $scope.sevenFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".sevenImg").attr("alt")) == $scope.sevenAtr) && ($scope.sevenFinishNum < 1)) {
                    $scope.sevenFinishNum += 1;
                    $scope.numberFinMatch += $scope.sevenFinishNum;
                } else if ((parseInt($(".sevenImg").attr("alt")) != $scope.sevenAtr) && ($scope.sevenFinishNum >= 1)) {
                    $scope.sevenFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.eightFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".eightImg").attr("alt")) == parseInt($scope.eight.split("/")[3].split(".")[0])) && ($scope.eightFinishNum < 1)) {
                    $scope.eightFinishNum += 1;
                    $scope.numberFinMatch += $scope.eightFinishNum;
                } else if ((parseInt($(".eightImg").attr("alt")) != parseInt($scope.eight.split("/")[3].split(".")[0])) && ($scope.eightFinishNum >= 1)) {
                    $scope.eightFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".eightImg").attr("alt")) == $scope.eightAtr) && ($scope.eightFinishNum < 1)) {
                    $scope.eightFinishNum += 1;
                    $scope.numberFinMatch += $scope.eightFinishNum;
                } else if ((parseInt($(".eightImg").attr("alt")) != $scope.eightAtr) && ($scope.eightFinishNum >= 1)) {
                    $scope.eightFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.nineFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".nineImg").attr("alt")) == parseInt($scope.nine.split("/")[3].split(".")[0])) && ($scope.nineFinishNum < 1)) {
                    $scope.nineFinishNum += 1;
                    $scope.numberFinMatch += $scope.nineFinishNum;
                } else if ((parseInt($(".nineImg").attr("alt")) != parseInt($scope.nine.split("/")[3].split(".")[0])) && ($scope.nineFinishNum >= 1)) {
                    $scope.nineFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".nineImg").attr("alt")) == $scope.nineAtr) && ($scope.nineFinishNum < 1)) {
                    $scope.nineFinishNum += 1;
                    $scope.numberFinMatch += $scope.nineFinishNum;
                } else if ((parseInt($(".nineImg").attr("alt")) != $scope.nineAtr) && ($scope.nineFinishNum >= 1)) {
                    $scope.nineFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }

            console.log($scope.numberFinMatch)
        }
        $scope.oneImg = function () {
            if (!$scope.oneBool) {
                $scope.oneBool = true;
                $(".oneImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.two:
                            $scope.two = $scope.one;
                            $scope.twoAtr = $scope.oneAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.one;
                            $scope.threeAtr = $scope.oneAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.one;
                            $scope.fourAtr = $scope.oneAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.one;
                            $scope.fiveAtr = $scope.oneAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.one;
                            $scope.sixAtr = $scope.oneAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.one;
                            $scope.sevenAtr = $scope.oneAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.one;
                            $scope.eightAtr = $scope.oneAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.one;
                            $scope.nineAtr = $scope.oneAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.one = $scope.interim;
                    $scope.oneAtr = $scope.interimAtr;
                    console.log($scope.oneAtr + "_____" + $scope.twoAtr)
                    $scope.oneFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.one;
                $scope.interimAtr = $scope.oneAtr;
            } else {
                $scope.oneBool = false;
                $(".oneImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.twoImg = function () {
            if (!$scope.twoBool) {
                $scope.twoBool = true;
                $(".twoImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.two;
                            $scope.oneAtr = $scope.twoAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.two;
                            $scope.threeAtr = $scope.twoAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.two;
                            $scope.fourAtr = $scope.twoAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.two;
                            $scope.fiveAtr = $scope.twoAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.two;
                            $scope.sixAtr = $scope.twoAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.two;
                            $scope.sevenAtr = $scope.twoAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.two;
                            $scope.eightAtr = $scope.twoAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.two;
                            $scope.nineAtr = $scope.twoAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.two = $scope.interim;
                    $scope.twoAtr = $scope.interimAtr;

                    console.log($scope.oneAtr + "___2__" + $scope.twoAtr)
                    $scope.twoFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.two;
                $scope.interimAtr = $scope.twoAtr;
            } else {
                $scope.twoBool = false;
                $(".twoImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.threeImg = function () {
            if (!$scope.threeBool) {
                $scope.threeBool = true;
                $(".threeImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.three;
                            $scope.oneAtr = $scope.threeAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.three;
                            $scope.twoAtr = $scope.threeAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.three;
                            $scope.fourAtr = $scope.threeAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.three;
                            $scope.fiveAtr = $scope.threeAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.three;
                            $scope.sixAtr = $scope.threeAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.three;
                            $scope.sevenAtr = $scope.threeAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.three;
                            $scope.eightAtr = $scope.threeAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.three;
                            $scope.nineAtr = $scope.threeAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.three = $scope.interim;
                    $scope.threeAtr = $scope.interimAtr;
                    $scope.threeFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.three;
                $scope.interimAtr = $scope.threeAtr;
            } else {
                $scope.threeBool = false;
                $(".threeImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.fourImg = function () {
            if (!$scope.fourBool) {
                $scope.fourBool = true;
                $(".fourImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.four;
                            $scope.oneAtr = $scope.fourAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.four;
                            $scope.twoAtr = $scope.fourAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.four;
                            $scope.threeAtr = $scope.fourAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.four;
                            $scope.fiveAtr = $scope.fourAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.four;
                            $scope.sixAtr = $scope.fourAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.four;
                            $scope.sevenAtr = $scope.fourAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.four;
                            $scope.eightAtr = $scope.fourAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.four;
                            $scope.nineAtr = $scope.fourAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.four = $scope.interim;
                    $scope.fourAtr = $scope.interimAtr;
                    $scope.fourFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.four;
                $scope.interimAtr = $scope.fourAtr;
            } else {
                $scope.fourBool = false;
                $(".fourImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.fiveImg = function () {
            if (!$scope.fiveBool) {
                $scope.fiveBool = true;
                $(".fiveImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.five;
                            $scope.oneAtr = $scope.fiveAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.five;
                            $scope.twoAtr = $scope.fiveAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.five;
                            $scope.threeAtr = $scope.fiveAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.five;
                            $scope.fourAtr = $scope.fiveAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.five;
                            $scope.sixAtr = $scope.fiveAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.five;
                            $scope.sevenAtr = $scope.fiveAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.five;
                            $scope.eightAtr = $scope.fiveAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.five;
                            $scope.nineAtr = $scope.fiveAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.five = $scope.interim;
                    $scope.fiveAtr = $scope.interimAtr;
                    $scope.fiveFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.five;
                $scope.interimAtr = $scope.fiveAtr;
            } else {
                $scope.fiveBool = false;
                $(".fiveImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.sixImg = function () {
            if (!$scope.sixBool) {
                $scope.sixBool = true;
                $(".sixImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.six;
                            $scope.oneAtr = $scope.sixAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.six;
                            $scope.twoAtr = $scope.sixAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.six;
                            $scope.threeAtr = $scope.sixAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.six;
                            $scope.fourAtr = $scope.sixAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.six;
                            $scope.fiveAtr = $scope.sixAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.six;
                            $scope.sevenAtr = $scope.sixAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.six;
                            $scope.eightAtr = $scope.sixAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.six;
                            $scope.nineAtr = $scope.sixAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.six = $scope.interim;
                    $scope.sixAtr = $scope.interimAtr;
                    $scope.sixFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.six;
                $scope.interimAtr = $scope.sixAtr;
            } else {
                $scope.sixBool = false;
                $(".sixImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.sevenImg = function () {
            if (!$scope.sevenBool) {
                $scope.sevenBool = true;
                $(".sevenImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.seven;
                            $scope.oneAtr = $scope.sevenAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.seven;
                            $scope.twoAtr = $scope.sevenAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.seven;
                            $scope.threeAtr = $scope.sevenAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.seven;
                            $scope.fourAtr = $scope.sevenAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.seven;
                            $scope.fiveAtr = $scope.sevenAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.seven;
                            $scope.sixAtr = $scope.sevenAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.seven;
                            $scope.eightAtr = $scope.sevenAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.seven;
                            $scope.nineAtr = $scope.sevenAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.seven = $scope.interim;
                    $scope.sevenAtr = $scope.interimAtr;
                    $scope.sevenFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.seven;
                $scope.interimAtr = $scope.sevenAtr;
            } else {
                $scope.sevenBool = false;
                $(".sixImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.eightImg = function () {
            if (!$scope.eightBool) {
                $scope.eightBool = true;
                $(".eightImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.eight;
                            $scope.oneAtr = $scope.eightAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.eight;
                            $scope.twoAtr = $scope.eightAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.eight;
                            $scope.threeAtr = $scope.eightAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.eight;
                            $scope.fourAtr = $scope.eightAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.eight;
                            $scope.fiveAtr = $scope.eightAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.eight;
                            $scope.sixAtr = $scope.eightAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.eight;
                            $scope.sevenAtr = $scope.eightAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.eight;
                            $scope.nineAtr = $scope.eightAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.eight = $scope.interim;
                    $scope.eightAtr = $scope.interimAtr;
                    $scope.eightFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.eight;
                $scope.interimAtr = $scope.eightAtr;
            } else {
                $scope.eightBool = false;
                $(".eightImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.nineImg = function () {
            if (!$scope.nineBool) {
                $scope.nineBool = true;
                $(".nineImg").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.nine;
                            $scope.oneAtr = $scope.nineAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.nine;
                            $scope.twoAtr = $scope.nineAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.nine;
                            $scope.threeAtr = $scope.nineAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.nine;
                            $scope.fourAtr = $scope.nineAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.nine;
                            $scope.fiveAtr = $scope.nineAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.nine;
                            $scope.sixAtr = $scope.nineAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.nine;
                            $scope.sevenAtr = $scope.nineAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.nine;
                            $scope.eightAtr = $scope.nineAtr;
                            $scope.eightFinishNumFunc();
                    }
                    $scope.nine = $scope.interim;
                    $scope.nineAtr = $scope.interimAtr;
                    $scope.nineFinishNumFunc();
                    if ($scope.numberFinMatch >= 9) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerEasyStart)
                            $scope.speedsLevel = $scope.starTimerEasyStart - $scope.timerEasyStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerEasyStart;
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
                            if ($scope.timerEasyStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.easyStar = $scope.star;
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
                    $(".oneImg").css("opacity", "1");
                    $(".twoImg").css("opacity", "1");
                    $(".threeImg").css("opacity", "1");
                    $(".fourImg").css("opacity", "1");
                    $(".fiveImg").css("opacity", "1");
                    $(".sixImg").css("opacity", "1");
                    $(".sevenImg").css("opacity", "1");
                    $(".eightImg").css("opacity", "1");
                    $(".nineImg").css("opacity", "1");
                }
                $scope.interim = $scope.nine;
                $scope.interimAtr = $scope.nineAtr;
            } else {
                $scope.nineBool = false;
                $(".nineImg").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
            }

        }
        $scope.reloadGame = function () {
            AudioService.cardOpen();
            $scope.timeFin = false;
            $scope.defTimerTimer = parseInt(localStorage.getItem("timerEasyStart"))
            $state.reload();
        }
        $scope.next = function () {
            AudioService.cardOpen();
            console.log(dataStorage.easyStar)
            if (!dataStorage.myImageBoolean) {
                if (dataStorage.levelNumber <= $rootScope.levelCount) {
                    dataStorage.levelNumber += 1;
                    //console.log(dataStorage.levelNumber);
                    $scope.timerEasyStart = parseInt(localStorage.getItem("timerEasyStart"))
                    $scope.timerEasyStart += 5
                    localStorage.setItem("timerEasyStart", $scope.timerEasyStart)
                    location.href = "#/app/level";
                    localStorage.setItem("easyLevel", dataStorage.levelNumber);
                } else {
                    $rootScope.loadingShow = true;
                    //localStorage.setItem("complexity", 2);
                    location.href = "#/app/complexity";
                }

                $scope.numberFinMatch = 0;

                $scope.goodDiv = false;
                $scope.showClickCount = 0;
                $rootScope.loadingShow = true;
                $state.reload();
            } else {
                $rootScope.loadingShow = true;
                $scope.goodDiv = false;
                $('.picCamera').css({ "width": "80vw", "height": "80vw" });
                location.href = "#/app/defImgOrMyImg";
            }

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
        $scope.showClickCount = 0;
        $scope.showImg = function () {
            AudioService.cardOpen();
            if ($scope.showClickCount < 1) {
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
            $scope.showClickCount += 1;
        }
        $scope.back = function () {
            AudioService.cardOpen();
            //dataStorage.pic = "";
            /*if (dataStorage.myImageBoolean) {
                $scope.imagePlay = true;
            } else {
                $scope.imagePlay = false;
            }*/
            $scope.timeFin = false
            dataStorage.easyStar = undefined;
            clearTimeout(dataStorage.t);
            $rootScope.loadingShow = true;
            $scope.showClickCount = 0;
            $scope.one = null;
            $scope.two = null;
            $scope.three = null;
            $scope.four = null;
            $scope.five = null;
            $scope.six = null;
            $scope.seven = null;
            $scope.eight = null;
            $scope.nine = null;
            $(".oneImg").css("transform", "scaleX(1)");
            $(".twoImg").css("transform", "scaleX(1)");
            $(".threeImg").css("transform", "scaleX(1)");
            $(".fourImg").css("transform", "scaleX(1)");
            $(".fiveImg").css("transform", "scaleX(1)");
            $(".sixImg").css("transform", "scaleX(1)");
            $(".sevenImg").css("transform", "scaleX(1)");
            $(".eightImg").css("transform", "scaleX(1)");
            $(".nineImg").css("transform", "scaleX(1)");
            $scope.goodDiv = false;
            if (dataStorage.myImageBoolean) {
                $('.picCamera').css({ "width": "80vw", "height": "80vw" });
                location.href = "#/app/complexity";
            } else {
                location.href = "#/app/level";
            }

        }
        //transform: rotate(180deg);
    }])
})();