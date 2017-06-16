(function () {
    'use strict';

    angular
      .module('myapp')
      .directive('soundTrack', soundTrack);

    function soundTrack() {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                var audioSrc = attrs.file,
                  audio = angular.element('<audio/>'),
                  inner = angular.element('<source/>'),
                  img = angular.element('<img/>');

                scope.imgPath = "images/play/sound.png";

                inner.attr('src', audioSrc);
                audio.attr('autoplay', true);
                audio.attr('control', false);
                audio.attr('loop', true);
                img.attr('src', scope.imgPath);
                img.attr('class', "imageSoundIcon");

                element.append(audio);
                audio.append(inner);
                element.append(img);
                scope.togglePlay = function () {
                    if (audio[0].paused) {
                        audio[0].play();
                        img[0].src = "images/play/sound.png";
                    } else {
                        audio[0].pause();
                        img[0].src = "images/play/sound-no.png";
                    }
                };
            }
        };
    }
})();