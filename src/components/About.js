import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';

const About = () => {
  const {state, update} = useContext(noteContext);
  useEffect(()=>{
    update();
      // eslint-disable-next-line
  },[])

  return (
    <div>
      <h1>This is {state.name} from {state.college} college </h1>
    </div>
  )
}

export default About

