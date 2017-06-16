(function () {
    "use strict";

    angular.module("myapp.services", []).factory("myappService", ["$rootScope", "$http", "$ionicPlatform", function ($rootScope, $http, $ionicPlatform) {
        var myappService = {};

        //starts and stops the application waiting indicator
        myappService.wait = function (show) {
            if (show)
                $(".spinner").show();
            else
                $(".spinner").hide();
        };

        return myappService;
    }]).service('dataStorage', function () {
        var levelNumber;
        var exitGame;
        var boolianHardOne = false;
        var boolianHardTwo = false;
        var boolianHardThree = false;
        var boolianHardFour = false;
        var boolianHardFive = false
        var boolianHardSix = false;
        var boolianHardSeven = false;
        var boolianHardEight = false;
        var boolianHardNine = false;
        var myImageBoolean = false;
        var pic;
        var picUrl;
        var myImgLevelEasy;
        var myImgLevelNormal;
        var myImgLevelHard;
        var timerEasy;
        var t;
        var tt;
        var easyStar;
        var normalStar;
        var timerSec;

    }).service('AudioService', function ($rootScope) {
        return {
            cardOpen: function () {
                var audio = new Audio('sounds/clickOn.mp3');
                if ($rootScope.soundButton) {
                    audio.play();
                }
                
            }
        }
    });
})();