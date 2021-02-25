import React from 'react';
import './Cards.css';

const CardContainer = (props) => <div id={props.id} className="Cards">{props.children}</div>;

export default CardContainer;