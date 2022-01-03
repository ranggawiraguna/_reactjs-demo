import React, { useState } from 'react';
import './CardProduct.css';

function CardProduct(props) {
  const [isFavorite, changeFavorite] = useState(false);
  const [count, changeCount] = useState(0);

  const handleCounter = (type) => {
    switch (type) {
      case 'INCREMENT':
        changeCount(count + 1)
        break;

      case 'DECREMENT':
        if (count > 0) changeCount(count - 1)
        break;

      default:
        break;
    }
  }

  const buyProduct = () => {
    if(count>0){
      alert(`Detail Pemesanan : ${props.articleName} (${count} Produk)`); changeCount(0);
    } else {      
      alert("Silahkan isi jumlah produk dengan benar");
    }
  }

  return (
    <div className="card-product">
      <div className="product-header">
        <img src={props.brandIcon} alt="Brand Icon" width="12%" />
        <h4>{props.brandName}</h4>
      </div>
      <img src={props.image} alt="" width="100%" />
      <div className="product-title">
        <h5>{props.articleName}</h5>
        <button onClick={() => changeFavorite(!isFavorite)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill={isFavorite ? "rgba(255,0,0,1)" : "rgba(0,0,0,0.2)"} className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </button>
      </div>
      <p>Rp. {props.price}</p>
      <div className="counter-form">
        <div className="form">
          <button onClick={() => handleCounter('DECREMENT')}>-</button>
          <input type="text" value={count} readOnly="readonly" />
          <button onClick={() => handleCounter('INCREMENT')}>+</button>
        </div>
        <button className="button-submit" onClick={buyProduct}>BUY</button>
      </div>
    </div>
  )
}

export default CardProduct