const express = require('express');
const router = express.Router();
const User  = require('../models/User');
const {body,validationResult} = require('express-validator');


//create a user using: POST- "/api/auth/". Dosen't require auth create user without login
router.post('/createuser',[
    body('name', "Enter valid name").isLength({min:3}),
    body('email', "Enter a valid Email").isEmail(),
    body('password', "Enter valid password").isLength({min:5})
],async (req,res)=>{

    // if theree is error return bed request
    const error=validationResult(req);
    try{
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array() });
    }
    
    // create user with velidation that there is user with same email or not
    let user =await User.findOne({ email: req.body.email});
    if(user){
        return res.status(400).json("Emaile already exists");
    } 
    //create user and this is a promiss
    user =  await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.send({user});
}catch(error){
    console.log(error.message);
    res.status(500).send("Some error occured");
}
    
});

module.exports=router;