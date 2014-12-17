#!/usr/bin/env node
var app = require('../src/server/app.js');
var port = parseInt(process.env.PORT, 10) || 9999;

var isUserConfigured = 'FLOWUSER' in process.env;
var isPasswordConfigured = 'FLOWPASS' in process.env;
if (!isUserConfigured || !isPasswordConfigured) {
  console.error('Please export FLOWUSER and FLOWPASS for the app to work.');
  process.exit(-1);
}

var config = {
  flow: {
    user: process.env.FLOWUSER,
    pass: process.env.FLOWPASS
  }
};

app(config).listen(port);
