// Tutorial 16 - Middleware

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Will take USERs request and processes it
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Middleware');
});

app.listen(3000);
