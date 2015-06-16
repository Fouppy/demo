'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('FormCtrl', function ($scope) {
	  $scope.master = {};

	  $scope.update = function(user) {
	    $scope.master = angular.copy(user);
	  };

	  $scope.reset = function(form) {
	    if (form) {
	      form.$setPristine();
	      form.$setUntouched();
	    }
	    $scope.user = angular.copy($scope.master);
	  };

	  $scope.reset();
  });
