import React from 'react';
import './ContainerListSection.css';

function ContainerListSection(props){
  return (
    <div className="container-list-section"> {props.children} </div>
  )
}

export default ContainerListSection