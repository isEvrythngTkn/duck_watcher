var mongoose = require('mongoose');
var { dbuser, dbpassword, dbURL } = require('./config');

mongoose.connect(`mongodb://${dbuser}:${dbpassword}@${dbURL}`);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = { db };