var express = require('express');
var generate = require('../generate');

module.exports = function(config) {
  var app = express();

  app.get('/', function(req, res) {
    generate(config).then(function(result) {
      res.send(result);
    }).catch(function(err) {
      res.send(err);
    });
  });

  return app;
};

