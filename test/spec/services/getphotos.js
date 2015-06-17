'use strict';

describe('Service: getPhotos', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var getPhotos;
  beforeEach(inject(function (_getPhotos_) {
    getPhotos = _getPhotos_;
  }));

  it('should do something', function () {
    expect(!!getPhotos).toBe(true);
  });

});
