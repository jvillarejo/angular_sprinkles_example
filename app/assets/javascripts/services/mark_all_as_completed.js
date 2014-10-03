sprinkles.service('markAllAsCompleted', ['$http', function ($http) {
  return function (todos) {
    todos.forEach(function (todo) {
      todo.complete = true;
    });

    $http.put('/todos/all_completed.json');
  };
}]);
