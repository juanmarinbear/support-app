myApp.controller('CreateCtrl', ['$scope', 'Parse', function($scope, Parse) {

  $scope.data = {};

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
    if($scope.createForm.$valid) {
      $scope.loading = true;
      var Ticket = Parse.Object.extend('Ticket');
      var ticket = new Ticket($scope.data);
      ticket.save(null, {
        success: function(ticket) {
          $scope.success = true;
          $scope.loading = false;
          $scope.$apply();
        },
        error: function(ticket, error) {
          alert('Failed to create new object, with error code: ' + error.message);
          $scope.loading = false;
        }
      });
    }
    $scope.submitted = true;
  }
}]);
