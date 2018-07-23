const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var { db } = require('./src/server/db');
const { createFeeding } = require('./src/server/apis/feedings');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/feeding', function (req, res) {
  createFeeding(req.body);
  res.send('Got the post request');
});