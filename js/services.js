app.factory('InboxService', function ($http) {
var anyselected = false;
var selected = false;
var clicked = false;
// var messages = [
//   {
//     subject: "HEY",
//     starred: false,
//     read: false,
//     filters:[]
//
//   },
//   {
//     subject: "Do you see this",
//     starred: false,
//     read: false,
//     filters:[]
//   },
//   {
//     subject: "How are you?",
//     starred: false,
//     read: false,
//     filters:[]
//   },
//   {
//     subject: "Does this look like gmail",
//     starred: false,
//     read: false,
//     filters:[]
//   }
// ];

var services = {
  // messages: function () {
  //   return messages;
  // },

  // iconButton: function () {
  //   for (var i = 0; i < messages.length; i++) {
  //     messages[i].selected = true;
  //   }
  // },
  // noIconButton: function () {
  //   for (var i = 0; i < messages.length; i++) {
  //     messages[i].selected = false;
  //   }
  // },



  // singleSelect: function (message) {
  //   message.selected= !message.selected;
  //
  //   var selectarr=[];
  //     for (var i = 0; i < messages.length; i++) {
  //       var place = selectarr.indexOf(messages[i]);
  //       if(messages[i].selected === true){
  //         selectarr.push(messages[i]);
  //       }else{
  //         if(selectarr.indexOf(messages[i])>-1){
  //           selectarr.splice(place,1);
  //         }
  //       }
  //     } if(selectarr.length >0){
  //       anyselected = true;
  //     }else{
  //       anyselected = false;
  //     }
  //     return anyselected;
  //   },
    messages: function () {
      return $http.get('http://localhost:3000/api/messages').then(function(response) {
    return response.data;
  });
},

    storagearray: function (messages) {
      var store = [];
      for (var i = 0; i < messages.length; i++) {
        store.push(true);
      }

      return store;

    },

    nonstoragearray: function (messages) {
      var store = [];
      for (var i = 0; i < messages.length; i++) {
        store.push(false);
      }

      return store;
    },

    readcount: function () {
      var readarray = [];
      for (var i = 0; i < messages.length; i++) {
        if(messages[i].read === false){
          readarray.push(messages[i]);
        }
      } console.log(readarray);
      return readarray.length;
    },


    starredmessages: function (message) {
    return $http.post('http://localhost:3000/api/starred', message).then(function (messages) {
        return messages.data;
      });

    },

    readmessages: function (message) {
      console.log(message);
      $http.post('http://localhost:3000/api/read', message);
    },




}; return services;
});
