import React from 'react';
import './Context.css'

function Context(props) {
  return (
    <div className="context">
      <img src={props.icon} alt="icons8"/>
      <h3> {props.name} </h3>
      <p> {props.textContent} </p>
    </div>
  )
}

export default Context