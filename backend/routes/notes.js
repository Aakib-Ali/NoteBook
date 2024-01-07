const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");

//save data into database
//Route 1: add nodes using :post /api/notes/addnotes
router.post('/addnotes', [
    body("title", "Enter tilter at least 3 char").isLength({min:3}),
    body("description", "Enter Description with min 5 characters").isLength({min:5})
], fetchuser, async (req,res)=>{
    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send({errors: error.array()});
        }
        const { title,description, teg}=req.body;
        const note= new Note({
            title,description,teg, user:req.user.id
        });
        const saveNote=await note.save();
        res.send(saveNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occurs");
      }
});


//Route 2: Get all the notes using : get /api/notes/getnotes
router.get('/getnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports=router;
