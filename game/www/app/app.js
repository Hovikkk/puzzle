(function () {
    "use strict";

    angular.module("myapp", ["ionic", "ngCordova", "myapp.controllers", "myapp.services"])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                var st = location.href.split("#")[1];
                console.log(st)
                if (st == "/app/home") {
                    console.log("mta")
                    $ionicPlatform.registerBackButtonAction(function (event) {
                        console.log("lala")
                        dataStorage.exitGame = true;
                        $scope.$apply();
                    }, 100);
                } else {
                    console.log("ba")
                }
                
                $ionicPlatform.registerBackButtonAction(function (event) {
                    console.log("push back button ");
                    event.preventDefault();
                }, 100);
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    if (cordova.plugins.Keyboard.hideKeyboardAccessoryBar) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    }
                }
                if (window.StatusBar) {
                    StatusBar.hide();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("app", {
                url: "/app",
                abstract: true,
                templateUrl: "app/templates/view-menu.html",
                controller: "appCtrl"
            })
            .state("app.home", {
                url: "/home",
                templateUrl: "app/templates/view-home.html",
                controller: "homeCtrl"
            })
            .state("app.defImgOrMyImg", {
                url: "/defImgOrMyImg",
                templateUrl: "app/templates/defImgOrMyImg.html",
                controller: "defImgOrMyImgCtrl"
            })
            .state("app.myImg", {
                url: "/myImg",
                templateUrl: "app/templates/myImg.html",
                controller: "myImgCtrl"
            })
            .state("app.complexity", {
                url: "/complexity",
                templateUrl: "app/templates/complexity.html",
                controller: "complexityCtrl"
            })
            .state("app.level", {
                url: "/level",
                templateUrl: "app/templates/level.html",
                controller: "levelCtrl"
            })
            .state("app.normalLevel", {
                url: "/normalLevel",
                templateUrl: "app/templates/normalLevel.html",
                controller: "normalLevelCtrl"
            })
            .state("app.normalPlay", {
                url: "/normalPlay",
                templateUrl: "app/templates/normalPlay.html",
                controller: "normalPlayCtrl"
            })
            .state("app.hardLevel", {
                url: "/hardLevel",
                templateUrl: "app/templates/hardLevel.html",
                controller: "hardLevelCtrl"
            })
            .state("app.hardPlay", {
                url: "/hardPlay",
                templateUrl: "app/templates/hardPlay.html",
                controller: "hardPlayCtrl"
            })
            .state("app.play", {
                url: "/play",
                templateUrl: "app/templates/play.html",
                controller: "playCtrl"
            })
            .state("app.rules", {
                url: "/rules",
                templateUrl: "app/templates/rules.html",
                controller: "rulesCtrl"
            })
            .state("app.language", {
                url: "/language",
                templateUrl: "app/templates/language.html",
                controller: "languageCtrl"
            })
            .state("app.setings", {
                url: "/setings",
                templateUrl: "app/templates/setings.html",
                controller: "setingsCtrl",
                controllerAs: "setingsCtrl"
            });
            $urlRouterProvider.otherwise("/app/home");
        });
})();