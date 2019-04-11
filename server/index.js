const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const axios      = require('axios');
const db         = require('../database/index');
const session    = require('express-session');
const passport   = require('passport');
const bcrypt     = require('bcrypt');
const authRoutes = require('./routes/auth')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//////////////////////////////////////////////////////////
///////////// AUTHENTICATION ////////////////////////////
//////////////////////////////////////////////////////

// app.use(session({secret: 'cat', resave: false, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session());


app.use('/api/auth', authRoutes);







///////////////////////////////////////////////////////////
///////////////////////////////Routes/////////////////////
//////////////////////////////////////////////////////////


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
  req.params.id = 1;
  db.User.findAll({ where: { id: req.params.id } })
    .then((result) => {
      result[0].getUploads()
        .then((result) => {
          res.send(result);
        }).catch((err) => {
          res.send('there was an error locating uploaded users');
        });
    }).catch((err) => {
      res.send(err);
    });

})

app.get('/api/users/:id/purchased_contacts', (req, res) => {
  let userId = req.params.id.slice(1);
  db.purchasedContacts(function (contacts) {
    res.send(contacts)
  }, userId)


})


///////POST/UPDATE/DELETE USER////////////


app.post('/api/users', (req, res) => {

})

app.patch('/api/users/:id', (req, res) => {

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