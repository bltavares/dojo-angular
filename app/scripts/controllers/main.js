'use strict';

/**
 * @ngdoc function
 * @name dojoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dojoAngularApp
 */
angular.module('dojoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [];

    $scope.addItem = function () {
      $scope.items.push({
        title: $scope.newTaskTitle,
        done: false
      });

      $scope.newTaskTitle = '';
    };
  });
