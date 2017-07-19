'use strict';

angular.
  module('weatherApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<weather-card></weather-card>'
        }).
        when('/:cityName', {
          template: '<weather-card></weather-card>'
        }).
        otherwise('/');

    }
  ]);
