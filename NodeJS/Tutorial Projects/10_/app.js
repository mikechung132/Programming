// Tutorial 10 - Getting started with Express.js - Web Framework for NodeJS

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
