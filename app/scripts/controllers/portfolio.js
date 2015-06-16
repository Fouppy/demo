'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('PortfolioCtrl', ['$scope', '$timeout', 'getWorks', function ($scope, $timeout, getWorks) {
    $scope.filters = { };

  	getWorks.success(function(data) {
  	  $scope.works = data;
  	});

	$scope.$watch('works', function (newValue, oldValue) {
	  $timeout(function() {
	    $('[data-lightbox="image"]').each(function() {
	      $(this).magnificPopup({
	        type:'image',
	        closeOnContentClick: !0,
	        closeBtnInside: !1,
	        fixedContentPos: !0,
	        mainClass: "mfp-zoom-in",
	        image: {
	            verticalFit: !0
	        }
	     });
	    });
	  });
	});
  }]);
