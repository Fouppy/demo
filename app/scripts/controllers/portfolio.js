'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('PortfolioCtrl', ['$scope', 'getWorks', function ($scope, getWorks) {
    $scope.filters = { };

  	getWorks.success(function(data) {
  	  $scope.works = data;
  	});
  }]);
