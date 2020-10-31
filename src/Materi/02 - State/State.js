import React from 'react';
import './State.css';
import { Frame, Contents, Header2 } from '../../Components';

const CardContainer = (props) => <div id={props.id} className="CardContainer">{props.children}</div>

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardIndex: 0
        }
    }

    handleClick = () => {
        this.setState({
            cardIndex: this.state.cardIndex + 1
        });
    }

    render() {
        return (
            <div className="Card">
                {this.state.cardIndex}

                <button onClick={this.handleClick}>Increment</button>
            </div>

        )
    }
}


function State() {
    return (
        <Frame>
            <Contents id="State">
                <Header2 innerValue="State" />
                <CardContainer id="CardContainer">
                    <Card />
                    <Card />
                    <Card />
                </CardContainer>
            </Contents>
        </Frame>
    )
}

export default State