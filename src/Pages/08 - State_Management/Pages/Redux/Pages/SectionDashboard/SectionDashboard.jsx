import React from 'react';
import './SectionDashboard.css';
import { connect } from 'react-redux';
import CardProduct from './../../Containers/ExampleApp/CardProduct/CardProduct';

function SectionDashboard(props) {
  return (
    <div className="dashboard-section">
      {props.listProduct.map((obj,index)=><CardProduct key={index} id={obj.id} product={obj} />)}
    </div>
  )
}

export default connect(
  (state) => ({
    listProduct : state.listProduct
  })
)(SectionDashboard)