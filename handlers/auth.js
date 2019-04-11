const db = require('../database/index');
const jwt = require('jsonwebtoken');




exports.signin = function() {

  //finding a user
  //check if their password matches what was sent to the server
  //if it all matches
    //log them in



}


exports.signup = async function(req, res, next) {

try {
    let user = await db.User.create(req.body);
    let {id, username} = user;

    let token = jwt.sign({
      id,
      username
    }, process.env.SECRET);

    return res.status(200).json({
      id, 
      username,
      token
    })

} catch (err){
  if (err.code === 11000){
    err.message = 'Sorry, that username and/or e-mail is already taken';
  }

  return next({
    status: 400,
    message: err.message
  })

}

}