import React from 'react';
import './ListCard.css';
import CardUser from '../CardUser/CardUser';
import ButtonAdd from './../../Components/ButtonAdd/ButtonAdd';

class ListCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { name: "Rangga Wiraguna", nim: "1803015106" },
        { name: "Fasya Nazihah", nim: "1803015057" },
        { name: "Agus Budiantoro", nim: "1803015000" }
      ]
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    //Event ketika component menerima state atau baru
    console.log("Component menerima state/props baru");

    return null;  //require return value
  }

  componentDidMount = () => {
    //Event ketika component berhasil di pasang >> after render() >> finishing Mount process
    console.log("Component berhasil di pasang >> after render() >> finishing Mount process : Dapat digunakan untuk merubah data dummy pada ui menjadi data yang sebenarnya");
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    //Event ketika component menerima permintaan update
    console.log("Component menerima permintaan update, dapat digunakan sebagai verifikasi update");

    return true; //true for apply update
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    //Event yang menangkap status component sebelumnya
    console.log("Event yang digunakan untuk membuat rekaman ketika terjadi perubahan pada komponen");

    return null; //require return value
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    //Event ketika component berhasil di update
    console.log("Component berhasil di update, dapat digunakan sebagai penambahan peristiwa ketika component berhasil di update");
  }

  componentWillUnmount = () => {
    //Event ketika componen akan hilang dari halaman aplikasi
    console.log("Event ketika componen akan hilang dari halaman aplikasi, dapat digunakan sebagai penambahan peristiwa sebelum component hilang dari halaman aplikasi");
  }

  handleButtonAction = (editable, index, enableEditing, disableEditing) => {
    let temp = [...this.state.users];
    temp[index].name = document.querySelector(`#LifeCycleComponent .card-user:nth-child(${index + 1}) > div > p:first-child`).innerHTML;
    temp[index].nim = document.querySelector(`#LifeCycleComponent .card-user:nth-child(${index + 1}) > div > p:last-child`).innerHTML;

    if (editable) {
      this.setState({ users: [...temp] })
      editable = false;
      disableEditing();
    } else {
      editable = true;
      enableEditing()
    }

    temp = null;

    return editable;
  }

  addNewCard = ()=>{
    let newNim = prompt("Masukkan Nim Mahasiswa : ");
    let newName = prompt("Masukkan Nama Mahasiswa : ");

    if(newName!=null && newNim !=null){
      let temp = [...this.state.users];
      temp.push({name:newName, nim:newNim});

      this.setState({users:temp});
    }
  }

  render() {
    return (
      <div className="container-list-card">
        <div className="list-card" onClick={() => console.log(this.state.users)}>
          {this.state.users.map((user, index) => <CardUser nim={user.nim} name={user.name} key={index} index={index} handleButtonAction={this.handleButtonAction} />)}
        </div>
        <ButtonAdd addNewCard={this.addNewCard}/>
      </div>
    )
  }
}

export default ListCard