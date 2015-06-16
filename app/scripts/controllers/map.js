'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MapCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.map = {
    	center: {
    		latitude: 51.532348,
    		longitude: -0.177908 
    	},
    	zoom: 15
    };
    $scope.options = {
    	// scrollwheel: false,
    	disableDefaultUI: true
    };
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 51.532348,
        longitude: -0.177908
      },
      options: {
      	labelContent: 'test',
        labelAnchor: "100 0",
        labelClass: "marker-labels"
      }
    };
  }]);
