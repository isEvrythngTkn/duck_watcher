var mongoose = require('mongoose');
var { dbuser, dbpassword, dbURL } = require('../config');
console.log('db configs', dbuser, dbpassword, dbURL);

mongoose.connect(`mongodb://${dbuser}:${dbpassword}@${dbURL}`);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = { db };