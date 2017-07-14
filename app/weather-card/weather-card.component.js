'use strict';

// Register `weatherCard` component, along with its associated controller and template
angular.
  module('weatherCard').
  component('weatherCard', {
    templateUrl: 'weather-card/weather-card.template.html',
    controller: ['$routeParams', 'Forecast',
      function WeatherCardController($routeParams, Forecast) {
        var self = this;
        self.defaultCity = 'Moscow'
        self.alertMassage = '';
        self.isAlert = false;
     
        
        self.getIconImageUrl = function(icon) {
          return (icon ? 'http://openweathermap.org/img/w/' + icon + '.png' : '');
        };
        
        self.getForecastByCityName = function(cityName) {
          if (cityName === undefined || cityName === '') {
            setAlert('You should enter a city');
            return;
          }
          
          Forecast.getForecast({city: cityName}).$promise.then(function(promise) {
            self.isAlert = false;
            self.forecast = promise;
          }, function() {
              setAlert('City not found');
          });
        };
        
        self.getDate = function (date) {
          return new Date(date * 1000);
        };
        
        if ($routeParams.cityName === undefined) {
          self.forecast = Forecast.getForecast({city: self.defaultCity});
        } else {
          self.getForecastByCityName($routeParams.cityName);
        }
        
        function setAlert(message) {
          self.isAlert = true;
          self.alertMessage = message;
        };
      }
    ]
  });
