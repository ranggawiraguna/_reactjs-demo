import React from 'react';
import './SectionContainer.css';

function SectionContainer(props){
  return (
    <div className="section-container">
      {props.children}
    </div>
  )
}

export default SectionContainer