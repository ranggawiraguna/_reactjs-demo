import React from 'react';
import { connect } from 'react-redux';
import CardProduct from './../../Containers/ExampleApp/CardProduct/CardProduct';
import './SectionCart.css';

function CartSection(props) {
  return (
    <div className="cart-section">
      {props.listCart.map((obj,index)=><CardProduct key={index} id={obj.id} product={obj} />)}
    </div>
  )
}

export default connect((state)=>({
  listCart : state.listCart
}))(CartSection)