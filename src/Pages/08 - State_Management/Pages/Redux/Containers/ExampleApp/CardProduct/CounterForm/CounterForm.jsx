import React from 'react';
import './CounterForm.css';
import { connect } from 'react-redux';
import ActionType from './../../../../StateManagement/ActionType';

class CounterForm extends React.Component {
  state = { count : 0 }

  changeCounter = (action = "") => {
    if (action === 'RESET') {
      this.setState({ count: 0 })
    } else if (action === 'INCREMENT') {
      this.setState({ count: this.state.count + 1 })
    } else if (action === 'DECREMENT' && this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }


  render(){
    return (
      <div className="counter-form">
        <div className="form">
          <button onClick={() => this.changeCounter('DECREMENT')}>-</button>
          <input type="text" value={this.state.count} readOnly="readonly" />
          <button onClick={() => this.changeCounter('INCREMENT')}>+</button>
        </div>
        <button className="button-submit" onClick={
          () => this.props.addToCart({ product: this.props.product, count: this.state.count }, () => this.changeCounter('RESET'))
        }>Add To Cart</button>
      </div>
    )
  }
}

export default connect(null, (dispatch) => ({
  addToCart: (value, callback) => {
    if(value.count>0){
      dispatch({
        type: ActionType.addToCart,
        product: value.product,
        count: value.count,
        callback: callback
      })
    } else {
      alert('Silahkan masukkan jumlah barang dengan benar');
    }
  }
}))(CounterForm)