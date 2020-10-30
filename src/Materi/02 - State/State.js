import React from 'react';
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
            cardIndex: ++this.cardIndex
        })
    }

    render() {
        return (
            <div className="Card">
            </div>
        )
    }
}


function State() {
    return (
        <Frame>
            <Contents>
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