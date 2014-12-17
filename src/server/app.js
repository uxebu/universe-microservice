var express = require('express');
var messages = require('./messages');
var resources = require('./resources');

module.exports = function(config) {
  var app = express();
  messages = messages({user: config.flow.user, pass: config.flow.pass});

  app
    .get('/', function(req, res) {
      messages.get()
      .then(resources.fromMessags)
      .then(function(messages) {
        // console.log(messages);
        res.send(messages);
      }).catch(function() {
        //
      });
    });

  return app;
};

