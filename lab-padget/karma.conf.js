'use strict';

const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // 'entry.js',
      'test/**/*-test.js',
    ],
    exclude: [
      // 'no',
    ],
    preprocessors: {
      // 'entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // autoWatch: false,
    autoWatch: true,
    browsers: ['Chrome'],
    // browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  });
};
