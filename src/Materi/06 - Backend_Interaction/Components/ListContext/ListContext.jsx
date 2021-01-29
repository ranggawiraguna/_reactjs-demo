import React from 'react';
import './ListContext.css'

function ListContext(props){
  return (
    <div className="list-context">
      {props.children}
    </div>
  )
}

export default ListContext