import React from 'react';
import { Frame, Container, Header2 } from '../../../__initial/Components';
import ContainerContext from './../Components/ContainerContext/ContainerContext';

function Backend_FakeApi(){
  return (
    <Frame>
      <Container id="Backend_Put">
        <Header2 innerValue="Backend - PUT" />
        <hr />
        <ContainerContext>

        </ContainerContext>
      </Container>
    </Frame>
  )  
}

export default Backend_FakeApi