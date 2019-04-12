require('dotenv').config()
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const axios         = require('axios');
const db            = require('../database/index');
const session       = require('express-session');
const passport      = require('passport');
const bcrypt        = require('bcrypt');
const authRoutes    = require('./routes/auth')
const usersRoute   = require('./routes/users')
const {loginRequired, ensureCorrectUser} = require('./middleware/auth.js')



const errorHandler  = require('../handlers/error')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
// })

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

// app.get('/api/users', (req, res) => {

// db.User.findAll()
//   .then((users) => {
//     res.send(users);
//   }).catch((err) => {
//     console.error(err)
//     res.send(err);
//   });


// })

/////////SEARCH API ///////////////

//added to users.js
// app.post('/api/search', (req, res)=>{
//   const query = req.body;
//   ////// SETTING LOGIC TO HANDLE UNDEFINED VALUES ///////////////////////////
//   if (!query.name){
//     query.name = {[Op.ne]: 'UNDEFINED'}
//   }
//   else {
//     query.name= {[Op.substring]: query.name}
//   }
//   //------------------------------------------------
//   if (!query.company) {
//     query.company = { [Op.ne]: 'UNDEFINED' }
//   }
//   else {
//     query.company = { [Op.eq]: query.company }
//   }
// //------------------------------------------------
//   if (!query.industry) {
//     query.industry = { [Op.ne]: 'UNDEFINED' }
//   }
//   else {
//     query.industry = { [Op.eq]: query.industry }
//   }
//   //----------------------------------------------------

//   if (!query.position) {
//     query.position = { [Op.ne]: 'UNDEFINED' }
//   }
//   else {
//     query.position = { [Op.eq]: query.position }
//   }
//   //------------------------------------------------------
//   if (!query.address) {
//     query.address = { [Op.ne]: 'UNDEFINED' }
//   }
//   else {
//     query.address = { [Op.substring]: query.address }
//   }

//       db.Purchase.findAll({
//         where:{
//           user_id: 1 /// --------------------------------------------------will be changed when passport works
//         }
//       })
//       .then((contacts)=>{
//         let contactId = contacts.map((contact)=> contact.contact_id)

//         db.Contact.findAll({
//           where: {
//             name: query.name,
//             company: query.company,
//             industry: query.industry,
//             position: query.position,
//             Address: query.address,
//             id: { [Op.notIn]: contactId   }
//           }
//         })
//         .then((contacts)=>{
          
//           const noContactInfo = contacts.map((contact)=>{
//             const searchRes = {};
//             searchRes.name = contact.name;
//             searchRes.id = contact.id;
//             searchRes.company = contact.company
//             searchRes.industry = contact.industry;
//             searchRes.position = contact.position;
//             return searchRes;
//           })
//           res.send(noContactInfo)
//         })
//         .catch((err)=>{
//           res.send(err)
//         })

//       })
  
  
// });


////////// UPLOAD API ///////////////////
// app.post('/api/users', usersRoute) ----------------------------------------------------------------------------!!!!!!!!!!!!!!

// app.post('/api/upload', (req, res)=>{
//   const upload = req.body
//   db.Contact.create({
//     name: upload.name,
//     position: upload.position,
//     company: upload.company,
//     industry: upload.industry,
//     phone: upload.phone,
//     email: upload.email,
//     Address: upload.address,
//     times_purchased: 0, 
//     userId: 1
//   })
//   .then((result)=>{
//     console.log(result)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// })
///////////////////////// PURCHASE CONTACT HANDLER ///////////////////////////////////

// app.post('/api/contact_purchase/:contactId', (req, res)=>{
//   const contactId = req.params.contactId.slice(1)
//   db.Purchase.create({
//     user_id: 1, /////------------------------------------------------------------passport todo
//     contact_id: contactId,
//   })
//   .then((result)=>{
//     console.log(result)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// })



/////INDIVIDUAL USER INFO/////////////

// app.get('/api/users/:id', (req, res) => {

<<<<<<< HEAD
// })
=======
  db.User.findOne({where: {id: req.params.id}})
    .then((result) => {
      res.send(result);
    }).catch((err) => {
      res.send('there was an error getting points');
    });


})
>>>>>>> 857cf615790d61b9e765b827aea9cb512e4d31b5

app.use('/api/users', usersRoute) //-----------------------------------------------------------!!!!!!

// app.get('/api/users/:id/uploaded_contacts', (req, res) => {
//   req.params.id = 1;
//   db.User.findAll({ where: { id: req.params.id } })
//     .then((result) => {
//       result[0].getUploads()
//         .then((result) => {
//           res.send(result);
//         }).catch((err) => {
//           res.send('there was an error locating uploaded users');
//         });
//     }).catch((err) => {
//       res.send(err);
//     });

// })


//added to users.js

// app.get('/api/users/:id/purchased_contacts', (req, res) => {
//   let userId = req.params.id.slice(1);
//   db.purchasedContacts(function (contacts) {
//     res.send(contacts)
//   }, userId)


// })


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

// app.get('/api/contacts', (req, res) => {

//   db.Contact.findAll()
//     .then((contacts) => {
//       res.send(contacts);
//     }).catch((err) => {
//       console.error(err)
//       res.send(err);
//     });


// })

app.get('/api/contacts/:id', (req, res) => {

})

app.post('/api/contacts', (req, res) => {

})

app.put('/api/contacts/:id', (req, res) => {

})

app.delete('/api/contacts/:id', (req, res) => {

})

////////////////////////////////////////////
////////////  ERROR HANDLER ////////////////
////////////////////////////////////////////

app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
})


app.use(errorHandler);


///////////////
///SERVER/////
//////////////

//{force: true}
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