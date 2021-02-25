import React from 'react';
import './CardThumbnail.css'

function CardThumbnail(props){
  return (
    <div className="thumbnail">
      <div className="thumbnail-cover"> 
        <img src={props.coverImage} alt=""/> 
        <p> {props.coverTime} </p>
      </div>
      <div className="thumbnail-info">
        <h5> {props.title} </h5>
        <p> {props.description} </p>
      </div>
    </div>
  )
}

CardThumbnail.defaultProps = {
  coverImage : "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
  coverTime : "00:00",
  title : "Title Thumbnail",
  description : "xx ditonton - x hari yang lalu",
}

export default CardThumbnail