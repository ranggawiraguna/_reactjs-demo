import React from 'react';
import CardProduct from '../Components/CardProduct/CardProduct';
import ContainerExample from '../Components/ContainerExample/ContainerExample';
import ListCard from '../Components/ListCard/ListCard';
import Navbar from '../Components/Navbar/Navbar';
import { Frame, Container, Header2 } from '../../../App/Components';

function BasicHooks() {
  return (
    <Frame>
      <Container id="BasicHooks">
        <Header2 innerValue="React Hooks (Basic)" />
        <hr />
        <ContainerExample>
          <Navbar/>
          <ListCard>
            <CardProduct brandIcon="https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg" brandName="Popculine" image="https://popculine.com/wp-content/uploads/2020/10/1-WBB-B-THIS-LIFE-IS-A-TRIP-min-840x840.jpg" articleName="Windbreaker – This Life Is A Trip" price="310.000" />
            <CardProduct brandIcon="https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg" brandName="Popculine" image="https://popculine.com/wp-content/uploads/2020/10/PH-1-WIT-AND-JOY-min-840x840.jpg" articleName="Pullover Hoodie – Wit and joy" price="320.000" />
            <CardProduct brandIcon="https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg" brandName="Popculine" image="https://popculine.com/wp-content/uploads/2020/10/BASEBALL-CAP-1-DO-FUN-SHIT-min-840x840.jpg" articleName="Headwear – Do Fun Shit" price="120.000" />
            <CardProduct brandIcon="https://pbs.twimg.com/profile_images/788646900220190720/bWLw5gxJ_400x400.jpg" brandName="Popculine" image="https://popculine.com/wp-content/uploads/2020/10/1-WAISTBAG-PRODUCTIVE-min-840x840.jpg" articleName="Waistwords Bag – Productive Without Pressure" price="150.000" />
          </ListCard>
        </ContainerExample>
      </Container>
    </Frame>
  )
}

export default BasicHooks