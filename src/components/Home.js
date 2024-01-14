import React from 'react'
import Notes from './Notes'
import Alert from './Alert'

const Home = (props) => {
  return (
    <div>
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
