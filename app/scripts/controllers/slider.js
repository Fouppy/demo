'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:SliderCtrl
 * @description
 * # SliderCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('SliderCtrl', ['$scope', 'getPhotos', function ($scope, getPhotos) {
  	getPhotos.success(function(data) {
  	  $scope.images = data;
  	});
  }]);
