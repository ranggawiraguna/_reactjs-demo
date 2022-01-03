import React from 'react';
import { Frame, Container, Header2 } from './../../../../App/Components';
import ContainerListSection from './Components/ContainerListSection/ContainerListSection';
import CardSection from './Components/CardSection/CardSection';


function State_Management_Redux() {  
  return (
    <Frame>
      <Container id="State_Management_Redux">
        <Header2 innerValue="State Management - Redux" />
        <hr />
        <ContainerListSection>
          <CardSection linkTo="/State-Management/Redux/Basic-State" icon="https://img.icons8.com/nolan/452/four-squares.png" title="Basic State" definition="Berisi fungsi dan juga state berupa object yang ada dalam membuat state management menggunakan redux. masing masing state/object memiliki peran masing-masing dalam melakukan tugas pada state manajemen. pada bagian ini akan dibahas dasar dari fungsi/state yang ada pada redux untuk melakukan suatu state manajemen" />
          <CardSection linkTo="/State-Management/Redux/Implementation" icon="https://img.icons8.com/nolan/452/process.png" title="Implementation" definition="Pada bagian ini, akan menerapkan fungsi/state yang sebelumnya sudah dibahas. Fungsi/State pada redux ini akan di implementasikan pada project react menyesuaikan proses yang terjadi pada suatu aplikasi dan bagaimana cara memanajemen state yang berkaitan pada suatu component yang sedang berjalan di tampilan aplikasi" />
        </ContainerListSection>
      </Container>
    </Frame>
  )
}

export default State_Management_Redux