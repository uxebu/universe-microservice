var messages = require('./messages');
var resources = require('./resources');

module.exports = function(config) {
  messages = messages({user: config.flow.user, pass: config.flow.pass});
  return messages.get()
    .then(resources.fromMessages);
};

