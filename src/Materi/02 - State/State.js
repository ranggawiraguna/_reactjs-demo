import React from 'react';
import { Frame, Container, Header2 } from '../../__initial/Components';
import ListBook from './Containers/ListBook/ListBook';
import Fab from './Components/Fab/Fab';

function State() {
    return (
        <Frame>
            <Container id="State">
                <Header2 innerValue="State" />
                <ListBook id="CardContainer"/>
                <Fab />
            </Container>
        </Frame>
    )
}

export default State