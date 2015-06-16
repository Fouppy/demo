'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
