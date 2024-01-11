import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5500";
  const [notes, setNotes] = useState([]);

  //get All the Notes using :GET
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5YTcyOTdiN2EwNjFhMWEwNzg5YjIxIn0sImlhdCI6MTcwNDYyMDg3N30.X-WKvYNlwNQwcbmYSVDJw0xAF-cMDfEfDl7oMPvav2U",
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  //Add Note
  const addNote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5YTcyOTdiN2EwNjFhMWEwNzg5YjIxIn0sImlhdCI6MTcwNDYyMDg3N30.X-WKvYNlwNQwcbmYSVDJw0xAF-cMDfEfDl7oMPvav2U",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const data = await response.json();
    setNotes(notes.concat(data));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5YTcyOTdiN2EwNjFhMWEwNzg5YjIxIn0sImlhdCI6MTcwNDYyMDg3N30.X-WKvYNlwNQwcbmYSVDJw0xAF-cMDfEfDl7oMPvav2U",
      },
    });
    //here we are doing fileter if note._id not present then return or fileter
    //then there will be no note with _id id in notes
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //Update Note
  const editNotes = async (id,title, description, tag) => {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5YTcyOTdiN2EwNjFhMWEwNzg5YjIxIn0sImlhdCI6MTcwNDYyMDg3N30.X-WKvYNlwNQwcbmYSVDJw0xAF-cMDfEfDl7oMPvav2U",
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json= await response.json();
    
    const newNote =JSON.parse(JSON.stringify(notes));
    for(let i=0;i<newNote.length;i++){
      const element=newNote[i]; 
      if(element._id===id)
      {
        newNote[i].title=title;
        newNote[i].description=description;
        newNote[i].tag=tag;
        break;
      }
    }
    console.log(notes);
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, editNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
