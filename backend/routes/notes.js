const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");

//save data into database
//Route 1: add nodes using :post /api/notes/addnotes
router.post('/addnotes', [
    body("title", "Enter tilter at least 3 char").isLength({min:3}),
    body("description", "Enter Description with min 5 characters").isLength({min:5}),
    body("tag","Enter tag")
], fetchuser, async (req,res)=>{
    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send({errors: error.array()});
        }
        //destructuring 
        const { title,description, teg}=req.body;
        const note= new Note({
            title,description,teg, user : req.user.id
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

//Route 3: Update existing notes using :id param and :put /api/notes/update:id
router.put("/update/:id", fetchuser ,async (req, res) => {

    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send({errors: error.array()});
        }
        const {title ,description,tag}=req.body;
        const newNote= {};
        if(title) newNote.title=title;
        if(description) newNote.description=description;
        if(tag) newNote.tag=tag;
        
        //find notes to be updated
        let note= await Note.findById(req.params.id);
        if (!note) return res.status(404).send("Not found");

        // Allow update only for authorized person
        if(note.user.toString()!=req.user.id) 
            return res.status(401).send("Not allowed");
        note= await Note.findByIdAndUpdate(req.params.id,{$set:newNote}, { new: true});
        res.send(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occurs");
      }

});
//Route 3: Update existing notes using :id param and :put /api/notes/update:id
router.put("/update/:id", fetchuser ,async (req, res) => {

    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send({errors: error.array()});
        }
        const {title ,description,tag}=req.body;
        const newNote= {};
        if(title) newNote.title=title;
        if(description) newNote.description=description;
        if(tag) newNote.tag=tag;
        
        //find notes to be updated
        let note= await Note.findById(req.params.id);
        if (!note) return res.status(404).send("Not found");

        // Allow update only for authorized person
        if(note.user.toString()!=req.user.id) 
            return res.status(401).send("Not allowed");
        note= await Note.findByIdAndUpdate(req.params.id,{$set:newNote}, { new: true});
        res.send(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occurs");
      }

});
//Route 4: delet existing notes using :id param and Using : Delet /api/notes/delet:id
router.delete("/delete/:id", fetchuser ,async (req, res) => {

    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send({errors: error.array()});
        }
        //find notes to be updated
        let note= await Note.findById(req.params.id);
        if (!note) return res.status(404).send("Not found");
        // Allow delet only for authorized person
        if(note.user.toString()!=req.user.id) 
            return res.status(401).send("Not allowed");
        note= await Note.findByIdAndDelete(req.params.id);
        res.json({"Success": "Succesfully Deleted", note:note});
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occurs");
      }

});

module.exports=router;
