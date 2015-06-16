'use strict';

describe('Controller: KnobCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var KnobCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KnobCtrl = $controller('KnobCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
