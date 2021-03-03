import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Container, Header2 } from '../../App/Components';
import ListContext from './Components/ListContext/ListContext';
import Context from './Components/Context/Context';

function ReactRouter() {  
  return (
    <Frame>
      <Container id="React_Router">
        <Header2 innerValue="React Router" />
        <hr />
        <ListContext>
          <Link to="/React-Router/Basic-Router"> <Context name="Basic Router" icon="https://img.icons8.com/nolan/452/wifi-router.png" textContent="Router merupakan modul yang berfungsi untuk melakukan proses navigasi pada SPA(Single page application). Lebih jelasnya router digunakan untuk berpindah halaman sesuai dengan path yang kita deklarasikan dalam route"/> </Link>
          <Link to="/React-Router/Structuring-Naming"> <Context name="Structuring & Naming" icon="https://img.icons8.com/nolan/452/active-directory.png" textContent="Merapikan struktur component, container, serta pages agar selaras dengan BrowserRouter yang kita buat. Hal ini juga memudahkan kita dalam memanajemen component, container, serta pages yang ada di dalam project"/> </Link>
          <Link to="/React-Router/Sending-Params"> <Context name="Sending Params" icon="https://img.icons8.com/nolan/452/related-companies.png" textContent="Mengirim parameter/nilai pada saat berpindah dengan router, ini dapat digunakan untuk berpindah halaman secara dinamis yaitu dengan cara mengirim suatu data untuk halaman selanjutnya sesuai aksi yang dilakukan"/> </Link>
        </ListContext>
      </Container>
    </Frame>
  )
}

export default ReactRouter