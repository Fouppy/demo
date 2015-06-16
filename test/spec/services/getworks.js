'use strict';

describe('Service: getWorks', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var getWorks;
  beforeEach(inject(function (_getWorks_) {
    getWorks = _getWorks_;
  }));

  it('should do something', function () {
    expect(!!getWorks).toBe(true);
  });

});
