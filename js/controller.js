

app.controller("InboxController", ['$scope', 'InboxService', '$location', '$localStorage',
'$sessionStorage', 'ModalService', '$http', function ($scope, InboxService, $location, $localStorage, $sessionStorage, ModalService, $http ) {

  InboxService.messages().then(function (messages) {

    $scope.messages = messages;
    $scope.readcount();
    $scope.anySelect();
    $scope.filtercheck();
    console.log($scope.$storage.activated);
    console.log($scope.$storage.anyselected);
    console.log($scope.$storage.noneclicked);
    console.log($scope.$storage.allclicked);
  });

  $scope.name = "amanda";
  // $scope.clicked = false;
  $scope.staricon = false;
  $scope.$storage = $localStorage;


  // $scope.persist = function () {
  //   // $scope.item = InboxService.storagearray();
  //   $scope.$storage.test = InboxService.storagearray();
  //   console.log($scope.$storage.test);
  // };

  // $scope.anyselected = false;
  // $scope.messages = InboxService.messages();






  $scope.icon = function () {
    $scope.$storage.allclicked=true;
    $scope.$storage.noneclicked=false;
    // InboxService.iconButton();
  };
  //
  $scope.noicon = function () {
    $scope.$storage.allclicked=false;
    $scope.$storage.noneclicked=true;
    // InboxService.noIconButton();
  };

  $scope.anySelect = function () {
    var test = [];
    for (var i = 0; i < $scope.$storage.activated.length; i++) {
      if($scope.$storage.activated[i]===true){
        test.push(true);
      }
    }
    if(test.length>0 && test.length<$scope.messages.length){
      $scope.$storage.anyselected = true;
      $scope.$storage.allclicked=false;
      $scope.$storage.noneclicked=false;
    }else if($scope.messages.length===test.length){
      $scope.$storage.anyselected = false;
      $scope.$storage.allclicked=true;
      $scope.$storage.noneclicked=false;
    }else if (test.length===0){
      $scope.$storage.anyselected = false;
      $scope.$storage.allclicked=false;
      $scope.$storage.noneclicked=true;
    }
  };

  $scope.readcount = function () {
    var unreadarray = [];
    for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.messages[i].read === false){
        unreadarray.push($scope.messages[i]);
      }
    }
    $scope.unreadcount= unreadarray.length;
  };



  $scope.clickedlist = function () {
    $scope.$storage.activated = InboxService.storagearray($scope.messages);
    $scope.anySelect();
  };

  $scope.nonclickedlist = function () {
    $scope.$storage.activated = InboxService.nonstoragearray($scope.messages);
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
        $http.post('http://localhost:3000/api/read', $scope.messages[i]);
      }
    }
    $scope.readcount();

  };

  $scope.unread = function () {
    for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
        $scope.messages[i].read = false;
        $http.post('http://localhost:3000/api/read', $scope.messages[i]);

      }
    } $scope.readcount();

  };

  $scope.delete = function () {
    for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
        $http.post('http://localhost:3000/api/delete', $scope.messages[i]);
        $scope.messages.splice(i,1);
        $scope.$storage.activated.splice(i,1);
      }
    } $scope.readcount();
    $scope.anySelect();
  };

  $scope.create = function (filter, i) {
    if($scope.$storage.activated[i]===true){
      if(filter === "createnew")
      $scope.showcreate = true;
    }
  };

  $scope.addlabel = function (filter) {
    for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
        if(filter != "applyfilter")
        if(filter != "createnew")
        if($scope.messages[i].filters.indexOf(filter)===-1){
          $scope.messages[i].filters.push(filter);
          $http.post('http://localhost:3000/api/labels', $scope.messages[i]);
        }
      } $scope.create(filter, i);
    }

  };

  $scope.addUniqueLabel = function (filter) {
    for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
        if($scope.messages[i].filters.indexOf(filter)===-1){
          $scope.messages[i].filters.push(filter);
        }
      } $scope.showcreate= false;
    }
  };

  $scope.removeLabel = function (filter) {
    for (var i = 0; i < $scope.messages.length; i++) {
      if($scope.$storage.activated[i]===true){
        var filterIndex = $scope.messages[i].filters.indexOf(filter);
        $scope.messages[i].filters.splice(filterIndex,1);
        $http.post('http://localhost:3000/api/labels', $scope.messages[i]);
      }
    }
  };

  $scope.stardb = function (message) {
    return InboxService.starredmessages(message).then(function (messages) {

     $scope.messages = messages;
   });

  };

  $scope.filtercheck = function () {
    var selectlabel = ["Apply Filter", "Create New"];
    for (var i = 0; i < $scope.messages.length; i++) {
      for (var j = 0; j < $scope.messages[i].filters.length; j++) {
        if(selectlabel.indexOf($scope.messages[i].filters[j])<0){
          selectlabel.push($scope.messages[i].filters[j]);
        }
      }
    } $scope.filters= selectlabel;
  };
  // $scope.readdb = function () {
  //
  //   InboxService.readmessages(message);
  // };







}]);
