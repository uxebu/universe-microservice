module.exports = function(config) {

  var Promise = require('bluebird');
  var flowdock = require('flowdock');
  var session = new flowdock.Session(config.user, config.pass);

  var messages = {};

  messages.get = function() {
    var messages = [
      {
        "app":"chat",
        "sent":1317397485508,
        "uuid":"odHapx1VWp7WTrdQ",
        "tags":[],
        "flow": "deadbeefdeadbeef",
        "id":3816534,
        "event":"action",
        "content":{
          "type":"add_twitter_search",
          "description":"flowdock"
        },
        "attachments": [],
        "user":"18"
      },
      {
        "app": "chat",
        "event": "message",
        "tags": [],
        "uuid": "4W_LQEybVaX-gJmi",
        "id": 45590,
        "flow": "deadbeefdeadbeef",
        "content": "Hello World",
        "sent": 1317715340213,
        "attachments": [],
        "user": "2"
      }
    ];
    return Promise.resolve(messages);
  };

  return messages;
}
