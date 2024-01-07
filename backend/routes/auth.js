const express = require('express');
const router = express.Router();
const User  = require('../models/User');
const {body,validationResult} = require('express-validator');


//create a user using: POST- "/api/auth/". Dosen't require auth
router.post('/',[
    body('name', "Enter valid name").isLength({min:3}),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Enter valid password").isLength({min:5})
],(req,res)=>{

    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=> res.json(user))
    .catch(err=> console.log(err));
    res.json({error:'Please enter a valid email', message : err.message});
    // const user=User(req.body);
    // console.log(req.body);
    // user.save();
    // res.send(req.body);
});

module.exports=router;