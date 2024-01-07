const jwt = require('jsonwebtoken')
const JWT_SECRET = "Thereisnothingwithout$Allah$";

const fetchuser = (req,res,next) =>{
    //get the user form jwt token and add id to the req object;
    //this is for header for api
    const token=req.headers['auth-token'];
    if(!token){
        res.status(401).send({error: "Please Authenticate a valid token"})
    }
    try{
        //verify data and fetch data using token
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    }catch(error){
        res.status(401).send({error:"Invalid Token or it expired!"})
    }
};

module.exports=fetchuser;