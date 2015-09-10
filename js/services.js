app.factory('InboxService', function () {
var anyselected = false;
var messages = [
  {
    subject: "HEY",
    selected:false

  },
  {
    subject: "Do you see this",
    selected:false
  },
  {
    subject: "How are you?",
    selected:false
  },
  {
    subject: "Does this look like gmail",
    selected:false
  }
];

var services = {
  messages: function () {
    return messages;
  },

  iconButton: function () {
    for (var i = 0; i < messages.length; i++) {
      messages[i].selected = true;
    }
  },
  noIconButton: function () {
    for (var i = 0; i < messages.length; i++) {
      messages[i].selected = false;
    }
  },

  singleSelect: function (message) {
    message.selected= !message.selected;
    var selectarr=[];
      for (var i = 0; i < messages.length; i++) {
        var place = selectarr.indexOf(messages[i]);
        if(messages[i].selected === true){
          selectarr.push(messages[i]);
        }else{
          if(selectarr.indexOf(messages[i])>-1){
            selectarr.splice(place,1);
          }
        }
      } if(selectarr.length >0){
        anyselected = true;
      }else{
        anyselected = false;
      } 
      return anyselected;
    },

    storagearray: function () {
      var store = [];
      for (var i = 0; i < messages.length; i++) {
        store.push(messages[i].selected);
      }
      return store;
    }




}; return services;
});
