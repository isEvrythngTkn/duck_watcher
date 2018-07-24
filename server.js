const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var { db } = require('./server/db');
const { createFeeding } = require('./server/apis/feedings');
const { formatResponse } = require('./server/apis/utils');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/feeding', async (req, res) => {
  const response = await createFeeding(req.body);
  res.send(response);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));
}

app.listen(process.env.PORT || 5000);