import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItems = (props) => {
    const {deleteNote} =useContext(noteContext);
    const {note,updateNote} =props;

    const hanldeDeleteNote = () =>{
        deleteNote(note._id)
        props.showAlert("Dleted Successfully" , "success");
    }
  return (

    <div className="col md-3 my-3">
        <div className="card" >
            <div className="card-body">
                <div className="d-flex  align-items-center"> 
                <h5 className="card-title">{note.title}</h5>
                <i className="fa-solid fa-trash mx-3" onClick={hanldeDeleteNote}></i>
                <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}/>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  );
};

export default NoteItems;
