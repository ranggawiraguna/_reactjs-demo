import React from 'react';
import { connect } from 'react-redux';
import './ActionButton.css';

function ActionButton(props) {
  return (
    <button className="button-action" onClick={() => props.handleAction(props.actionName, props.product)} style={props.style}>{props.text}</button>
  )
}

export default connect(null, (dispatch) => ({
  handleAction: (actionName, product) => dispatch({ type: actionName, product: product })
}))(ActionButton)