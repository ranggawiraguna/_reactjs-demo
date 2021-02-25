import React from 'react';
import './Fab.css'

const Fab = (props) => <button className="Fab" onClick={()=>props.onclick()}> + </button>;

export default Fab;