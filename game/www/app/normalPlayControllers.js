(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("normalPlayCtrl", ["$scope", "$rootScope", "dataStorage", "$timeout", "$state", "AudioService", "$cordovaSocialSharing",
        function ($scope, $rootScope, dataStorage, $timeout, $state, AudioService, $cordovaSocialSharing) {
        $scope.$on('$ionicView.enter', function () {
            //$scope.specularNoDiv = false;
            // $scope.numberReload = 0;
            
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
                $scope.defTimerTimer = parseInt(localStorage.getItem("timerNormalStart"))
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
            $scope.specularArr = [1, 1, 1, 1, -1, -1, -1, -1, -1];
            $scope.specularArr = shuffle($scope.specularArr);
            console.log($scope.specularArr);
            $scope.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            $scope.arr = shuffle($scope.arr);
            $scope.numberFinMatch = 0
            if (!dataStorage.myImageBoolean) {
                
                $timeout(function () {  
                if ($(".oneImgNorm").attr("alt") == $scope.arr[0]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".twoImgNorm").attr("alt") == $scope.arr[1]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".threeImgNorm").attr("alt") == $scope.arr[2]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".fourImgNorm").attr("alt") == $scope.arr[3]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".fiveImgNorm").attr("alt") == $scope.arr[4]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".sixImgNorm").attr("alt") == $scope.arr[5]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".sevenImgNorm").attr("alt") == $scope.arr[6]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".eightImgNorm").attr("alt") == $scope.arr[7]) {
                    $scope.numberFinMatch += 1;
                }
                if ($(".nineImgNorm").attr("alt") == $scope.arr[8]) {
                    $scope.numberFinMatch += 1;
                }
                $scope.preview = "images/play/" + dataStorage.levelNumber + "/preview.jpg";
                $scope.one = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[0] + ".jpg";
                $(".oneImgNorm").css("transform", "scaleX(" + $scope.specularArr[0] + ")");
                console.log($(".oneImgNorm").css("transform"))
                $scope.two = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[1] + ".jpg";
                $(".twoImgNorm").css("transform", "scaleX(" + $scope.specularArr[1] + ")");
                $scope.three = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[2] + ".jpg";
                $(".threeImgNorm").css("transform", "scaleX(" + $scope.specularArr[2] + ")");
                $scope.four = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[3] + ".jpg";
                $(".fourImgNorm").css("transform", "scaleX(" + $scope.specularArr[3] + ")");
                $scope.five = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[4] + ".jpg";
                $(".fiveImgNorm").css("transform", "scaleX(" + $scope.specularArr[4] + ")");
                $scope.six = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[5] + ".jpg";
                $(".sixImgNorm").css("transform", "scaleX(" + $scope.specularArr[5] + ")");
                $scope.seven = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[6] + ".jpg";
                $(".sevenImgNorm").css("transform", "scaleX(" + $scope.specularArr[6] + ")");
                $scope.eight = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[7] + ".jpg";
                $(".eightImgNorm").css("transform", "scaleX(" + $scope.specularArr[7] + ")");
                $scope.nine = "images/play/" + dataStorage.levelNumber + "/" + $scope.arr[8] + ".jpg";
                $(".nineImgNorm").css("transform", "scaleX(" + $scope.specularArr[8] + ")");
                if ($(".oneImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularOne = true
                } else {
                    $rootScope.boolianSpecularOne = false
                }
                if ($(".twoImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularTwo = true
                } else {
                    $rootScope.boolianSpecularTwo = false
                }
                if ($(".threeImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularThree = true
                } else {
                    $rootScope.boolianSpecularThree = false
                }
                if ($(".fourImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularFour = true
                } else {
                    $rootScope.boolianSpecularFour = false
                }
                if ($(".fiveImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularFive = true
                } else {
                    $rootScope.boolianSpecularFive = false
                }
                if ($(".sixImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularSix = true
                } else {
                    $rootScope.boolianSpecularSix = false
                }
                if ($(".sevenImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularSeven = true
                } else {
                    $rootScope.boolianSpecularSeven = false
                }
                if ($(".eightImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularEight = true
                } else {
                    $rootScope.boolianSpecularEight = false
                }
                if ($(".nineImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularNine = true
                } else {
                    $rootScope.boolianSpecularNine = false
                }
                console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                }, 100);
            }

            if (dataStorage.myImageBoolean) {
                $scope.picOriginal = dataStorage.pic;
                $scope.$apply();
                $scope.preview = dataStorage.pic;
                $("#importantImgPreNorm").attr("width", "80vw")
                var orgImgNorm = $('#orgImg').get(0);
                //$scope.$apply();
                console.log(orgImgNorm)
                var canvas = document.createElement("canvas");
                canvas.width = orgImgNorm.width;
                canvas.height = orgImgNorm.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(orgImgNorm, 0, 0);
                var imageData = [];
                var canvasD = [];
                var ctxD = [];
                var dstImgD = [];
                console.log("_____!!!!")
                //console.log($scope.picOriginal)
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
                console.log($scope.arrMyImage)
                
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
                $scope.$apply();
                

                console.log($scope.numberFinMatch)
                $(".oneImgNorm").css("transform", "scaleX(" + $scope.specularArr[0] + ")");
                $(".twoImgNorm").css("transform", "scaleX(" + $scope.specularArr[1] + ")");
                $(".threeImgNorm").css("transform", "scaleX(" + $scope.specularArr[2] + ")");
                $(".fourImgNorm").css("transform", "scaleX(" + $scope.specularArr[3] + ")");
                $(".fiveImgNorm").css("transform", "scaleX(" + $scope.specularArr[4] + ")");
                $(".sixImgNorm").css("transform", "scaleX(" + $scope.specularArr[5] + ")");
                $(".sevenImgNorm").css("transform", "scaleX(" + $scope.specularArr[6] + ")");
                $(".eightImgNorm").css("transform", "scaleX(" + $scope.specularArr[7] + ")");
                $(".nineImgNorm").css("transform", "scaleX(" + $scope.specularArr[8] + ")");
                if (($(".oneImgNorm").attr("alt") == $scope.arrMyImage[0].atr) && ($(".oneImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("1=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".twoImgNorm").attr("alt") == $scope.arrMyImage[1].atr) && ($(".twoImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("2=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".threeImgNorm").attr("alt") == $scope.arrMyImage[2].atr) && ($(".threeImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("3=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".fourImgNorm").attr("alt") == $scope.arrMyImage[3].atr) && ($(".fourImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("4=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".fiveImgNorm").attr("alt") == $scope.arrMyImage[4].atr) && ($(".fiveImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("5=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".sixImgNorm").attr("alt") == $scope.arrMyImage[5].atr) && ($(".sixImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("6=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".sevenImgNorm").attr("alt") == $scope.arrMyImage[6].atr) && ($(".sevenImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("7=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".eightImgNorm").attr("alt") == $scope.arrMyImage[7].atr) && ($(".eightImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("8=")
                    $scope.numberFinMatch += 1;
                }
                if (($(".nineImgNorm").attr("alt") == $scope.arrMyImage[8].atr) && ($(".nineImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)")) {
                    console.log("9=")
                    $scope.numberFinMatch += 1;
                }
                console.log($(".oneImgNorm").css("transform"))
                if ($(".oneImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularOne = true
                } else {
                    $rootScope.boolianSpecularOne = false
                }
                if ($(".twoImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularTwo = true
                } else {
                    $rootScope.boolianSpecularTwo = false
                }
                if ($(".threeImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularThree = true
                } else {
                    $rootScope.boolianSpecularThree = false
                }
                if ($(".fourImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularFour = true
                } else {
                    $rootScope.boolianSpecularFour = false
                }
                if ($(".fiveImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularFive = true
                } else {
                    $rootScope.boolianSpecularFive = false
                }
                if ($(".sixImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularSix = true
                } else {
                    $rootScope.boolianSpecularSix = false
                }
                if ($(".sevenImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularSeven = true
                } else {
                    $rootScope.boolianSpecularSeven = false
                }
                if ($(".eightImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularEight = true
                } else {
                    $rootScope.boolianSpecularEight = false
                }
                if ($(".nineImgNorm").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
                    $rootScope.boolianSpecularNine = true
                } else {
                    $rootScope.boolianSpecularNine = false
                }
                console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
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
            /*$rootScope.boolianSpecularOne = false;
            $rootScope.boolianSpecularTwo = false;
            $rootScope.boolianSpecularThree = false;
            $rootScope.boolianSpecularFour = false;
            $rootScope.boolianSpecularFive = false;
            $rootScope.boolianSpecularSix = false;
            $rootScope.boolianSpecularSeven = false;
            $rootScope.boolianSpecularEight = false;
            $rootScope.boolianSpecularNine = false;*/
            $scope.num = 0;
            $rootScope.loadingShow = false;
            $timeout(function () { $scope.previewImg = false; }, 3000);
            if (!dataStorage.myImageBoolean) {
                $timeout(function () {
                    if ($scope.previewImg == false) {
                        dataStorage.t;
                        
                        console.log(dataStorage.timerNormal)
                        for (var j = 0; j < $rootScope.levelCount; j++) {
                            if (dataStorage.timerNormal[j].idTimer == dataStorage.levelNumber) {
                                //$scope.timerNormalStart = dataStorage.timerNormal[j].timer;
                                $scope.timerNormalStart = localStorage.getItem("timerNormalStart");
                                //$scope.starTimerNormalStart = dataStorage.timerNormal[j].timer
                                $scope.starTimerNormalStart = localStorage.getItem("timerNormalStart")
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
            if ($scope.timerNormalStart <= 6) {
                $(".timerGame").attr("id", "gameTimerRed");
            } else {
                $(".timerGame").removeAttr("id")
            }
            if ($scope.timerNormalStart === 0) {
                // time is up
                $scope.timeFin = true;
            } else {
                $scope.defTimerTimer = --$scope.timerNormalStart;
                dataStorage.t = setTimeout(countdown, 1000);
            }
            $scope.$apply();
        }
        $scope.oneFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".oneImgNorm").attr("alt")) == parseInt($scope.one.split("/")[3].split(".")[0])) && ($scope.oneFinishNum < 1)) {
                    $scope.oneFinishNum += 1;
                    $scope.numberFinMatch += $scope.oneFinishNum;
                } else if ((parseInt($(".oneImgNorm").attr("alt")) != parseInt($scope.one.split("/")[3].split(".")[0])) && ($scope.oneFinishNum >= 1)) {
                    $scope.oneFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".oneImgNorm").attr("alt")) == $scope.oneAtr) && ($scope.oneFinishNum < 1)) {
                    $scope.oneFinishNum += 1;
                    $scope.numberFinMatch += $scope.oneFinishNum;
                } else if ((parseInt($(".oneImgNorm").attr("alt")) != $scope.oneAtr) && ($scope.oneFinishNum >= 1)) {
                    $scope.oneFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            if ($(".oneImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularOne = false;
            } else {
                $rootScope.boolianSpecularOne = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.twoFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".twoImgNorm").attr("alt")) == parseInt($scope.two.split("/")[3].split(".")[0])) && ($scope.twoFinishNum < 1)) {
                    $scope.twoFinishNum += 1;
                    $scope.numberFinMatch += $scope.twoFinishNum;
                } else if ((parseInt($(".twoImgNorm").attr("alt")) != parseInt($scope.two.split("/")[3].split(".")[0])) && ($scope.twoFinishNum >= 1)) {
                    $scope.twoFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".twoImgNorm").attr("alt")) == $scope.twoAtr) && ($scope.twoFinishNum < 1)) {
                    $scope.twoFinishNum += 1;
                    $scope.numberFinMatch += $scope.twoFinishNum;
                } else if ((parseInt($(".twoImgNorm").attr("alt")) != $scope.twoAtr) && ($scope.twoFinishNum >= 1)) {
                    $scope.twoFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".twoImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularTwo = false;
            } else {
                $rootScope.boolianSpecularTwo = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.threeFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".threeImgNorm").attr("alt")) == parseInt($scope.three.split("/")[3].split(".")[0])) && ($scope.threeFinishNum < 1)) {
                    $scope.threeFinishNum += 1;
                    $scope.numberFinMatch += $scope.threeFinishNum;
                } else if ((parseInt($(".threeImgNorm").attr("alt")) != parseInt($scope.three.split("/")[3].split(".")[0])) && ($scope.threeFinishNum >= 1)) {
                    $scope.threeFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".threeImgNorm").attr("alt")) == $scope.threeAtr) && ($scope.threeFinishNum < 1)) {
                    $scope.threeFinishNum += 1;
                    $scope.numberFinMatch += $scope.threeFinishNum;
                } else if ((parseInt($(".threeImgNorm").attr("alt")) != $scope.threeAtr) && ($scope.threeFinishNum >= 1)) {
                    $scope.threeFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".threeImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularThree = false;
            } else {
                $rootScope.boolianSpecularThree = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.fourFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".fourImgNorm").attr("alt")) == parseInt($scope.four.split("/")[3].split(".")[0])) && ($scope.fourFinishNum < 1)) {
                    $scope.fourFinishNum += 1;
                    $scope.numberFinMatch += $scope.fourFinishNum;
                } else if ((parseInt($(".fourImgNorm").attr("alt")) != parseInt($scope.four.split("/")[3].split(".")[0])) && ($scope.fourFinishNum >= 1)) {
                    $scope.fourFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".fourImgNorm").attr("alt")) == $scope.fourAtr) && ($scope.fourFinishNum < 1)) {
                    $scope.fourFinishNum += 1;
                    $scope.numberFinMatch += $scope.fourFinishNum;
                } else if ((parseInt($(".fourImgNorm").attr("alt")) != $scope.fourAtr) && ($scope.fourFinishNum >= 1)) {
                    $scope.fourFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".fourImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularFour = false;
            } else {
                $rootScope.boolianSpecularFour = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.fiveFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".fiveImgNorm").attr("alt")) == parseInt($scope.five.split("/")[3].split(".")[0])) && ($scope.fiveFinishNum < 1)) {
                    $scope.fiveFinishNum += 1;
                    $scope.numberFinMatch += $scope.fiveFinishNum;
                } else if ((parseInt($(".fiveImgNorm").attr("alt")) != parseInt($scope.five.split("/")[3].split(".")[0])) && ($scope.fiveFinishNum >= 1)) {
                    $scope.fiveFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".fiveImgNorm").attr("alt")) == $scope.fiveAtr) && ($scope.fiveFinishNum < 1)) {
                    $scope.fiveFinishNum += 1;
                    $scope.numberFinMatch += $scope.fiveFinishNum;
                } else if ((parseInt($(".fiveImgNorm").attr("alt")) != $scope.fiveAtr) && ($scope.fiveFinishNum >= 1)) {
                    $scope.fiveFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".fiveImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularFive = false;
            } else {
                $rootScope.boolianSpecularFive = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.sixFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".sixImgNorm").attr("alt")) == parseInt($scope.six.split("/")[3].split(".")[0])) && ($scope.sixFinishNum < 1)) {
                    $scope.sixFinishNum += 1;
                    $scope.numberFinMatch += $scope.sixFinishNum;
                } else if ((parseInt($(".sixImgNorm").attr("alt")) != parseInt($scope.six.split("/")[3].split(".")[0])) && ($scope.sixFinishNum >= 1)) {
                    $scope.sixFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".sixImgNorm").attr("alt")) == $scope.sixAtr) && ($scope.sixFinishNum < 1)) {
                    $scope.sixFinishNum += 1;
                    $scope.numberFinMatch += $scope.sixFinishNum;
                } else if ((parseInt($(".sixImgNorm").attr("alt")) != $scope.sixAtr) && ($scope.sixFinishNum >= 1)) {
                    $scope.sixFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".sixImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularSix = false;
            } else {
                $rootScope.boolianSpecularSix = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.sevenFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".sevenImgNorm").attr("alt")) == parseInt($scope.seven.split("/")[3].split(".")[0])) && ($scope.sevenFinishNum < 1)) {
                    $scope.sevenFinishNum += 1;
                    $scope.numberFinMatch += $scope.sevenFinishNum;
                } else if ((parseInt($(".sevenImgNorm").attr("alt")) != parseInt($scope.seven.split("/")[3].split(".")[0])) && ($scope.sevenFinishNum >= 1)) {
                    $scope.sevenFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".sevenImgNorm").attr("alt")) == $scope.sevenAtr) && ($scope.sevenFinishNum < 1)) {
                    $scope.sevenFinishNum += 1;
                    $scope.numberFinMatch += $scope.sevenFinishNum;
                } else if ((parseInt($(".sevenImgNorm").attr("alt")) != $scope.sevenAtr) && ($scope.sevenFinishNum >= 1)) {
                    $scope.sevenFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".sevenImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularSeven = false;
            } else {
                $rootScope.boolianSpecularSeven = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.eightFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".eightImgNorm").attr("alt")) == parseInt($scope.eight.split("/")[3].split(".")[0])) && ($scope.eightFinishNum < 1)) {
                    $scope.eightFinishNum += 1;
                    $scope.numberFinMatch += $scope.eightFinishNum;
                } else if ((parseInt($(".eightImgNorm").attr("alt")) != parseInt($scope.eight.split("/")[3].split(".")[0])) && ($scope.eightFinishNum >= 1)) {
                    $scope.eightFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".eightImgNorm").attr("alt")) == $scope.eightAtr) && ($scope.eightFinishNum < 1)) {
                    $scope.eightFinishNum += 1;
                    $scope.numberFinMatch += $scope.eightFinishNum;
                } else if ((parseInt($(".eightImgNorm").attr("alt")) != $scope.eightAtr) && ($scope.eightFinishNum >= 1)) {
                    $scope.eightFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".eightImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularEight = false;
            } else {
                $rootScope.boolianSpecularEight = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.nineFinishNumFunc = function () {
            if (!dataStorage.myImageBoolean) {
                if ((parseInt($(".nineImgNorm").attr("alt")) == parseInt($scope.nine.split("/")[3].split(".")[0])) && ($scope.nineFinishNum < 1)) {
                    $scope.nineFinishNum += 1;
                    $scope.numberFinMatch += $scope.nineFinishNum;
                } else if ((parseInt($(".nineImgNorm").attr("alt")) != parseInt($scope.nine.split("/")[3].split(".")[0])) && ($scope.nineFinishNum >= 1)) {
                    $scope.nineFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            } else {
                if ((parseInt($(".nineImgNorm").attr("alt")) == $scope.nineAtr) && ($scope.nineFinishNum < 1)) {
                    $scope.nineFinishNum += 1;
                    $scope.numberFinMatch += $scope.nineFinishNum;
                } else if ((parseInt($(".nineImgNorm").attr("alt")) != $scope.nineAtr) && ($scope.nineFinishNum >= 1)) {
                    $scope.nineFinishNum -= 1;
                    $scope.numberFinMatch -= 1;
                }
            }
            
            if ($(".nineImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $rootScope.boolianSpecularNine = false;
            } else {
                $rootScope.boolianSpecularNine = true;
            }
            console.log($scope.numberFinMatch)
        }
        $scope.oneImg = function () {
            if ($(".oneImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interOne = -1
            } else {
                $scope.interOne = 1
            }
            if (!$scope.oneBool) {
                $scope.oneBool = true;
                $(".oneImgNorm").css("opacity", "0.3");
                
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.two:
                            $scope.two = $scope.one;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.twoAtr = $scope.oneAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.one;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.threeAtr = $scope.oneAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.one;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.fourAtr = $scope.oneAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.one;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.fiveAtr = $scope.oneAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.one;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.sixAtr = $scope.oneAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.one;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.sevenAtr = $scope.oneAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.one;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.eightAtr = $scope.oneAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.one;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interOne + ")");
                            $scope.nineAtr = $scope.oneAtr;
                            $scope.nineFinishNumFunc();
                    }
                    
                    $scope.one = $scope.interim;
                    $scope.oneAtr = $scope.interimAtr;
                    $(".oneImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.oneFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.one;
                $scope.interimAtr = $scope.oneAtr;
                $scope.interimSpecularCss = $(".oneImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.oneBool = false;
                $(".oneImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }
        }
        $scope.twoImg = function () {
            if ($(".twoImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interTwo = -1
            } else {
                $scope.interTwo = 1
            }
            if (!$scope.twoBool) {
                $scope.twoBool = true;
                $(".twoImgNorm").css("opacity", "0.3");
                
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.two;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.oneAtr = $scope.twoAtr;
                            console.log($scope.interTwo)
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.two;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.threeAtr = $scope.twoAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.two;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.fourAtr = $scope.twoAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.two;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.fiveAtr = $scope.twoAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.two;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.sixAtr = $scope.twoAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.two;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.sevenAtr = $scope.twoAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.two;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.eightAtr = $scope.twoAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.two;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interTwo + ")");
                            $scope.nineAtr = $scope.twoAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.two = $scope.interim;
                    $scope.twoAtr = $scope.interimAtr;
                    $(".twoImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    console.log($scope.inter)
                    $scope.twoFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.two;
                $scope.interimAtr = $scope.twoAtr;
                $scope.interimSpecularCss = $(".twoImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.twoBool = false;
                $(".twoImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.threeImg = function () {
            if ($(".threeImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interThree = -1
            } else {
                $scope.interThree = 1
            }
            if (!$scope.threeBool) {
                $scope.threeBool = true;
                $(".threeImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.three;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.oneAtr = $scope.threeAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.three;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.twoAtr = $scope.threeAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.three;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.fourAtr = $scope.threeAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.three;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.fiveAtr = $scope.threeAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.three;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.sixAtr = $scope.threeAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.three;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.sevenAtr = $scope.threeAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.three;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.eightAtr = $scope.threeAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.three;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interThree + ")");
                            $scope.nineAtr = $scope.threeAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.three = $scope.interim;
                    $scope.threeAtr = $scope.interimAtr;
                    $(".threeImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.threeFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.three;
                $scope.interimAtr = $scope.threeAtr;
                $scope.interimSpecularCss = $(".threeImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.threeBool = false;
                $(".threeImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.fourImg = function () {
            if ($(".fourImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interFour = -1
            } else {
                $scope.interFour = 1
            }
            if (!$scope.fourBool) {
                $scope.fourBool = true;
                $(".fourImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.four;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.oneAtr = $scope.fourAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.four;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.twoAtr = $scope.fourAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.four;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.threeAtr = $scope.fourAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.four;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.fiveAtr = $scope.fourAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.four;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.sixAtr = $scope.fourAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.four;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.sevenAtr = $scope.fourAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.four;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.eightAtr = $scope.fourAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.four;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interFour + ")");
                            $scope.nineAtr = $scope.fourAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.four = $scope.interim;
                    $scope.fourAtr = $scope.interimAtr;
                    $(".fourImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.fourFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.four;
                $scope.interimAtr = $scope.fourAtr;
                $scope.interimSpecularCss = $(".fourImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.fourBool = false;
                $(".fourImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.fiveImg = function () {
            if ($(".fiveImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interFive = -1
            } else {
                $scope.interFive = 1
            }
            if (!$scope.fiveBool) {
                $scope.fiveBool = true;
                $(".fiveImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.five;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.oneAtr = $scope.fiveAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.five;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.twoAtr = $scope.fiveAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.five;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.threeAtr = $scope.fiveAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.five;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.fourAtr = $scope.fiveAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.five;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.sixAtr = $scope.fiveAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.five;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.sevenAtr = $scope.fiveAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.five;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.eightAtr = $scope.fiveAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.five;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interFive + ")");
                            $scope.nineAtr = $scope.fiveAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.five = $scope.interim
                    $scope.fiveAtr = $scope.interimAtr;
                    $(".fiveImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.fiveFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.five;
                $scope.interimAtr = $scope.fiveAtr;
                $scope.interimSpecularCss = $(".fiveImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.fiveBool = false;
                $(".fiveImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.sixImg = function () {
            if ($(".sixImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interSix = -1
            } else {
                $scope.interSix = 1
            }
            if (!$scope.sixBool) {
                $scope.sixBool = true;
                $(".sixImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.six;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.oneAtr = $scope.sixAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.six;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.twoAtr = $scope.sixAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.six;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.threeAtr = $scope.sixAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.six;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.fourAtr = $scope.sixAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.six;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.fiveAtr = $scope.sixAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.six;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.sevenAtr = $scope.sixAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.six;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.eightAtr = $scope.sixAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.six;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interSix + ")");
                            $scope.nineAtr = $scope.sixAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.six = $scope.interim;
                    $scope.sixAtr = $scope.interimAtr;
                    $(".sixImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.sixFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.six;
                $scope.interimAtr = $scope.sixAtr;
                $scope.interimSpecularCss = $(".sixImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.sixBool = false;
                $(".sixImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.sevenImg = function () {
            if ($(".sevenImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interSeven = -1
            } else {
                $scope.interSeven = 1
            }
            if (!$scope.sevenBool) {
                $scope.sevenBool = true;
                $(".sevenImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.seven;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.oneAtr = $scope.sevenAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.seven;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.twoAtr = $scope.sevenAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.seven;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.threeAtr = $scope.sevenAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.seven;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.fourAtr = $scope.sevenAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.seven;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.fiveAtr = $scope.sevenAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.seven;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.sixAtr = $scope.sevenAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.seven;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.eightAtr = $scope.sevenAtr;
                            $scope.eightFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.seven;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interSeven + ")");
                            $scope.nineAtr = $scope.sevenAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.seven = $scope.interim;
                    $scope.sevenAtr = $scope.interimAtr;
                    $(".sevenImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.sevenFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.seven;
                $scope.interimAtr = $scope.sevenAtr;
                $scope.interimSpecularCss = $(".sevenImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.sevenBool = false;
                $(".sixImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.eightImg = function () {
            if ($(".eightImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interEight = -1
            } else {
                $scope.interEight = 1
            }
            if (!$scope.eightBool) {
                $scope.eightBool = true;
                $(".eightImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.eight;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.oneAtr = $scope.eightAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.eight;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.twoAtr = $scope.eightAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.eight;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.threeAtr = $scope.eightAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.eight;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.fourAtr = $scope.eightAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.eight;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.fiveAtr = $scope.eightAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.eight;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.sixAtr = $scope.eightAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.eight;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.sevenAtr = $scope.eightAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.nine:
                            $scope.nine = $scope.eight;
                            $(".nineImgNorm").css("transform", "scaleX(" + $scope.interEight + ")");
                            $scope.nineAtr = $scope.eightAtr;
                            $scope.nineFinishNumFunc();
                    }
                    $scope.eight = $scope.interim;
                    $scope.eightAtr = $scope.interimAtr;
                    $(".eightImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.eightFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.eight;
                $scope.interimAtr = $scope.eightAtr;
                $scope.interimSpecularCss = $(".eightImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.eightBool = false;
                $(".eightImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.nineImg = function () {
            if ($(".nineImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                $scope.interNine = -1
            } else {
                $scope.interNine = 1
            }
            if (!$scope.nineBool) {
                $scope.nineBool = true;
                $(".nineImgNorm").css("opacity", "0.3");
                $scope.num += 1;
                if ($scope.num == 2) {
                    switch ($scope.interim) {
                        case $scope.one:
                            $scope.one = $scope.nine;
                            $(".oneImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.oneAtr = $scope.nineAtr;
                            $scope.oneFinishNumFunc();
                            break;
                        case $scope.two:
                            $scope.two = $scope.nine;
                            $(".twoImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.twoAtr = $scope.nineAtr;
                            $scope.twoFinishNumFunc();
                            break;
                        case $scope.three:
                            $scope.three = $scope.nine;
                            $(".threeImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.threeAtr = $scope.nineAtr;
                            $scope.threeFinishNumFunc();
                            break;
                        case $scope.four:
                            $scope.four = $scope.nine;
                            $(".fourImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.fourAtr = $scope.nineAtr;
                            $scope.fourFinishNumFunc();
                            break;
                        case $scope.five:
                            $scope.five = $scope.nine;
                            $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.fiveAtr = $scope.nineAtr;
                            $scope.fiveFinishNumFunc();
                            break;
                        case $scope.six:
                            $scope.six = $scope.nine;
                            $(".sixImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.sixAtr = $scope.nineAtr;
                            $scope.sixFinishNumFunc();
                            break;
                        case $scope.seven:
                            $scope.seven = $scope.nine;
                            $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.sevenAtr = $scope.nineAtr;
                            $scope.sevenFinishNumFunc();
                            break;
                        case $scope.eight:
                            $scope.eight = $scope.nine;
                            $(".eightImgNorm").css("transform", "scaleX(" + $scope.interNine + ")");
                            $scope.eightAtr = $scope.nineAtr;
                            $scope.eightFinishNumFunc();
                    }
                    $scope.nine = $scope.interim;
                    $scope.nineAtr = $scope.interimAtr;
                    $(".nineImgNorm").css("transform", "scaleX(" + $scope.inter + ")");
                    $scope.nineFinishNumFunc();
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } else if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
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
                    $(".oneImgNorm").css("opacity", "1");
                    $(".twoImgNorm").css("opacity", "1");
                    $(".threeImgNorm").css("opacity", "1");
                    $(".fourImgNorm").css("opacity", "1");
                    $(".fiveImgNorm").css("opacity", "1");
                    $(".sixImgNorm").css("opacity", "1");
                    $(".sevenImgNorm").css("opacity", "1");
                    $(".eightImgNorm").css("opacity", "1");
                    $(".nineImgNorm").css("opacity", "1");
                }
                $scope.interim = $scope.nine;
                $scope.interimAtr = $scope.nineAtr;
                $scope.interimSpecularCss = $(".nineImgNorm").css("transform");
                if ($scope.interimSpecularCss == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.inter = -1;
                } else {
                    $scope.inter = 1;
                }
            } else {
                $scope.nineBool = false;
                $(".nineImgNorm").css("opacity", "1");
                $scope.num -= 1;
                $scope.interim = "";
                $scope.interimAtr = "";
                $scope.inter = null;
            }            
        }
        $scope.reloadGame = function () {
            AudioService.cardOpen();
            $scope.timeFin = false;
            $scope.defTimerTimer = parseInt(localStorage.getItem("timerNormalStart"))
            $state.reload();
        }
        $scope.next = function () {
            AudioService.cardOpen();
            if (!dataStorage.myImageBoolean) {
                if (dataStorage.levelNumber <= $rootScope.levelCount) {
                    dataStorage.levelNumber += 1;
                    $scope.timerNormalStart = parseInt(localStorage.getItem("timerNormalStart"))
                    $scope.timerNormalStart += 5
                    localStorage.setItem("timerNormalStart", $scope.timerNormalStart)
                    location.href = "#/app/normalLevel";
                    localStorage.setItem("normalLevel", dataStorage.levelNumber);
                } else {
                    $rootScope.loadingShow = true;
                    //localStorage.setItem("complexity", 3);
                    location.href = "#/app/complexity";
                }

                $scope.numberFinMatch = 0;
                $scope.goodDiv = false;
                $scope.showClickCountNormal = 0;
                $rootScope.loadingShow = true;
                $state.reload();
                
            } else {
                $rootScope.loadingShow = true;
                $scope.goodDiv = false;
                $('.picCamera').css({ "width": "80vw", "height": "80vw" });
                location.href = "#/app/defImgOrMyImg";
            }
            
        }
        $scope.specular = function () {
            console.log($scope.interimSpecular)
            if ($scope.oneBool) {
                console.log("one " + $scope.interimSpecular)
                if ($(".oneImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularOne = true;
                    console.log($rootScope.boolianSpecularOne);
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    }
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularOne = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".oneImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".oneImgNorm").css("opacity", "1");
                $scope.oneBool = false;
                
            } else if ($scope.twoBool) {
                console.log("two " + $scope.interimSpecular);
                if ($(".twoImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularTwo = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    }
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularTwo = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".twoImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".twoImgNorm").css("opacity", "1");
                $scope.twoBool = false;
                
            } else if ($scope.threeBool) {
                console.log("three " + $scope.interimSpecular);
                if ($(".threeImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularThree = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    }
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularThree = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".threeImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".threeImgNorm").css("opacity", "1");
                $scope.threeBool = false;
                
            } else if ($scope.fourBool) {
                console.log("four " + $scope.interimSpecular);
                console.log($(".fourImgNorm").css("transform"))
                if ($(".fourImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    console.log($(".fourImgNorm").css("transform"))
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularFour = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    }
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    console.log($(".fourImgNorm").css("transform"))
                    $scope.interimSpecular = -1;
                    $rootScope.boolianSpecularFour = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    
                }
                $(".fourImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".fourImgNorm").css("opacity", "1");
                $scope.fourBool = false;
                
            } else if ($scope.fiveBool) {
                console.log("five " + $scope.interimSpecular);
                if ($(".fiveImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularFive = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    }
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                    $rootScope.boolianSpecularFive = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".fiveImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".fiveImgNorm").css("opacity", "1");
                $scope.fiveBool = false;
                
            } else if ($scope.sixBool) {
                console.log("six " + $scope.interimSpecular);
                if ($(".sixImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularSix = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } 
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularSix = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".sixImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".sixImgNorm").css("opacity", "1");
                $scope.sixBool = false;
                
            } else if ($scope.sevenBool) {
                console.log("seven " + $scope.interimSpecular);
                if ($(".sevenImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularSeven = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } 
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularSeven = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".sevenImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".sevenImgNorm").css("opacity", "1");
                $scope.sevenBool = false;
                
            } else if ($scope.eightBool) {
                console.log("eight " + $scope.interimSpecular);
                if ($(".eightImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularEight = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    }
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " +
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", "
                        + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularEight = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne != undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".eightImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".eightImgNorm").css("opacity", "1");
                $scope.eightBool = false;
                
            } else if ($scope.nineBool) {
                console.log("nine " + $scope.interimSpecular);
                if ($(".nineImgNorm").css("transform") == "matrix(-1, 0, 0, 1, 0, 0)") {
                    $scope.interimSpecular = 1;
                    $rootScope.boolianSpecularNine = true;
                    if (($scope.numberFinMatch >= 9) && $rootScope.boolianSpecularOne &&
                        $rootScope.boolianSpecularTwo && $rootScope.boolianSpecularThree &&
                        $rootScope.boolianSpecularFour && $rootScope.boolianSpecularFive &&
                        $rootScope.boolianSpecularSix && $rootScope.boolianSpecularSeven &&
                        $rootScope.boolianSpecularEight && $rootScope.boolianSpecularNine) {
                        if (dataStorage.myImageBoolean) {
                            $scope.goodDiv = true;
                        } else {
                            clearTimeout(dataStorage.t);
                            console.log($scope.timerNormalStart)
                            $scope.speedsLevel = $scope.starTimerNormalStart - $scope.timerNormalStart;
                            console.log($scope.speedsLevel)
                            $scope.speedsPercent = ($scope.speedsLevel * 100) / $scope.starTimerNormalStart;
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
                            if ($scope.timerNormalStart == 0) {
                                $scope.timeFin = true
                            }
                            dataStorage.normalStar = $scope.star;
                        }
                        
                    } 
                    console.log($rootScope.boolianSpecularOne + ", " + $rootScope.boolianSpecularTwo + ", " +
                        $rootScope.boolianSpecularThree + ", " + $rootScope.boolianSpecularFour + ", " + 
                        $rootScope.boolianSpecularFive + ", " + $rootScope.boolianSpecularSix + ", " +
                        $rootScope.boolianSpecularSeven + ", " + $rootScope.boolianSpecularEight + ", " + $rootScope.boolianSpecularNine)
                } else {
                    
                    $rootScope.boolianSpecularNine = false;
                    if (!$rootScope.boolianSpecularOne && ($rootScope.boolianSpecularOne !=undefined) &&
                        !$rootScope.boolianSpecularTwo && ($rootScope.boolianSpecularTwo != undefined) &&
                        !$rootScope.boolianSpecularThree && ($rootScope.boolianSpecularThree != undefined) &&
                        !$rootScope.boolianSpecularFour && ($rootScope.boolianSpecularFour != undefined) &&
                        !$rootScope.boolianSpecularFive && ($rootScope.boolianSpecularFive != undefined) &&
                        !$rootScope.boolianSpecularSix && ($rootScope.boolianSpecularSix != undefined) &&
                        !$rootScope.boolianSpecularSeven && ($rootScope.boolianSpecularSeven != undefined) &&
                        !$rootScope.boolianSpecularEight && ($rootScope.boolianSpecularEight != undefined) &&
                        !$rootScope.boolianSpecularNine && ($rootScope.boolianSpecularNine != undefined)) {
                        $scope.specularNoDiv = true;
                        $timeout(function () { $scope.specularNoDiv = false; }, 3000);
                    }
                    $scope.interimSpecular = -1;
                }
                $(".nineImgNorm").css("transform", "scaleX(" + $scope.interimSpecular + ")");
                $scope.num = 0;
                $(".nineImgNorm").css("opacity", "1");
                $scope.nineBool = false;
                
            }
        }
        $scope.showClickCountNormal = 0;
        $scope.showImg = function () {
            AudioService.cardOpen();
            if ($scope.showClickCountNormal < 1) {
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
            $scope.showClickCountNormal += 1;
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
            dataStorage.normalStar = undefined;
            clearTimeout(dataStorage.t);
            $rootScope.loadingShow = true;
            $scope.showClickCountNormal = 0;
            //$scope.picOriginal = "";
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
            $(".oneImgNorm").css("transform", "scaleX(1)");
            $(".twoImgNorm").css("transform", "scaleX(1)");
            $(".threeImgNorm").css("transform", "scaleX(1)");
            $(".fourImgNorm").css("transform", "scaleX(1)");
            $(".fiveImgNorm").css("transform", "scaleX(1)");
            $(".sixImgNorm").css("transform", "scaleX(1)");
            $(".sevenImgNorm").css("transform", "scaleX(1)");
            $(".eightImgNorm").css("transform", "scaleX(1)");
            $(".nineImgNorm").css("transform", "scaleX(1)");
            $scope.goodDiv = false;
            if (dataStorage.myImageBoolean) {
                $('.picCamera').css({ "width": "80vw", "height": "80vw" });
                location.href = "#/app/complexity";
            } else {
                location.href = "#/app/normalLevel";
            }
        }
    }])
})();