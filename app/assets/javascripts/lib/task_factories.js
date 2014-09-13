sprinkles.service('tasksCompleted', [function () {
  return function (todos) {
    var completed = todos.filter(function (todo) {
      return todo.complete;
    });

    return completed.length;
  };
}]);

sprinkles.service('tasksIncomplete', ['tasksCompleted', function (tasksCompleted) {
  return function (todos) {
    return todos.length - tasksCompleted(todos);
  };
}]);

sprinkles.service('markAllAsCompleted', ['$http', function ($http) {
  return function (todos) {
    todos.forEach(function (todo) {
      todo.complete = true;
    });

    $http.put('/api/todos/all_completed');
  };
}]);

sprinkles.service('clearCompleted', ['$http', function ($http) {
  return function (todos) {
    var completed = todos
      .filter(function (todo) {
        return todo.complete;
      }),
      ids = completed.map(function (todo) {
        return todo.id;
      });

      $http.post('/api/todos/destroy_many', { ids: ids })
        .then(function (response) {
          completed.forEach(function (todo) {
            var index = todos.indexOf(todo);
            todos.splice(index, 1);
          });
        });
  };
}]);
