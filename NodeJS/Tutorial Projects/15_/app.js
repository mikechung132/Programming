// Tutorial 15 - Getting started w/ EJS Templates w/ Express

const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => {
  res.render('index', {data: {userQuery: req.params.userQuery,
                              searchResults: ['item1', 'item2', 'item3'],
                              loggedIn: true,
                              username: 'Nimbus'}});
});

app.listen(3000);
