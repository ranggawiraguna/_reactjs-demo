import React from 'react';
import './Card.css';
import logo from './../../../../logo.svg';

const Card = () => {
  return (
      <div className="Card">
          <img src={logo} alt="Logo" />
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut? </p>
      </div>
  )
}

export default Card;