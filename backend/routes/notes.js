const express = require('express');
const router = express.Router();
const Note = require('../models/Note');


//save data into database
router.post('/',(req,res)=>{
    const note=Note(req.body);
    console.log(req.body);
    note.save();
    res.send(req.body);
});

module.exports=router;
