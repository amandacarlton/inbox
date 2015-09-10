

app.controller("InboxController", ['$scope', 'InboxService', '$location', '$localStorage',
    '$sessionStorage', function ($scope, InboxService, $location, $localStorage, $sessionStorage ) {
$scope.name = "amanda";
$scope.clicked = false;
$scope.staricon = false;
$scope.$storage = $localStorage;


// $scope.persist = function () {
//   // $scope.item = InboxService.storagearray();
//   $scope.$storage.test = InboxService.storagearray();
//   console.log($scope.$storage.test);
// };

// $scope.anyselected = false;
$scope.messages = InboxService.messages();


$scope.star = function () {
  this.staricon = !this.staricon;
};

$scope.singleStar = function () {
  InboxService.singleStar(this.message);
};

$scope.icon = function () {
  $scope.clicked=true;
  // InboxService.iconButton();
};
//
$scope.noicon = function () {
  $scope.clicked=false;
  // InboxService.noIconButton();
};

$scope.anySelect = function () {
  var test = [];
  for (var i = 0; i < $scope.$storage.activated.length; i++) {
    if($scope.$storage.activated[i]===true){
      test.push(true);
    }
  }
  if(test.length>0){
    $scope.anyselected = true;
  }else{
    $scope.anyselected = false;
  }
};

$scope.readcount = InboxService.readcount();
console.log($scope.readcount);

$scope.clickedlist = function () {
  $scope.$storage.activated = InboxService.storagearray();
};

$scope.nonclickedlist = function () {
  $scope.$storage.activated = InboxService.nonstoragearray();
  $scope.anySelect();
};

$scope.submitindex = function (num) {
  var value = $scope.$storage.activated[num];
  if (value === true){
    $scope.$storage.activated[num] = false;
  }else{
    $scope.$storage.activated[num] = true;
  } console.log($scope.$storage.activated);
};

$scope.read = function () {
  for (var i = 0; i < $scope.messages.length; i++) {
    if($scope.$storage.activated[i]===true){
      $scope.messages[i].read = true;
    }
  }
$scope.readcount = InboxService.readcount();
};

$scope.unread = function () {
  console.log("working");
  for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
          $scope.messages[i].read = false;
  }
} $scope.readcount = InboxService.readcount();
};

$scope.delete = function () {
  for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
          $scope.messages.splice(i,1);
          $scope.$storage.activated.splice(i,1);
  }
} $scope.readcount = InboxService.readcount();
  $scope.anySelect();
};

$scope.addlabel = function (filter) {
  console.log(filter);
  for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
        if(filter != "applyfilter")
          if($scope.messages[i].filters.indexOf(filter)===-1)
          $scope.messages[i].filters.push(filter);
  }
}
};

}]);
