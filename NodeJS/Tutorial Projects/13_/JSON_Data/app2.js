// Tutorial 13 - Working w/ JSON Data - Express & Body Parser (Part 2)

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

// Allow us to parse URL encoded forms
// Extened set to false because we aren't dealing with complicated objects
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  // Database call here
  res.json({success: true});
});

app.listen(3000);
