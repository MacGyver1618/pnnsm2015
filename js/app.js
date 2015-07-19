angular.module('PNSM2015', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        
        templateUrl: 'etu.html'
      })
      .when('/info', {
        
        templateUrl: 'info.html'
      })
      .when('/ilmo', {
        
        templateUrl: 'ilmo.html'
      })
      .when('/tulokset', {
        
        templateUrl: 'tulokset.html'
      })
      .when('/yhteys', {
        
        templateUrl: 'yhteys.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })