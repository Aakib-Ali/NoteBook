import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const s1 = {
    "name": "Aakib Ali",
    "college": "KL University",
  };
  const [state,setState]=useState(s1);

const update = () =>{
  setTimeout(()=>{
    setState({ "name": "Ali",
    "college": "KLU"});
  },1000);
}
  return (
    <NoteContext.Provider value={{state,update}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
