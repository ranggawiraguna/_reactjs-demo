import React from "react";
import { Frame, Container, Header2 } from "./../../../../App/Components";
import ContainerListSection from "./Components/ContainerListSection/ContainerListSection";
import CardSection from "./Components/CardSection/CardSection";

function State_Management_Context() {
  return (
    <Frame>
      <Container id="State_Management_Context">
        <Header2 innerValue="State Management - Context" />
        <hr />
        <ContainerListSection>
          <CardSection
            linkTo="/State-Management/Context/Basic-State"
            icon="https://img.icons8.com/nolan/452/four-squares.png"
            title="Basic Context"
            definition="Membuat suatu state dan juga function yang dapat diakses oleh komponen lain (children-nya), sama halnya dengan redux ini berfungsi sebagai state manajemen yang dapat memudahkan dalam mengelola state, akan tetapi context memiliki setup yang berbeda dan juga performa yang didapat lebih cepat karena context defaultnya terdapat pada moudul react itu sendiri"
          />
          <CardSection
            linkTo="/State-Management/Context/Implementation"
            icon="https://img.icons8.com/nolan/452/process.png"
            title="Context Implementation"
            definition="Pada bagian ini, akan menerapkan fungsi/state yang sebelumnya sudah dibahas. Fungsi/State pada context ini akan di implementasikan pada project react menyesuaikan proses yang terjadi pada suatu aplikasi dan bagaimana cara memanajemen state yang berkaitan pada suatu component yang sedang berjalan di tampilan aplikasi"
          />
        </ContainerListSection>
      </Container>
    </Frame>
  );
}

export default State_Management_Context;
