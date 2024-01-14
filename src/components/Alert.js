import React from 'react'

const Alert = (props) => {
  if (props.alert === null) {
    return;
  }
  return (
    <div className={`alert alert-${props.alert.type} ` } role="alert">
      <strong>{props.alert.type==="danger"? "Error:":props.alert.type}</strong>{props.alert.message}
    </div>
  );
}

export default Alert
