'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('InstagramCtrl', function($scope, $interval, instagram) {
    $scope.pics = [];
    $scope.have = [];
    $scope.orderBy = '-created_time';
    $scope.getMore = function() {
      instagram.fetchPopular(function(data) {
        for(var i=0; i<data.length; i++) {
          if (typeof $scope.have[data[i].id]==="undefined") {
            $scope.pics.push(data[i]) ;
            $scope.have[data[i].id] = "1";
          }
        }
      });
    };
    $scope.getMore();
  });