import React from 'react';
import { Frame, Container, Header2 } from '../../__initial/Components';
import ListBook from './Containers/ListBook/ListBook';

class State extends React.Component {
    render(){
        return (
            <Frame>
                <Container id="State">
                    <Header2 innerValue="State" />
                    <hr/>
                    <ListBook id="CardContainer"/>
                </Container>
            </Frame>
        )
    }
}

export default State