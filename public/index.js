var app = angular.module("mainApp", ["ngRoute", "ui.bootstrap"]);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'projectPages/home/home.html',
            controller: 'HomeController'

        }).
       otherwise({
           redirectTo: '/home'
       });
  }]);