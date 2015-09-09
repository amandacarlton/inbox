app.factory('InboxService', function () {
var messages = [
  {
    subject: "HEY",
    read:false

  },
  {
    subject: "Do you see this",
    read:false
  },
  {
    subject: "How are you?",
    read:false
  },
  {
    subject: "Does this look like gmail",
    read:false
  }
];

var services = {
  messages: function () {
    return messages;
  }

}; return services;
});
