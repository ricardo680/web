'use strict';

/**
 * @ngdoc overview
 * @name goShieldApp
 * @description
 * # goShieldApp
 *
 * Main module of the application.
 */
angular
  .module('goShieldApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'smart-table',
    'controllers', 
    'services', 
    'directives',
    'perfect_scrollbar',
    'ngMap'
    ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .when('/adjusters', {
        templateUrl: 'views/adjusters.html'
      })
      .when('/users', {
        templateUrl: 'views/users.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/search', {
        templateUrl: 'views/search.html'//,
        //controller: 'MainCtrl'
        //controllerAs: 'reporte'
      })
      .otherwise({
        redirectTo: '/'
      });



      $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  });




angular.module('services', []);
angular.module('controllers', []);
angular.module('directives', []);
//angular.module('filters', []);
