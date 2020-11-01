import React from 'react';
import './ButtonAdd.css';
import logo from './../../../../logo.svg';

const ButtonAdd = () => <button onClick={() => addNewCard()}>Add Card</button>;

function addNewCard() {
  document.getElementById("CardContainer").innerHTML += ` <div class="Card">
                                                              <img src=${logo} alt="Logo" />
                                                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut? </p>
                                                          </div>`;
}

export default ButtonAdd;