sprinkles.directive('todoForm', ['$rootScope', '$http', function ($rootScope, $http) {
  return {
    restrict: 'A',
    transclude: true,
    template:
      '<form ng-submit="submitForm()" ng-transclude></form>',
    link: function (scope) {
      scope.todo = { title: '', complete: false };

      scope.submitForm = function () {
        $http.post('/todos.json', { todo: scope.todo }).then(function (response) {
          $rootScope.$broadcast('todo:new', response.data);
        });

        scope.todo = { title: '', complete: false };
      };
    }
  }
}]);
