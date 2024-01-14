import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const { addNote } = useContext(noteContext);
  const [note, setNotes] = useState({ "title": "", "description": "", "tag": "" });

  const hendleAddnote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNotes({ "title": "", "description": "", "tag": "" });
    props.showAlert("Added Node Successfully" , "success");
  }

  //it will overwrite the value of name like text field name is title and value also be title  so we stor value in title
  const hendleOnClick = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div className="container my-3">
      <form className="my-3">
        <h2 className="mx-3">Add notes</h2>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" value={note.title} onChange={hendleOnClick} name="title" placeholder="Title" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type='text' onChange={hendleOnClick} value={note.description} className="form-control" id="description" name="description" placeholder='Description'></input>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type='text' onChange={hendleOnClick} value={note.tag} className="form-control" id="tag" name="tag" placeholder='Tag'></input>
          </div>
          <button disabled={note.title.length < 5 || note.title.length < 5} type="button" className="btn btn-primary my-3" onClick={hendleAddnote}>Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default AddNote
