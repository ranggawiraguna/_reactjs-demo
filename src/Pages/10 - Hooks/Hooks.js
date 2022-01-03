import React from 'react';
import { Frame, Container, Header2 } from '../../App/Components';
import ListPage from './Components/ListPage/ListPage';
import CardPage from './Components/CardPage/CardPage';

function Hooks() {  
  return (
    <Frame>
      <Container id="Hooks">
        <Header2 innerValue="React Hooks" />
        <hr />
        <ListPage>
          <CardPage name="Basic Hooks" to="/Hooks/Basic-Hooks" definition="Sebuah option dari React untuk membuat suatu component stateless agar dapat memiliki sebuah state, hal ini dimanfaatkan jika component tersebut tidak terlalu kompleks dan lebih baiknya tidak dibuat menggunakan statefull component agar proses render menjadi ringan"/>
          <CardPage name="Side-Effect Hooks" to="/Hooks/Side-Effect" definition="Sebuah Lifecycle yang dapat digunakan pada component yang menggunakan hooks didalamnya, proses Lifecycle yang ada pada hooks di gabung menjadi satu function, akan tetapi kejadian dalam lifecycle tidak selengkap dan sekompleks seperti pada statefull component"/>
        </ListPage>
      </Container>
    </Frame>
  )
}

export default Hooks