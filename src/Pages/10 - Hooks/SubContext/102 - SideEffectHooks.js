import React from 'react';
import ContainerExample from '../Components/ContainerExample/ContainerExample';
import { Frame, Container, Header2 } from '../../../App/Components';

function SideEffectHooks(){
  return (
    <Frame>
      <Container id="SideEffectHooks">
        <Header2 innerValue="React Hooks (Side-Effect)" />
        <hr />
        <ContainerExample>
          
        </ContainerExample>          
      </Container>
    </Frame>
  )
}

export default SideEffectHooks