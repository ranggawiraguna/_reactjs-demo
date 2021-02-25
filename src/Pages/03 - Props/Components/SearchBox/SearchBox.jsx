import React from 'react';
import './SearchBox.css';

function SearchBox() {
  return (
    <nav className="navbar">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
      </form>
    </nav>
  )
}

export default SearchBox