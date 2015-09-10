app.factory('InboxService', function () {
var anyselected = false;
var selected = false;
var clicked = false;
var messages = [
  {
    subject: "HEY",
    starred: false,
    read: false

  },
  {
    subject: "Do you see this",
    starred: false,
    read: false
  },
  {
    subject: "How are you?",
    starred: false,
    read: false
  },
  {
    subject: "Does this look like gmail",
    starred: false,
    read: false
  }
];

var services = {
  messages: function () {
    console.log(messages);
    return messages;
  },

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

  singleStar: function (message) {
    message.starred = !message.starred;
  },

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

    storagearray: function () {
      var store = [];
      for (var i = 0; i < messages.length; i++) {
        store.push(true);
      }
      console.log(store);
      return store;

    },

    nonstoragearray: function () {
      var store = [];
      for (var i = 0; i < messages.length; i++) {
        store.push(false);
      }
      console.log(store);
      return store;
    },

    readcount: function () {
      var readarray = [];
      for (var i = 0; i < messages.length; i++) {
        if(messages[i].read === false){
          readarray.push(messages[i]);
        }
      } return readarray.length;
    }



}; return services;
});
