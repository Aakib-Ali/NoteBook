import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const {addNote } = useContext(noteContext);
    const [note,setNotes]=useState({"title": "","Description": "", "tag":"general"});

    const hendleAddnote = (e) =>{
        e.preventDefault();
        addNote(note);
    }

    //it will overwrite the value of name like text field name is title and value also be title  so we stor value in title
    const hendleOnClick = (e) =>{
        setNotes({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className="container my-3">
        <form className="my-3">
        <h2 className="mx-3">Add notes</h2>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" onChange={hendleOnClick} name="title" placeholder="Title"/>
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Example textarea</label>
            <textarea onChange={hendleOnClick} className="form-control" id="Description" name="Description" rows="3"></textarea>
            <button type="button" className="btn btn-primary my-3" onClick={hendleAddnote}>Primary</button>
          </div>
        </div>
        </form>
      </div>
  )
}

export default AddNote
