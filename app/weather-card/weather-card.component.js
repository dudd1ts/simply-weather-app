'use strict';

// Register `weatherCard` component, along with its associated controller and template
angular.
  module('weatherCard').
  component('weatherCard', {
    templateUrl: 'weather-card/weather-card.template.html',
    controller: ['$routeParams', '$location', 'Forecast',
      function WeatherCardController($routeParams, $location, Forecast) {
        var self = this;
        self.defaultCity = 'Moscow';
        self.alertMassage = '';
        self.isAlert = false;
        self.orderDays = 'dt';
     
        
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
            $location.path(cityName);
            self.forecast = promise;
            self.daily = promise.list;
            self.today = promise.list[0];
          }, function() {
              setAlert('City not found');
          });
        };
        
        if ($routeParams.cityName === undefined) {
          self.getForecastByCityName(self.defaultCity)
        } else {
          self.getForecastByCityName($routeParams.cityName);
        }
        
        self.getDate = function (date) {
          return new Date(date * 1000);
        };
        
        function setAlert(message) {
          self.isAlert = true;
          self.alertMessage = message;
        };
      }
    ]
  });
