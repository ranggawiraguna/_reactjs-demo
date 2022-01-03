import React, { useEffect, useState } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './ListCardProduct.css';

function ListCardProduct() {
  const [listProduct, changeProduct] = useState([])

  const getRouter = async () => `http://localhost:${await fetch('/config/ports.json').then(response => response.json()).then(json => json.ReactHooks)}`;

  const addNewProduct = () => {
    //Push to listProduct
  }

  useEffect((() => {
    let status = "componentDidMount";    

    return async () => {
      switch(status){
        case 'componentDidMount' :
          status = 'componentDidUpdate'
          changeProduct(await fetch(`${await getRouter()}/Products`).then(response => response.json()).then(json => json))
          break;

        case 'componentDidUpdate' :
          console.log('Component telah di update');
          break;

        default:
          break;
      }

      return () => {
        //componentWillUnmount
        alert("Thank you for shopping!")        
      }
    }
  })());

  return (
    <div>
      {listProduct.map(() => <CardProduct />)}
    </div>
  )
}

export default ListCardProduct