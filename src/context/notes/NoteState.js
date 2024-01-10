import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const noteList=[]
  const host="http://localhost:5500";
  const [notes,setNotes] =useState(noteList);
  const getNotes = async ()=>{
    const response = await fetch(`${host}/api/notes/getnotes`,{
      method : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5YTcyOTdiN2EwNjFhMWEwNzg5YjIxIn0sImlhdCI6MTcwNDYyMDg3N30.X-WKvYNlwNQwcbmYSVDJw0xAF-cMDfEfDl7oMPvav2U'
      }
    });
    const data=await response.json();
    setNotes(data);
  }

  //Add Note
  const addNote = async ( title , description , tag)=>{
    
      //TODO: api call
      // const response =await fetch(`${host}/api/notes/addnotes`,{
      //   method : 'POST',
      //   headers: {
      //   'Content-Type': 'application/json',
      //   'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5YTcyOTdiN2EwNjFhMWEwNzg5YjIxIn0sImlhdCI6MTcwNDYyMDg3N30.X-WKvYNlwNQwcbmYSVDJw0xAF-cMDfEfDl7oMPvav2U'
      //   }
      // })
      const note={
        "_id": "659bce33789b6b4345b5a9f158b",
        "user": "659a7297234b7a061a1a0789b21",
        "title": title,
        "description": description,
        "tag": tag,
        "dete": "2024-01-08T10:28:03.540Z",
        "__v": 0
      }
      setNotes(notes.concat(note));
  }

  //Delete Note
  const deleteNote = (id)=>{
    //TODO: api call
    //here we are doing fileter if note._id not present then return or fileter 
    //then there will be no note with _id id in notes
    const newNote=notes.filter((note)=>{return note._id!==id})
    setNotes(newNote);
  }

  //Update Note


  
  return (
    <NoteContext.Provider value={{notes, getNotes , addNote , deleteNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
