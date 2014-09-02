var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/create");

  $stateProvider
    .state('create', {
      url: "/create",
      controller: 'CreateCtrl',
      templateUrl: "app/create/create.tpl.html"
    })
    .state('update', {
      url: "/update",
      controller: 'UpdateCtrl',
      templateUrl: "app/update/update.tpl.html"
    });
});
