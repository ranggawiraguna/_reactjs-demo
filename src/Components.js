import React from 'react';

const App = (props) => <div className="App">{props.children}</div>

const AppContainer = (props) => <div className="App-Container">{props.children}</div>

const Header = (props) => <h1 className="Header"> {props.innerValue} </h1>

const Header2 = (props) => <h2 className="Header2"> {props.innerValue} </h2>

const ContentContainer = (props) => {
    return (
        <div id="ContentContainer"> {props.children} </div>
    )
}

const Contents = (props) => <div className="Contents"> {props.children} </div>

const Frame = (props) => {
    return (
        <App>
            <AppContainer>
                <Header innerValue="React JS" />
                <ContentContainer>
                    {props.children}
                </ContentContainer>
            </AppContainer>
        </App>
    )
}

export { Frame, Contents, Header2 }