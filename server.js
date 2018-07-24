const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var { db } = require('./src/server/db');
const { createFeeding } = require('./src/server/apis/feedings');
const { formatResponse } = require('./src/server/apis/utils');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 5000);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/feeding', async (req, res) => {
  const response = await createFeeding(req.body);
  res.send(response);
});