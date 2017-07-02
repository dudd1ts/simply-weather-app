'use strict';

angular.
  module('weatherApp').
  config(['$locationProvider' ,'$routeProvider', '$qProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/weater', {
          template: '<weather-card></weather-card>'
        }).
        otherwise('/weater');

    }
  ]);