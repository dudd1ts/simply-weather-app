'use strict';

angular.
  module('weatherApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/weather', {
          template: '<weather-card></weather-card>'
        }).
        when('/weather/:cityName', {
          template: '<weather-card></weather-card>'
        }).
        otherwise('/weather');

    }
  ]);
