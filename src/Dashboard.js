import React from 'react';
import logo from './logo.svg';

const Header = (props)=> <h1 className="Header"> {props.innerValue} </h1>

const Header2 = (props)=> <h2 className="Header2"> {props.innerValue} </h2>

const Contents = (props)=> {
    return (
        <div style={{height:"80vh", width:"100%"}}>
            <img className="App-logo" src={logo} alt="React JS"/>

            <div className="ContentContainer">
                <Header2 innerValue="List of Contents"/>
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>                
                    { (() => props.listContent.map(e => <Content name={e}/> ))() }
                </div>
            </div>
        </div>
    )
}

const Content = (props) => {
    return (
        <div className="ContentCard">
            <img src={require("./Icons/"+props.name+".svg")} alt={"Image "+props.name} height="60%"/>
            <p> {props.name} </p>
        </div>
    )
}

export { Header, Contents }