var app = angular.module("Mail", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/inbox.html',
        controller: 'InboxController'
      });

      $locationProvider.html5Mode(true);
  });
