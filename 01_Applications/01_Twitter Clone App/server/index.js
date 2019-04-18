const express = require('express');
const cors = require('cors');
const monk = require('monk');
const app = express();

const db = monk('localhost/doggo');
const paws = db.get('paws');

app.use(cors());
app.use(express.json());

/* Test app.get();

app.get('/', (req, res) => {
  res.json({
    message: 'Bark! 🐺'
  });
});
*/

// Grabs JSON data
app.get('/paws', (req, res) => {
  paws
    .find()
    .then(paws => {
      res.json(paws);
    });
});

// Validating inputs on client side
function isValidPawment(pawment){
  return pawment.name && pawment.name.toString().trim() !== '' &&
          pawment.comment && pawment.comment.toString().trim() !== '';
}


// Post data to client side
app.post('/paws', (req, res) => {
  if(isValidPawment(req.body)){
    //insert into db...

    // Post Data from Form
    const pawment = {
      name: req.body.name.toString(),
      comment: req.body.comment.toString(),
      created: new Date()
    };

    paws
      .insert(pawment)
      .then(createdPawment => {
        res.json(createdPawment);
      });
  }else{
    res.status(422);
    res.json({
      message: 'Name and Comment are required!'
    });
  }
});




app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
