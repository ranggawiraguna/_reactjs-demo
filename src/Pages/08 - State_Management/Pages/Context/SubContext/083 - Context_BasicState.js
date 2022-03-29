import React from "react";
import { Frame, Container } from "../../../../../App/Components";

function Redux_BasicState() {
  return (
    <Frame>
      <Container id="Context_BasicState">
        <div
          style={{
            backgroundColor: "white",
            width: "80%",
            height: "100%",
            margin: "0 auto",
            border: "5px solid lightgray",
            padding: 20,
          }}
        >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Task Option</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "start" }}>
              <tr>
                <td
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Context
                </td>
                <td
                  style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}
                >
                  State Global berupa object yang digunakan sebagai root dari
                  penggunaan state manajemen pada context
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Provider
                </td>
                <td
                  style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}
                >
                  Sebuah Class Component yang menyimpan state dan juga function
                  yang nantinya akan di share ke beberapa komponen, ini
                  berfungsi sebagai root component yang bisa membagikan state
                  dan function yang dimilikinya ke children yang berada dibawah
                  levelnya
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Consumer
                </td>
                <td
                  style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}
                >
                  Sebuah Class Component yang menyimpan yang mengidentidikasi
                  suatu komponen bahwa komponen tersebut akan mengkonsumsi state
                  ataupun function yang terdapat pada provider yang terhubung
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontWeight: "bold",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  HOC
                </td>
                <td
                  style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}
                >
                  Teknik yang digunakan dalam pembuatan Provider ataupun
                  Consumer agar dapat memisahkan antara komponen dengan base
                  setup yang digunakan dalam menerapkan Context
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Frame>
  );
}

export default Redux_BasicState;
