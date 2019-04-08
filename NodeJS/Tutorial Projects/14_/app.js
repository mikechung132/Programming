// Tutorial 14 - User Input Validation w/ Express & JOI (PART 1)

const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

// Allow us to parse URL encoded forms
// Extened set to false because we aren't dealing with complicated objects
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required()
  });

  Joi.validate(req.body, schema, (err, result) => {
    if(err){
      console.log(err);
      res.send('An error has occurred.');
    }
    console.log(result);
    // Executes if no error occurs
    res.send('Successfully posted data.')
  })
});

app.listen(3000);
