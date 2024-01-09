import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

  const noteList= [
    {
      "_id": "659ad40047deb53e3791fff2",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-07T16:40:32.319Z",
      "__v": 0
    },
    {
      "_id": "659ad40047deb53e3791fff4",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-07T16:40:32.473Z",
      "__v": 0
    },
    {
      "_id": "659ad40047deb53e3791fff6",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-07T16:40:32.619Z",
      "__v": 0
    },
    {
      "_id": "659ad40047deb53e3791fff8",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-07T16:40:32.762Z",
      "__v": 0
    },
    {
      "_id": "659bce33789b6b4b5a9f158a",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-08T10:28:03.540Z",
      "__v": 0
    },
    {
      "_id": "659bce33789b6b4b5a9f158b",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-08T10:28:03.540Z",
      "__v": 0
    },
    {
      "_id": "659bce33789b6b4b5a9f158c",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-08T10:28:03.540Z",
      "__v": 0
    },
    {
      "_id": "659bce33789b6b4b5a9f158d",
      "user": "659a7297b7a061a1a0789b21",
      "title": "dyshicse",
      "description": "ajd;klfjasdlfjl;kasdjflk;asjdfkdsjf",
      "tag": "general",
      "dete": "2024-01-08T10:28:03.540Z",
      "__v": 0
    }
  ]

  const [notes,setNotes] =useState(noteList);

  //Add Note
  const addNote = ( title , description , tag)=>{
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

  //Update Note


  
  return (
    <NoteContext.Provider value={{notes,addNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
