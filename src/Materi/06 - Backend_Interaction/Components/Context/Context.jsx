import React from 'react';
import './Context.css'

function Context(props) {
  return (
    <div className="context">
      {props.icon}
      <h3> {props.name} </h3>
      <p> {props.textContent} </p>
    </div>
  )
}

export default Context