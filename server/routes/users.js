const express = require('express');
const router = express.Router();

router.post('/upload',(req,res)=>{
  const upload = req.body
  db.Contact.create({
    name: upload.name,
    position: upload.position,
    company: upload.company,
    industry: upload.industry,
    phone: upload.phone,
    email: upload.email,
    Address: upload.address,
    times_purchased: 0,
    userId: 1
  })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
})