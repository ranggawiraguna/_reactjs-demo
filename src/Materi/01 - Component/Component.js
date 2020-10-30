import React from 'react';
import { Frame, Contents, Header2 } from '../../Components';
import logo from './../../logo.svg'
import './Component.css'


const CardContainer = (props) => <div id={props.id} className="CardContainer">{props.children}</div>

const Card = () => {
    return (
        <div className="Card">
            <img src={logo} alt="Logo" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut? </p>
        </div>
    )
}

const ButtonAdd = () => <button onClick={() => addNewCard()}>Add Card</button>

function addNewCard() {
    document.getElementById("CardContainer").innerHTML += ` <div class="Card">
                                                                <img src=${logo} alt="Logo" />
                                                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut? </p>
                                                            </div>`
}

function Component() {
    return (
        <Frame>
            <Contents>
                <Header2 innerValue="Component" />
                <CardContainer id="CardContainer">
                    <Card />
                    <Card />
                    <Card />
                </CardContainer>
                <ButtonAdd />
            </Contents>
        </Frame>
    )
}

export default Component