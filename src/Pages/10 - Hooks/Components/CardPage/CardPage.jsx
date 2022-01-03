import React from "react";
import { Link } from "react-router-dom";
import "./CardPage.css";

const CardPage = (props) => {
  return (
    <Link className="card-page" to={props.to}>
      <img src={require(`./../../../../Assets/${props.name}.png`)} alt="Page Icon" height="50%" />
      <h3>{props.name}</h3>
      <p>{props.definition}</p>
    </Link>
  )  
}

export default CardPage