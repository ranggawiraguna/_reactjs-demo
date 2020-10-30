import React from 'react'
import './App.css';
import {Frame, Contents, Header2 } from './Components';
import logo from './logo.svg';
import { Link } from 'react-router-dom'

function Dasboard() {
    return (
        <Frame>
            <AppLogo/>
            <Contents>
                <Header2 innerValue="List Of Contents" />
                <ContainerCard>
                    {/* { (() => listMateri.map(e => <Card name={e} onClick={()=>{changeAppPage(e)}}/> ))() } */}
                    <Link to="/Dashboard/Intro"> <Card name="Intro" /> </Link>
                    <Link to="/Dashboard/Component"> <Card name="Component" /> </Link>
                    <Link to="/Dashboard/State"> <Card name="State" /> </Link>
                    <Link to="/Dashboard/Props"> <Card name="Props" /> </Link>
                </ContainerCard>
            </Contents>
        </Frame>
    )
}

//Components
const AppLogo = () => <img className="App-logo" src={logo} alt="React JS" />

const ContainerCard = (props) => <div className="ContentCardContainer"> {props.children} </div>

const Card = (props) => {
    return (
        <div className="ContentCard" onClick={props.onClick}>
            <img src={require("./Assets/" + props.name + ".svg")} alt={"Image " + props.name} height="60%" />
            <p> {props.name} </p>
        </div>
    )
}

Card.defaultProps = {
    name: 'Undefined',
}


export default Dasboard