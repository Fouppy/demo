'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
