'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('dojoAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('has items', function () {
    expect(scope.items).toEqual([]);
  });

  it('can add items', function () {
    scope.newTaskTitle = 'Hello';
    
    scope.addItem();
    
    expect(scope.items).toEqual([{ title: 'Hello', done: false }]);
    expect(scope.newTaskTitle).toEqual('');
  }); 

});
