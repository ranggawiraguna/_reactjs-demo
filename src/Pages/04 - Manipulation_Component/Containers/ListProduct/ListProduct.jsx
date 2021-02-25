import React from 'react';
import './ListProduct.css';
import CardProduct from '../CardProduct/CardProduct';

class ListProduct extends React.Component {
  state = { 
    products : [
      {name:"", price:"", image:""},
      {name:"", price:"", image:""},
      {name:"", price:"", image:""},
      {name:"", price:"", image:""},
      {name:"", price:"", image:""}
    ] 
  }

  componentWillReceiveProps(newProps){ this.setState({products:newProps.list}); }

  render() {
    return (
      <div className="list-product">
        { this.state.products.map((product,i) => <CardProduct key={i+1} name={product.name} price={product.price} image={product.image} addToCart={this.props.addToCart}/>) } 
      </div>
    )
  }
}

export default ListProduct