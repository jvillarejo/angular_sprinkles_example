sprinkles.service('tasks_completed', [function () {
  return function (todos) {
    var completed = todos.filter(function (todo) {
      return todo.complete;
    });

    return completed.length;
  };
}]);

sprinkles.service('tasks_incomplete', ['tasks_completed', function (tasks_completed) {
  return function (todos) {
    return todos.length - tasks_completed(todos);
  };
}]);

sprinkles.service('mark_all_as_completed', ['$http', function ($http) {
  return function (todos) {
    todos.forEach(function (todo) {
      todo.complete = true;
    });

    $http.put('/api/todos/all_completed');
  };
}]);

sprinkles.service('clear_completed', ['$http', function ($http) {
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
