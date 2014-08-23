sprinkles.func('tasks_completed', function (todos) {
  var completed = todos.filter(function (todo) {
    return todo.complete;
  });

  return completed.length;
});

sprinkles.func('tasks_incomplete', function (todos) {
  return todos.length - this.tasks_completed(todos);
});
