import React from 'react';
import './CardArticle.css';
import {Link} from 'react-router-dom';

function CardArticle(props) {
  return (
    <Link className="card-article" to={`/React-Router/Sending-Params/Article/${props.data.id}`}>
      <span>
        <svg className="ratio" height="100%" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="1" height="1" fill="none" /> </svg>
        <img src={props.data.hero_image} alt="Hero"/>
      </span>
      <div>
        <h4> {props.data.title} </h4>
        <p> {props.data.post_date} </p>
      </div>
    </Link>
  )
}

export default CardArticle