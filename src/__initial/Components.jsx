import React from 'react';
import './Components.css';
import logo from './../logo.svg';

const Frame = (props) => {
    return (
        <div className="App">
            <div className="App-Container">
                <h1 className="App-Header"> React JS </h1>
                <div id="ContentContainer">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const Container = (props) => <div id={props.id} className="Contents"> {props.children} </div>

const AppLogo = () => <img className="App-logo" src={logo} alt="React JS" />

const Header2 = (props) => <h2 className="Header2"> {props.innerValue} </h2>

const DashboardContainer = (props) => <div className="ContentCardContainer"> {props.children} </div>

const DashboardCard = (props) => {
    return (
        <div className="ContentCard" onClick={props.onClick}>
            <img src={require("./../Assets/" + props.name + ".svg")} alt={"Image " + props.name} height="60%" />
            <p> {props.name} </p>
        </div>
    )
}

DashboardCard.defaultProps = {
    name: 'Undefined',
}

export { Frame, Container, AppLogo, Header2, DashboardContainer, DashboardCard }