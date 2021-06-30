weatherApp.service('cityService', function() {
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days) {
        const weatherKey = 'd6e1a7b5151c4144b3910032213006';
        const weatherAPI = $resource('http://api.weatherapi.com/v1/forecast.json', { get: { method: 'GET' }});

        return weatherAPI.get({ q: city, days: days, key: weatherKey });
    }
}])