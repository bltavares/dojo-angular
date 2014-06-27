'use strict';

/**
 * @ngdoc function
 * @name dojoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dojoAngularApp
 */
angular.module('dojoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
