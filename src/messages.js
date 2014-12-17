module.exports = function(config) {

  var Promise = require('bluebird');
  var Client = require('node-rest-client').Client;

  var messages = {};
  var client = new Client({user: config.user, password: config.pass});
  var url = 'https://api.flowdock.com/flows/uxebu/main/messages?tags=kb';

  messages.get = function() {
    return new Promise(function(resolve, reject) {
      client.get(url, function(data) {
        resolve(JSON.parse(data));
      }).on('error', reject);
    });
  };

  return messages;
};
