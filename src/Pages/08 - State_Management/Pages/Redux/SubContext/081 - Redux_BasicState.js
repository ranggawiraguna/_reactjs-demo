import React from 'react';
import { Frame, Container } from '../../../../../App/Components';

function Redux_BasicState() {
  return (
    <Frame>
      <Container id="Redux_BasicState">
        <div style={{ backgroundColor: 'white', width: '80%', height: '100%', margin: '0 auto', border: '5px solid lightgray', padding: 20 }}>
          <p style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}> Run file BasicState.js dengan node yang ada pada Folder Redux/StateManagement untuk mengetahui bagaimana redux bekerja </p>
          <hr />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Task Option</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: 'start' }}>
              <tr>
                <td style={{ fontWeight: 'bold', paddingLeft: 20, paddingRight: 20 }}>Store</td>
                <td style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}>State Global berupa object yang menyimpan nilai dari sebuah state yang biasa terdapat pada component</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', paddingLeft: 20, paddingRight: 20 }}>Reducer</td>
                <td style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}>Sebuah opsi yang digunakan untuk memanipulasi sebuah store, opsi ini dipakai sebagai parameter pada pembuatan store, sehingga ketika store dilakukan sebuah dispatch(Merubah nilai store) maka reducer inilah yang memfilter perubahan tersebut sesuai type yang dikirim pada saat pemanggilan store.dispatch(obj)</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', paddingLeft: 20, paddingRight: 20 }}>Subscription</td>
                <td style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}>Aksi yang selalu dijalankan ketika terjadi perubahan pada store, artinya ketika kita melakukan dispatch pada store otomatis subscription akan melakukan aksinya</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold', paddingLeft: 20, paddingRight: 20 }}>Dispatch</td>
                <td style={{ paddingLeft: 10, paddingRight: 10, lineHeight: 1.3 }}>Perintah yang digunakan untuk merubah memanipulasi store, pemanggilan dispatch ini membutuhkan parameter object yang memiliki attribute type, nantinya ketika dispatch ini dipanggil reducer akan memfilter type yang akan di proses sesuai parameter diberikan, dan memproses perubahan yang terjadi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Frame>
  )
}

export default Redux_BasicState