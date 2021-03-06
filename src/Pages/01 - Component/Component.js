import React from 'react';
import { Frame, Container, Header2 } from '../../App/Components';
import Cards from './Containers/Cards/Cards';
import Card from './Components/Card/Card';
import ButtonAdd from './Components/ButtonAdd/ButtonAdd';

function Component() {
    return (
        <Frame>
            <Container id="Component">
                <Header2 innerValue="Component" />
                <hr />
                <Cards id="CardContainer">
                    <Card />
                    <Card />
                    <Card />
                </Cards>
                <ButtonAdd />
            </Container>
        </Frame>
    )
}

export default Component