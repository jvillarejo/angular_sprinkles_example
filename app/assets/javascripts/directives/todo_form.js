sprinkles.directive('todoForm', ['$rootScope', '$http', function ($rootScope, $http) {
  return {
    restrict: 'A',
    scope: true,
    template:
      '<form ng-submit="submitForm()">' +
        '<input type="text" ng-model="todo.title" id="new-todo" placeholder="What needs to be done?" autofocus>' +
      '</form>',
    link: function (scope) {
      scope.todo = { title: '', complete: false };

      scope.submitForm = function () {
        $http.post('/api/todos', { todo: scope.todo }).then(function (response) {
          $rootScope.$broadcast('todo:new', response.data);
        });

        scope.todo = { title: '', complete: false };
      };
    }
  }
}]);
