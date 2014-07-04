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
      $scope.workItems = [{title: 'chocolate', done: true}];
      $scope.personalItems = [];
  })
  .directive('toDoList', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/todo.html',
      scope: { name: '=name', items:'=items' },
      controller: function ($scope) {
        $scope.addItem = function () {
          $scope.items.push({
            title: $scope.newTaskTitle,
            done: false
          });
        }
      }
    };
  });

