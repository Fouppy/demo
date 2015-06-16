'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MapCtrl', function ($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
