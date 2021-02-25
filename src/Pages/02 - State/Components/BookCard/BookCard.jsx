import React from 'react';
import './BookCard.css'
import logo from './../../../../logo.svg';

function BookCard(props) {
    return (
        <div className="BookCard">
            <div>
                <span>{props.bookPrice}$</span>
                <img src={logo} alt="React Logo" />
            </div>
            <div>
                <h2> {props.bookName} </h2>
                <p> Terjual : {props.sold} </p>
                <button style={{ position: "absolute", left: "20px", bottom: "15px", padding: "8px", marginTop: "25px", width: "calc(100% - 40px)", fontFamily: "Comfortaa", fontWeight: "bolder", outline: "0 !important", border: "0", borderRadius: "5px", cursor: "pointer" }} onClick={props.onClickBook}> Beli Dong </button>
            </div>
        </div>
    )
}

export default BookCard;