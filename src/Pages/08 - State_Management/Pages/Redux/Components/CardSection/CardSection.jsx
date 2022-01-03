import React from 'react';
import './CardSection.css';
import {Link} from 'react-router-dom';

function CardSection(props) {
  return (
    <Link className="card-section" to={props.linkTo}>
      <img src={props.icon} alt="Icon Sub Context" height="40%"/>
      <h4>{props.title}</h4>
      <p>{props.definition}</p>
    </Link>
  )
}

export default CardSection