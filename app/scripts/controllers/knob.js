'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:KnobCtrl
 * @description
 * # KnobCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('KnobCtrl', ['$scope', function($scope) {
	$scope.knobData = [
		{
			value: 90,
			options: {
				width: 120,
				height: 120,
				fgColor: '#fc0',
		        skin: 'tron',
		        readOnly: true,
		        thickness: .09,
		        inputColor: '#828077',
		        font: '"Lato", Helvetica, Arial, sans-serif',
		        fontWeight: '400'
			},
			title: 'HTML',
			class: 'first'
		},
		{
			value: 90,
			options: {
				width: 120,
				height: 120,
				fgColor: '#fc0',
		        skin: 'tron',
		        readOnly: true,
		        thickness: .09,
		        inputColor: '#828077',
		        font: '"Lato", Helvetica, Arial, sans-serif',
		        fontWeight: '400'
			},
			title: 'CSS'
		},
		{
			value: 90,
			options: {
				width: 120,
				height: 120,
				fgColor: '#fc0',
		        skin: 'tron',
		        readOnly: true,
		        thickness: .09,
		        inputColor: '#828077',
		        font: '"Lato", Helvetica, Arial, sans-serif',
		        fontWeight: '400'
			},
			title: 'Javascript'
		}
	];

    $scope.data = 20;
    $scope.options = {
        width: 75,
        fgColor: '#ffec03',
        skin: 'tron',
        thickness: .2,
        displayPrevious: true
    }

	$scope.formatOptions = function(data) {
		data.formattedOptions = JSON.stringify(data.options).replace(/,/g,"\n");
		return data;
	};
}]);