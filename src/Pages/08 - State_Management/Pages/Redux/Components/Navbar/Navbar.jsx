import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar(props) {
  return (
    <nav id="Navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand text-logo" to="/State-Management/Redux/Implementation">Dummy App</Link>
      <div className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-info my-2 my-sm-0">Search</button>
      </div>
      <div className="nav-icon-list">
        <Link className="nav-icon" to="/State-Management/Redux/Implementation/Favorite">
          <img src="https://img.icons8.com/nolan/452/filled-like.png" alt="Cart Icon" height="35px" />
          <span>{props.favoriteCount}</span>
        </Link>
        <Link className="nav-icon" to="/State-Management/Redux/Implementation/Cart">
          <img src="https://img.icons8.com/nolan/452/fast-cart.png" alt="Cart Icon" height="35px" />
          <span>{props.cartCount}</span>
        </Link>
      </div>
    </nav>
  )
}

export default connect(
  (state) => ({
    cartCount: state.cartCount,
    favoriteCount: state.listFavorite.length
  })
)(Navbar)