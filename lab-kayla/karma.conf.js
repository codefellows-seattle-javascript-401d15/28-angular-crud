// Generated on Mon Jun 05 2017 13:03:26 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    basePath: '',


    frameworks: ['jasmine'],

    files: [
      'entry.js'
    ],

    exclude: [
    ],


    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,


    colors: true,


    logLevel: config.LOG_INFO,


    autoWatch: false,


    browsers: ['Chrome'],


    singleRun: false,

    concurrency: Infinity
  })
}
