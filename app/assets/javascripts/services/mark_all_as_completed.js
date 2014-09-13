sprinkles.service('markAllAsCompleted', ['$http', function ($http) {
  return function (todos) {
    todos.forEach(function (todo) {
      todo.complete = true;
    });

    $http.put('/api/todos/all_completed');
  };
}]);
