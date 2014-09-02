myApp.controller('CreateCtrl', ['$scope', function($scope) {

  $scope.data = {};
  $scope.submitted;


  $scope.subject = [
    { label: 'Issue', value: 'issue' },
    { label: 'Complaint', value: 'complaint' },
    { label: 'Suggestion', value: 'suggestion' }
  ];

  $scope.service = [
    { label: 'Residential', value: 'residential' },
    { label: 'Business', value: 'business' },
    { label: 'Dedicated', value: 'dedicated' }
  ];

  $scope.issue = [
    { label: 'Disconnection', value: 'disconnection' },
    { label: 'Slugginess', value: 'slugginess' },
    { label: 'Other', value: 'other' }
  ];

  $scope.submit = function() {
    $scope.submitted = true;
    console.log("Submit!");
  }
}]);
