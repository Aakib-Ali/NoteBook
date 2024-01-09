import React from "react";

const NoteItems = (props) => {
    const {note} =props;
  return (
    <div className="col md-3 my-3">
        <div className="card" >
            <div className="card-body">
                <div className="d-flex  align-items-center"> 
                <h5 className="card-title">{note.title}</h5>
                <i className="fa-solid fa-trash mx-3"/>
                <i className="fa-solid fa-pen-to-square mx-3"/>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  );
};

export default NoteItems;
