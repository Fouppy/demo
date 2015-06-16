'use strict';

/**
 * @ngdoc service
 * @name demoApp.getWorks
 * @description
 * # getWorks
 * Factory in the demoApp.
 */
angular.module('demoApp')
  .factory('getWorks', ['$http', function ($http) {
    // Service logic
    return $http.get('data/works.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }]);