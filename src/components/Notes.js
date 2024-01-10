import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItems from "./NoteItems";
import AddNote from "./AddNote";

const Notes = () => {
    const { notes, getNotes } = useContext(noteContext);
    useEffect(() => {
        getNotes();
    }, []);

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItems key={note._id} note={note} />;
                })}
            </div>
        </>
    );
}

export default Notes;
