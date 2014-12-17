#!/usr/bin/env node
var app = require('../src/server/app.js');
var port = parseInt(process.env.PORT, 10) || 9999;
var config = {
  flow: {
    user: process.env.FLOWUSER,
    pass: process.env.FLOWPASS
  }
};

app(config).listen(port);
