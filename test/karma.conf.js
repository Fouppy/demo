// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-06-12 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/jquery.easing/js/jquery.easing.js',
      'bower_components/waypoints/lib/noframework.waypoints.min.js',
      'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
      'bower_components/jquery-validation/dist/jquery.validate.js',
      'bower_components/get-style-property/get-style-property.js',
      'bower_components/get-size/get-size.js',
      'bower_components/eventie/eventie.js',
      'bower_components/doc-ready/doc-ready.js',
      'bower_components/eventEmitter/EventEmitter.js',
      'bower_components/matches-selector/matches-selector.js',
      'bower_components/fizzy-ui-utils/utils.js',
      'bower_components/outlayer/outlayer.js',
      'bower_components/masonry/masonry.js',
      'bower_components/imagesloaded/imagesloaded.js',
      'bower_components/angular-masonry/angular-masonry.js',
      'bower_components/jquery-waypoints/waypoints.js',
      'bower_components/angular-waypoints/dist/angular-waypoints.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
