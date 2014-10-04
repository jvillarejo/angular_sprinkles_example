sprinkles.service('clearCompleted', ['$http', function ($http) {
  return function (todos) {
    var completed = todos
      .filter(function (todo) {
        return todo.complete;
      });

      $http.delete('/todos/destroy_completed.json')
        .then(function (response) {
          completed.forEach(function (todo) {
            var index = todos.indexOf(todo);
            todos.splice(index, 1);
          });
        });
  };
}]);
