sprinkles.service('tasksCompleted', [function () {
  return function (todos) {
    var completed = todos.filter(function (todo) {
      return todo.complete;
    });

    return completed.length;
  };
}]);
