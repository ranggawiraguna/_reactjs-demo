import React from 'react';
import { connect } from 'react-redux';
import CardProduct from '../../Containers/ExampleApp/CardProduct/CardProduct';
import './SectionFavorite.css';

function SectionFavorite(props) {
  return (
    <div className="cart-section">
      {props.listFavorite.map((obj,index)=><CardProduct key={index} id={obj.id} product={obj} />)}
    </div>
  )
}

export default connect((state)=>({
  listFavorite : state.listFavorite
}))(SectionFavorite)