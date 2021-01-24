import React from 'react';
import './CardProduct.css';

class CardProduct extends React.Component{
  state = {
    orderCount : 0
  }

  componentWillReceiveProps(){ this.setState({orderCount:0}); }

  incrementOrder = ()=>{ this.setState({orderCount: this.state.orderCount+1}) }
  decrementOrder = ()=>{ if(this.state.orderCount>0) this.setState({orderCount: this.state.orderCount-1}) }

  render() {
    return(
      <div className="card-product">
        <div className="product-cover"> <img src={this.props.image} alt=""/> </div>
        <h3 className="product-name">{this.props.name}</h3>
        <p className="product-price">Rp. {this.props.price}</p>
        <div className="product-action">
          <div className="product-counter">
            <button className="counter-decrement" onClick={()=>this.decrementOrder()}> - </button>
            <p className="counter-value"> {this.state.orderCount} </p>
            <button className="counter-increment" onClick={()=>this.incrementOrder()}> + </button>
          </div>
          <button className="product-buying" onClick={()=>this.props.addToCart(this.state.orderCount)}> Add to Cart </button>
        </div>
      </div>
    )
  }
}

export default CardProduct