import React from 'react';
import { Frame, Container, Header2 } from '../../Components';
import logo from "./../../logo.svg"
import './Intro.css'

function Intro() {
    const name = "Rangga";

    return (
        <Frame>
            <Container id="Intro">
                <Header2 innerValue="Intro" />
                <div className="Container">
                    <div>
                        <h3> Pengetahuan Umum Mengenai React </h3>
                        <ul>
                            <li>Urutan Project React :  index.html → index.js(render to root) → App.js </li>
                            <li> JSX ditulis didalam return dan penuisannya harus dibungkus dengan div jika terdapat banyak elemen </li>
                            <li> Didalam JSX dapat menulis kode javascript dengan cara membungkus kode kedalam {"{ }"} seperti "Hallo {name}" </li>
                            <li> Tag img pada JSX meiliki perbedaan yaitu img menggunakan penutup seperti {"<img/>"} </li>
                        </ul>
                    </div>
                    <div>
                        <h3> Tag img </h3>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h3> Event Click Inline </h3>
                        <button onClick={() => alert("Button is clicked!")}> Click This </button>
                    </div>
                </div>
            </Container>
        </Frame>
    )
}

export default Intro