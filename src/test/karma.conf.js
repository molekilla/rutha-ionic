
module.exports = function(config) {
  config.set({

    basePath: '../',

    files: [
      'assets/ionic.bundle.min.1.0.0.js',
      '../www/js/deps.js',
      'test/lib/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/**/*.js',
      'test/templates.js',
      'test/unit/**/*.js'
    ],

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });

};
