import React from 'react';
import './ContainerOperation.css';

function ContainerOperation(props) {
  return (
    <div className="container-operation"> 
      <h3> Operation </h3>
      <div>
        {props.children} 
      </div>
    </div>
  )
}

export default ContainerOperation