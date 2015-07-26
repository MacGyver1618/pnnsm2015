angular.module('PNSM2015', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        
        templateUrl: 'etu.html'
      })
      .when('/info', {
        
        templateUrl: 'info.html'
      })
      .when('/20v', {
        
        templateUrl: '20v.html'
      })
      .when('/23v', {
        
        templateUrl: '23v.html'
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