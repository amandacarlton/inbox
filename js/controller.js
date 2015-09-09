

app.controller("InboxController", ['$scope', 'InboxService', '$location',  function ($scope, InboxService, $location) {
$scope.name = "amanda";
$scope.messages = InboxService.messages();
}]);
