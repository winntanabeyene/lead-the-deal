const db = require('../database/index');
const jwt = require('jsonwebtoken');




exports.signin = function() {

}


exports.signup = async function(req, res, next) {

try {
    let user = await db.User.create(req.body);
    let {id, username} = user;

    let 

} catch (err){

}

}