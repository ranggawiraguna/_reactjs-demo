import React from 'react';
import './ContainerExample.css';

function ContainerExample(props) {
  return (
    <div id="ContainerExample">
      {props.children}
    </div>
  )
}


export default ContainerExample