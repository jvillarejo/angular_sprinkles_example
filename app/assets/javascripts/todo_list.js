sprinkles.directive('todoList', function ($http) {
  function pushUpdate (todo) {
    $http.put('/api/todos/' + todo.id, { todo: todo }).then(function (response) {
      todo = response.data;
    });
  }

  return {
    restrict: 'A',
    scope: {
      todos: '='
    },
    template:
      '<ul id="todo-list">' +
        '<li ng-repeat="todo in todos track by $index" ng-class="{ completed: todo.complete, editing: todo.editing }">' +
          '<div class="view">' +
            '<input class="toggle" type="checkbox" ng-model="todo.complete" ng-click="complete(todo)">' +
            '<label ng-bind="todo.title" ng-dblclick="todo.editing = true"></label>' +
            '<button ng-click="destroy(todo)" class="destroy"></button>' +
          '</div>' +
          '<form ng-submit="changeTitle(todo)">' +
            '<input class="edit" ng-model="todo.title" ng-blur="changeTitle(todo)" />' +
          '</form>' +
        '</li>' +
      '</ul>',
    link: function (scope) {
      scope.changeTitle = function (todo) {
        todo.editing = false;
        pushUpdate(todo);
      };

      scope.complete = function (todo) {
        todo.complete = !todo.complete;
        pushUpdate(todo);
      };

      scope.destroy = function (todo) {
        var index = scope.todos.indexOf(todo);

        $http.delete('/api/todos/' + todo.id).then(function (response) {
          scope.todos.splice(index, 1);
        });
      };

      scope.$on('todo:new', function (ev, todo) {
        scope.todos.unshift(todo);
      });
    }
  }
});
