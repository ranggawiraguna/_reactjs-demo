import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Container, Header2 } from '../../App/Components';
import ListContext from './Components/ListContext/ListContext';
import Context from './Components/Context/Context';

function Backend_Interaction() {  
  return (
    <Frame>
      <Container id="Backend_Interaction">
        <Header2 innerValue="Interaction With the Backend" />
        <hr />
        <ListContext>
          <Link to="/Backend-Interaction/Local-Api"> <Context name="LOCAL API" icon="https://img.icons8.com/nolan/452/opened-folder.png" textContent="Sebuah API pada local storage yang umumnya menyimpan data dalam bentuk array of objects pada file .json, hal ini dapat digunakan sebagai tempat menyimpan data data yang bersifat bersifat local / static"/> </Link>
          <Link to="/Backend-Interaction/Fake-Api"> <Context name="FAKE API" icon="https://img.icons8.com/nolan/452/cloud-folder.png" textContent="Sama halnya dengan LOCAL API, akan tetapi FAKE API berjalan pada server didalam aplikasi dengan server root berada pada root url server ( / ). Hal ini dapat digunakan sebagai database dummy sebelum menggunakan database dari server sebenarnya"/> </Link>
          <Link to="/Backend-Interaction/Post"> <Context name="POST" icon="https://img.icons8.com/nolan/452/add-file.png" textContent="Method option yang digunakan untuk menambahkan data yang ada pada suatu API, hal ini dapat digunakan sebagai aksi pada suatu tombol dengan melakukan operasi penambahan data"/> </Link>
          <Link to="/Backend-Interaction/Get"> <Context name="GET" icon="https://img.icons8.com/nolan/452/view.png" textContent="Method option yang digunakan untuk mengambil data pada suatu API yang dituju, hal ini dapat digunakan untuk mengambil data pada Database/API dan menampilkan data tersebut ke dalam tampilan aplikasi"/> </Link>
          <Link to="/Backend-Interaction/Put"> <Context name="PUT" icon="https://img.icons8.com/nolan/452/edit-file.png" textContent="Method option yang digunakan untuk memperbarui data yang ada pada suatu API, hal ini dapat digunakan sebagai aksi pada suatu tombol dengan melakukan operasi pembaruan data"/> </Link>
          <Link to="/Backend-Interaction/Delete"> <Context name="DELETE" icon="https://img.icons8.com/nolan/452/delete-file.png" textContent="Method option yang digunakan untuk menghapus data yang ada pada suatu API, hal ini dapat digunakan sebagai aksi pada suatu tombol dengan melakukan operasi penghapusan data"/> </Link>
        </ListContext>
      </Container>
    </Frame>
  )
}

export default Backend_Interaction