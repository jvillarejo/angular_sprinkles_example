sprinkles.service('tasksIncomplete', ['tasksCompleted', function (tasksCompleted) {
  return function (todos) {
    return todos.length - tasksCompleted(todos);
  };
}]);
