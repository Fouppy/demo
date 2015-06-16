'use strict';

describe('Filter: portfolio', function () {

  // load the filter's module
  beforeEach(module('demoApp'));

  // initialize a new instance of the filter before each test
  var portfolio;
  beforeEach(inject(function ($filter) {
    portfolio = $filter('portfolio');
  }));

  it('should return the input prefixed with "portfolio filter:"', function () {
    var text = 'angularjs';
    expect(portfolio(text)).toBe('portfolio filter: ' + text);
  });

});
