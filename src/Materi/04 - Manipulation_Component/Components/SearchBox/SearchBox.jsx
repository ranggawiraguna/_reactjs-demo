import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search Category" aria-label="Search Category" aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={()=>props.actionSearch(document.querySelector("#ManipulationComponent .input-group > input").value)}>Button</button>
      </div>
    </div>
  )
}

export default SearchBox