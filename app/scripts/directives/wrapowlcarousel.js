'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:wrapOwlcarousel
 * @description
 * # wrapOwlcarousel
 */
angular.module('demoApp')
  .directive('wrapOwlcarousel', function () { 
    return {  
      restrict: 'E',  
      link: function (scope, element, attrs) {  
        var options = scope.$eval($(element).attr('data-options'));  
        $(element).owlCarousel(options);  
      }  
    };
  });