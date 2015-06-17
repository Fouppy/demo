'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:slider
 * @description
 * # slider
 */
angular.module('demoApp')
  .directive('slider', function ($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
      	images: '='
      },
      link: function(scope) {
      	scope.currentIndex = 0; // Initially the index is at the first image

        scope.setCurrentSlideIndex = function (index) {
          // scope.direction = (index > scope.currentIndex) ? 'left' : 'right';
          scope.currentIndex = index;
        };

        scope.isCurrentSlideIndex = function (index) {
          return scope.currentIndex === index;
        };

        scope.prevSlide = function () {
          // scope.direction = 'left';
          scope.currentIndex = (scope.currentIndex > 0) ? --scope.currentIndex : scope.images.length - 1;
        };

        scope.nextSlide = function () {
          // scope.direction = 'right';
          scope.currentIndex = (scope.currentIndex < scope.images.length - 1) ? ++scope.currentIndex : 0;
        };

    		var timer;
    		var sliderFunc = function() {
    		  timer = $timeout(function() {
    		    // scope.nextSlide();
    		    timer = $timeout(sliderFunc, 5000);
    		  }, 5000);
    		};
    		 
    		sliderFunc();
    		 
    		scope.$on('$destroy', function() {
    		  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
    		});
      },
      templateUrl: 'views/slider.html'
    };
  });