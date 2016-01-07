module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-mocks.js',
      'app.js',
      'app_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ]
  });
};
