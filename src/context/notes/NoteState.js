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
        "auth-token": localStorage.getItem('token')
      }
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
        "auth-token": localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
          },
    });
    //here we are doing fileter if note._id not present then return or fileter
    //then there will be no note with _id id in notes
    const json=await response.json();
    console.log(json);
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
        "auth-token": localStorage.getItem('token')
          
      },
      body: JSON.stringify({title, description, tag})
    });
    const json= await response.json();
    console.log(json);
    
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
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, editNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
