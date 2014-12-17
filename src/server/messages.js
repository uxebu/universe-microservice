module.exports = function(config) {

  var Promise = require('bluebird');
  var flowdock = require('flowdock');
  var session = new flowdock.Session(config.user, config.pass);

  var messages = {};

  messages.get = function() {
    return new Promise(function(resolve, reject) {
      var params = {
        // tags: ['#kb']
      };
      session.get('/flows/uxebu/main/messages', params, function(err, flow, response) {
        if (err) console.log('errr');
        if (err) return reject(err);
        return resolve(response.body);
      });
    });
  };

  return messages;
};
