'use strict';

angular.
  module('core.forecast').
  factory('Forecast', ['$resource',
    function($resource) {
      return $resource('http://api.openweathermap.org/data/2.5/weather?q=:city',
        {
          APPID: '7c66a53cf6279919e794a86556b15cbc',
          units: 'metric',
          lang: 'en'
        }, 
        {
          getForecast: {
            method: 'GET',
            isArray: false
          }
        });
    }
  ]);
