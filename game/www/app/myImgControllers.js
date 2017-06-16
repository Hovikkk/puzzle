(function () {
    "use strict";

    angular.module("myapp.controllers")
    .controller("myImgCtrl", ["$scope", "$rootScope", "dataStorage", "$state", "AudioService", function ($scope, $rootScope, dataStorage, $state, AudioService) {
        $scope.$on('$ionicView.enter', function () {
            $scope.chooseSource = false;
            $scope.pic = "images/avatar.png";
            $scope.showGoButton = false;
            $rootScope.loadingShow = false;
            $scope.photoGalery = true;
            $scope.$apply();
        });
        $scope.closePopup = function () {
            $scope.chooseSource = false;
        }
        $scope.myImage = function () {
            AudioService.cardOpen();
            $scope.chooseSource = true;
        }
       
        $scope.popupPhoto = function (s) {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            console.log(s);
            $scope.photoGalery = false;
             navigator.camera.getPicture(function (imageUri) {
                 console.log(imageUri)
                 $scope.photoGalery = true;
                 $scope.pic = imageUri;
                 //$rootScope.loadingShow = false;
                 if ($scope.pic != "images/avatar.png") {
                     $scope.chooseSource = false;
                     $('.picCamera').css({ "width": "300px", "height": "300px" });
                     $scope.showGoButton = true;
                 }
                 if (!$scope.photoGalery && ($scope.pic == imageUri)) {
                     console.log("xa")
                     $scope.chooseSource = false;
                     $rootScope.loadingShow = false;
                     
                 }
                 $scope.$apply()
 
             }, null, {
                 quality: 50,
                 destinationType: navigator.camera.DestinationType.FILE_URI,
                 encodingType: Camera.EncodingType.PNG,
                 correctOrientation: true,
                 sourceType: s
             });
             $rootScope.loadingShow = false;
             $scope.chooseSource = false;
        }
       
        $scope.goButton = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            dataStorage.picUrl = $scope.pic;
            
            encodeImage($scope.pic, function (encodedImage) {
                console.log("5")
                //console.log(encodedImage)
                dataStorage.pic = encodedImage;
                $scope.pic = encodedImage;
                if (dataStorage.myImgLevelEasy) {
                    location.href = "#/app/play";
                } else if (dataStorage.myImgLevelNormal) {
                    location.href = "#/app/normalPlay";
                } else if (dataStorage.myImgLevelHard) {
                    location.href = "#/app/hardPlay";
                }
                $scope.$apply();
                //$("#orgImg").attr("src", encodedImage);
                console.log("6")
            });
        }
        function encodeImage(src, callback) {
            console.log("1")
            var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            img = new Image();
            console.log("2")
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, 300, 300);
                callback(canvas.toDataURL());
            }
            console.log("3")
            img.src = src;
            console.log("4")
        }
        $scope.back = function () {
            AudioService.cardOpen();
            $rootScope.loadingShow = true;
            $('.picCamera').css({ "width": "80vw", "height": "80vw" });
            location.href = "#/app/defImgOrMyImg";
        }
    }])
})();