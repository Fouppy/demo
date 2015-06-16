'use strict';

describe('Filter: works', function () {

  // load the filter's module
  beforeEach(module('demoApp'));

  // initialize a new instance of the filter before each test
  var works;
  beforeEach(inject(function ($filter) {
    works = $filter('works');
  }));

  it('should return the input prefixed with "works filter:"', function () {
    var text = 'angularjs';
    expect(works(text)).toBe('works filter: ' + text);
  });

});
