import React from 'react';
import './ListCard.css';

function ListCard(props){
  return (
    <div className="list-card">
      {props.children}
    </div>
  )
}

export default ListCard