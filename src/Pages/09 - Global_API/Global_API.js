import React from "react";
import ListContext from "./Components/ListContext/ListContext";
import Context from "./Components/Context/Context";
import { Frame, Container, Header2 } from "../../App/Components";
import { Link } from "react-router-dom";

function Global_API() {
  return (
    <Frame>
      <Container id="Global_API">
        <Header2 innerValue="React Global API" />
        <hr />
        <ListContext>
          <Link to="/Global-API/Post">
            {" "}
            <Context
              name="POST"
              icon="https://img.icons8.com/nolan/452/add-file.png"
              textContent="Method option yang digunakan untuk menambahkan data yang ada pada suatu API, hal ini dapat digunakan sebagai aksi pada suatu tombol dengan melakukan operasi penambahan data"
            />{" "}
          </Link>
          <Link to="/Global-API/Get">
            {" "}
            <Context
              name="GET"
              icon="https://img.icons8.com/nolan/452/view.png"
              textContent="Method option yang digunakan untuk mengambil data pada suatu API yang dituju, hal ini dapat digunakan untuk mengambil data pada Database/API dan menampilkan data tersebut ke dalam tampilan aplikasi"
            />{" "}
          </Link>
          <Link to="/Global-API/Put">
            {" "}
            <Context
              name="PUT"
              icon="https://img.icons8.com/nolan/452/edit-file.png"
              textContent="Method option yang digunakan untuk memperbarui data yang ada pada suatu API, hal ini dapat digunakan sebagai aksi pada suatu tombol dengan melakukan operasi pembaruan data"
            />{" "}
          </Link>
          <Link to="/Global-API/Delete">
            {" "}
            <Context
              name="DELETE"
              icon="https://img.icons8.com/nolan/452/delete-file.png"
              textContent="Method option yang digunakan untuk menghapus data yang ada pada suatu API, hal ini dapat digunakan sebagai aksi pada suatu tombol dengan melakukan operasi penghapusan data"
            />{" "}
          </Link>
        </ListContext>
      </Container>
    </Frame>
  );
}

export default Global_API;
