myApp.controller('CreateCtrl', ['$scope', function($scope) {
  $scope.data = {};

  $scope.submit = function() {
    console.log("Submit!");
  }
}]);
