// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client: {
      captureConsole: false,
      // clearContext: false
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/frontend'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    junitReporter: {
      outputDir: './test-results',
      outputFile: 'unit-test-results.xml'
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    customLaunchers: {
      Headless: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    // browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
