import React from 'react';
import './SearchBox.css';

function SearchBox() {
  return (
    <nav class="navbar">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default SearchBox