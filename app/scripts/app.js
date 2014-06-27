'use strict';

/**
 * @ngdoc overview
 * @name dojoAngularApp
 * @description
 * # dojoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('dojoAngularApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
