const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const axios      = require('axios');
const db         = require('../database/index')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

///////////////
////Routes/////
///////////////


//////////////////
/////USERS////////
//////////////////


//////GET ALL USERS /////////////

app.get('/api/users', (req, res) => {

db.User.findAll()
  .then((users) => {
    res.send(users);
  }).catch((err) => {
    console.error(err)
    res.send(err);
  });


})


/////INDIVIDUAL USER INFO/////////////

app.get('/api/users/:id', (req, res) => {


  


})



app.get('/api/users/:id/uploaded_contacts', (req, res) => {




})

app.get('/api/users/:id/purchased_contacts', (req, res) => {




})


///////POST/UPDATE/DELETE USER////////////


app.post('/api/users', (req, res) => {

})

app.put('/api/users/:id', (req, res) => {

})

app.delete('/api/users/:id', (req, res) => {

})


////////////////////////
////// CONTACTS ////////
////////////////////////

app.get('/api/contacts', (req, res) => {

  db.Contact.findAll()
    .then((contacts) => {
      res.send(contacts);
    }).catch((err) => {
      console.error(err)
      res.send(err);
    });


})

app.get('/api/contacts/:id', (req, res) => {

})

app.post('/api/contacts', (req, res) => {

})

app.put('/api/contacts/:id', (req, res) => {

})

app.delete('/api/contacts/:id', (req, res) => {

})


//////////////////////
////VERIFICATION/////
////////////////////


///SERVER/////


//// to clean: {force: true}


db.sequelize
  .sync()
  .then(result => {
    console.log('succesfully connected to database', result);
  })
  .catch(err => {
    console.log('could not connect to database', err);
  })



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listening on port 3000!');
});