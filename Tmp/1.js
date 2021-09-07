debugger
global.api = {};
api.fs = require('fs');
api.http = require('http');
require('./db');
require('./application');
global.db = new api.db.createDatabase();

// In DB module: db.js
api.db = {};
api.db.createDatabase = function() {
  console.log('Create DB');
};




