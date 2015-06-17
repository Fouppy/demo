'use strict';

describe('Controller: SliderCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var SliderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SliderCtrl = $controller('SliderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
