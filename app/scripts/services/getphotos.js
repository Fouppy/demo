'use strict';

/**
 * @ngdoc service
 * @name demoApp.getPhotos
 * @description
 * # getPhotos
 * Factory in the demoApp.
 */
angular.module('demoApp')
  .factory('getPhotos', ['$http', function ($http) {
    // Service logic
    return $http.get('data/photos.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }]);
