import React from 'react';
import { Frame, Container, Header2 } from '../../App/Components';
import ListCard from './Containers/ListCard/ListCard';

function LifeCycle_Component() {
    return (
        <Frame>
            <Container id="LifeCycleComponent">
                <Header2 innerValue="LifeCycle Component" />
                <hr />
                <ListCard />
            </Container>
        </Frame>
    )
}

export default LifeCycle_Component