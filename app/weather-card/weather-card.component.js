'use strict';

// Register `weatherCard` component, along with its associated controller and template
angular.
  module('weatherCard').
  component('weatherCard', {
    templateUrl: 'weather-card/weather-card.template.html',
    controller: ['$routeParams', 'Forecast',
      function WeatherCardController($routeParams, Forecast) {
        var self = this;
        self.defaultCity = 'Moscow';
        
        self.forecast = Forecast.getForecast({city: self.defaultCity});
        
        self.getIconImageUrl = function(icon) {
          return (icon ? 'http://openweathermap.org/img/w/' + icon + '.png' : '');
        };
        
        self.getForecastByCityName = function(cityName) {
           Forecast.getForecast({city: cityName}).$promise.then(function(promise) {
            self.forecast = promise;
          }, function() {
            self.forecast = Forecast.getForecast({city: self.defaultCity});
          });
        };
        
        self.getDate = function (date) {
          return new Date(date * 1000);
        };
      }
    ]
  });
