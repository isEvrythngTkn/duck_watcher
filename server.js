// import mongoose from 'mongoose';
// import { dbuser, dbpassword, dbURL } from '../config';

// mongoose.connect(`mongodb://${dbuser}:${dbpassword}@${dbURL}`);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const { createFeeding } = require('./src/server/apis/feedings');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/feeding', function (req, res) {
  // 
  createFeeding(req.body);
  res.send('Got the post request');
});