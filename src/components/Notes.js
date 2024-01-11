import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItems from "./NoteItems";
import AddNote from "./AddNote";

const Notes = () => {
    const { notes, getNotes, editNotes } = useContext(noteContext);
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);
    const ref = useRef("");
    const refClose = useRef("");

    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "general"});

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
    };

    const handleClick = () => {
        editNotes(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
    };

    // It will overwrite the value of name like text field name is title and value also be title,
    // so we store value in title
    const onClick = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <>
            <AddNote />
            {/* modal */}
            <button 
                type="button"
                ref={ref}
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            />
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Note Update
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="container">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input type="text" className="form-control" value={note.etitle} id="title" onChange={onClick} name="etitle" placeholder="Title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <input type="text" onChange={onClick} value={note.edescription} className="form-control" id="description" name="edescription" placeholder="Description" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">
                                            Tag
                                        </label>
                                        <input type="text" onChange={onClick} value={note.etag} className="form-control" id="etag" name="etag" placeholder='Tag' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary" > Update </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return (
                        <NoteItems updateNote={updateNote} key={note._id} note={note} />
                    );
                })}
            </div>
        </>
    );
};

export default Notes;
