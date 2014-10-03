sprinkles.service('markAllAsCompleted', ['$http', function ($http) {
  return function (todos) {
    $http.put('/todos/all_completed.json').then(function() {
        todos.forEach(function (todo) {
        todo.complete = true;
      });
    });
  };
}]);
