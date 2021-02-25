import React from 'react';
import './ButtonAdd.css';


function ButtonAdd(props){
  return (
    <button className="button-add" onClick={()=>props.addNewCard()}> + </button>
  )
}

export default ButtonAdd