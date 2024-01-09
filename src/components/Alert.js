import React from 'react'

const Alert = (props) => {
  return (
    <div>
      <h6 className="alert alert-primary" role="alert">
        {props.message}
        </h6>
    </div>
  )
}

export default Alert
