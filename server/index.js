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

app.get('api/users', (req, res) => {

})

app.get('/api/users/:id', (req, res) => {

})

app.post('/api/users', (req, res) => {

})

app.put('/api/users/:id', (req, res) => {

})

app.delete('/api/users/:id', (req, res) => {

})


////////////////////////
////// CONTACTS ////////
////////////////////////

app.get('api/contacts', (req, res) => {

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