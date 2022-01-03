import React from 'react';
import { Frame, Container, Header2 } from '../../App/Components';
import ListPage from './Components/ListPage/ListPage';
import CardPage from './Components/CardPage/CardPage';

function State_Management() {  
  return (
    <Frame>
      <Container id="State_Management">
        <Header2 innerValue="React State Management" />
        <hr />
        <ListPage>
          <CardPage name="Redux" to="/State-Management/Redux" definition="Redux dikenal sebagai library untuk mengelola state. Dengan menggunakan Redux maka kita cukup bikin satu state dan state itu bisa di akses di komponen manapun. Redux itu ibarat database di sisi frontend. Sepertinya layaknya database kita bisa melakukan operasi database seperti query,filter,insert,delete. Sebenarnya redux ini bukan punyanya react, kita bisa menggunakan redux di manapun, baik itu vuejs, angular dan kawan-kawannya. Dan kali ini kita memasangkan redux pada react."/>
          <CardPage name="Context" to="/State-Management/Context" definition="Context menyediakan cara untuk oper data melalui diagram komponen tanpa harus oper props secara manual di setiap tingkat. Dalam aplikasi React yang khusus, data dioper dari atas ke bawah (parent ke child) melalui props, tetapi ini bisa menjadi rumit untuk tipe props tertentu (mis. preferensi locale, tema UI) yang dibutuhkan oleh banyak komponen di dalam sebuah aplikasi. Context menyediakan cara untuk berbagi nilai seperti ini di antara komponen tanpa harus oper prop secara explisit melalui setiap tingkatan diagram."/>
        </ListPage>
      </Container>
    </Frame>
  )
}

export default State_Management