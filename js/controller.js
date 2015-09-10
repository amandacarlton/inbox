

app.controller("InboxController", ['$scope', 'InboxService', '$location', '$localStorage',
    '$sessionStorage', function ($scope, InboxService, $location, $localStorage, $sessionStorage ) {
$scope.name = "amanda";
$scope.clicked = false;
$scope.$storage = $localStorage;

$scope.persist = function () {
  // $scope.item = InboxService.storagearray();
  $scope.$storage.test = InboxService.storagearray();
  console.log($scope.$storage.test);
};

// $scope.anyselected = false;
$scope.messages = InboxService.messages();

$scope.icon = function () {
  this.clicked=!this.clicked;
  InboxService.iconButton();
};

$scope.noicon = function () {
  this.clicked=!this.clicked;
  InboxService.noIconButton();
};

$scope.singleSelect = function () {
  $scope.anyselected = InboxService.singleSelect(this.message);
};


}]);
