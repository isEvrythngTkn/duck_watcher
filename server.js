const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var { db } = require('./src/server/db');
const { createFeeding } = require('./src/server/apis/feedings');
const { formatResponse } = require('./src/server/apis/utils');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3001);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/feeding', async (req, res) => {
  const response = await createFeeding(req.body);
  res.send(response);
});