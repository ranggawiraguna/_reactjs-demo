import React from 'react';
import { Frame, Container, Header2 } from '../../__initial/Components';
import SampleApp from './Containers/SampleApp/SampleApp';

function Manipulation_Component() {
    return (
        <Frame>
            <Container id="ManipulationComponent">
                <Header2 innerValue="Manipulation Component" />
                <hr />
                <SampleApp />
            </Container>
        </Frame>
    )
}

export default Manipulation_Component