import React from 'react';
import { Frame, Container, Header2 } from '../../../../App/Components';
import JsonViewer from 'json-viewer-js';
import ContainerContext from './../../Components/ContainerContext/ContainerContext';
import SamplePhoneApp from './../../Components/SamplePhoneApp/SamplePhoneApp';
import ContainerCRUD from './../../Components/ContainerCRUD/ContainerCRUD';
import JsonPreview from './../../Components/JsonPreview/JsonPreview';
import ContainerOperation from './../../Components/ContainerOperation/ContainerOperation';
import DropdownData from '../../Components/DropdownData/DropdownData';
import TabContent from '../../Components/TabContent/TabContent';
import TabpaneTable from '../../Components/TabpaneTable/TabpaneTable';
import ModalUpdate from '../../Components/ModalUpdate/ModalUpdate';

class Backend_Put extends React.Component {
  state = {
    user: {
      profile: {
        name: "",
        foto: "",
        countFollowers: 0,
        countFollowing: 0,
        countPosts: 0
      },
      programming: [],
      software: [],
      educations: [],
      workExperiences: [],
      certificateSeminar: [],
      hobbies: [],
      socialMedia: []
    },

    updateDetails: {
      data: {},
      path: "",
      id: 0,
      title: "",
      column: []
    }
  }

  viewDataJson = () => {
    document.querySelector(".json-preview > div").innerHTML = "";
    document.querySelector(".json-preview > div").classList.remove('jv-light-con');
    new JsonViewer({
      container: document.querySelector(".json-preview > div"),
      data: JSON.stringify(this.state.user),
      theme: 'light',
      expand: false
    });
  }

  getRouter = async () => `http://localhost:${await fetch('/config/json-server.json').then(response => response.json()).then(json => json.port)}`;

  getData = (url = '') => fetch(url).then(response => response.json()).then(json => json);

  getDataUser = async () => {
    return {
      profile: await this.getData(`${await this.getRouter()}/profile`),
      programming: await this.getData(`${await this.getRouter()}/programming`),
      software: await this.getData(`${await this.getRouter()}/software`),
      educations: await this.getData(`${await this.getRouter()}/educations`),
      workExperiences: await this.getData(`${await this.getRouter()}/workExperiences`),
      certificateSeminar: await this.getData(`${await this.getRouter()}/certificateSeminar`),
      hobbies: await this.getData(`${await this.getRouter()}/hobbies`),
      socialMedia: await this.getData(`${await this.getRouter()}/socialMedia`)
    }
  }

  putData = (url = '', data = {}) => fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.ok)
    .then(success => success)


  putDataUser = async (path, id, data) => {
    let success = await this.putData(`${await this.getRouter()}/${path}/${id}`, data);

    if (success) {
      alert("Data berhasil di update");
      document.querySelector('#Backend_Section.container-context .container-operation #ModalUpdate .modal-header button[data-dismiss="modal"]').click();
    } else {
      alert("Terjadi kesalahan, gagal memperbarui data");
    }

    return success
  }

  changeUpdateForm(path, id, index, title) {
    let columnUpdate = [];
    let data = {};

    for (let col in this.state.user[path][index]) {
      if (col !== "id") {
        columnUpdate.push(col);
        data = { ...data, [col]: this.state.user[path][index][col] };
      }
    }

    this.setState({
      updateDetails: {
        data: data,
        path: path,
        id: id,
        title: title,
        column: columnUpdate
      }
    });
  }

  changeNavOperation(elemenSelected) {
    document.querySelector("#Backend_Section.container-context .container-operation .dropdown button").innerHTML = elemenSelected.innerHTML;
    document.querySelectorAll("#Backend_Section.container-context .container-operation .dropdown-item").forEach((e) => {
      e.classList.remove("active")
      e.setAttribute("aria-selected", false);
    });
    elemenSelected.setAttribute("aria-selected", true);
    elemenSelected.classList.remove("active");
  }

  componentDidMount = async () => {
    this.setState({ user: await this.getDataUser() });

    document.querySelectorAll("#Backend_Section.container-context .container-operation .dropdown-item").forEach((item) => item.addEventListener('click', () => this.changeNavOperation(item)));

    document.querySelectorAll("#Backend_Section.container-context .container-operation section tbody td.action > button").forEach((btn) => {
      btn.addEventListener('click', () => {
        this.changeUpdateForm(
          (btn.parentElement.parentElement.parentElement.parentElement.parentElement).getAttribute('name'),
          parseInt(btn.parentElement.parentElement.dataset['id']),
          parseInt(btn.parentElement.parentElement.querySelector('th').innerHTML - 1),
          (btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).getAttribute('aria-labelledby')
        );
      });
    });

    document.querySelector('#Backend_Section.container-context .container-operation #ModalUpdate .modal-footer button:last-child').addEventListener('click', async (e) => {
      let modalContent = e.target.parentElement.parentElement;
      let newData = { id: modalContent.dataset.id };

      modalContent.querySelectorAll('#ModalBody span.form-control').forEach((input) => newData = { ...newData, [input.getAttribute('name')]: input.getAttribute('name') === "progress" ? parseInt(input.innerHTML) : input.innerHTML });

      if (await this.putDataUser(modalContent.dataset.path, modalContent.dataset.id, newData)) {
        this.setState({ user: await this.getDataUser() });
        this.viewDataJson();
      }
    });

    this.viewDataJson();
  }

  componentWillUnmount = () => document.querySelector('#Backend_Section.container-context .container-operation #ModalUpdate .modal-header button[data-dismiss="modal"]').click();

  render() {
    return (
      <Frame>
        <Container id="Backend_Put">
          <Header2 innerValue="Backend - PUT" />
          <hr />
          <ContainerContext className="crud">
            <ContainerCRUD>
              <JsonPreview />
              <ContainerOperation>
                <DropdownData />
                <TabContent>
                  <TabpaneTable id="programming" label="Programming Skills">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Icon</th><th scope="col">Name</th><th scope="col">Progress</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.programming.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data"><img src={data['icon']} alt="" height="25px" /></td><td className="data">{data['name']}</td><td className="data">{data['progress']}%</td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="software" label="Software Skills">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Name</th><th scope="col">Icon</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.software.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data">{data['name']}</td><td className="data"><img src={data['icon']} alt="" height="25px" /></td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="educations" label="Educations">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Name</th><th scope="col">Periode</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.educations.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data">{data['name']}</td><td className="data">{data['periode']}</td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="workExperiences" label="Work Experiences">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Name</th><th scope="col">Jobdesk</th><th scope="col">Periode</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.workExperiences.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data">{data['name']}</td><td className="data">{data['jobdesk']}</td><td className="data">{data['periode']}</td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="certificateSeminar" label="Certificate / Seminar">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Name</th><th scope="col">Status</th><th scope="col">Time</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.certificateSeminar.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data">{data['name']}</td><td className="data">{data['status']}</td><td className="data">{data['time']}</td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="hobbies" label="Hobbies">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Name</th><th scope="col">Icon</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.hobbies.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data">{data['name']}</td><td className="data"><img src={data['icon']} alt="" height="25px" /></td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="socialMedia" label="Social Media">
                    <thead className="thead-dark">
                      <tr><th className="index" scope="col">No</th><th scope="col">Icon</th><th scope="col">Url Account</th><th className="action" scope="col">Action</th></tr>
                    </thead>
                    <tbody>
                      {this.state.user.socialMedia.map((data, index) => <tr key={index} data-id={data['id']}><th className="index">{index + 1}</th><td className="data"><img src={data['icon']} alt="" height="25px" /></td><td className="data">{data['urlAccount']}</td><td className="action"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalUpdate">Update</button></td></tr>)}
                    </tbody>
                  </TabpaneTable>
                </TabContent>
                <ModalUpdate dataUpdate={this.state.updateDetails.data} pathUpdate={this.state.updateDetails.path} idUpdate={this.state.updateDetails.id} titleUpdate={this.state.updateDetails.title} columnUpdate={this.state.updateDetails.column} />
              </ContainerOperation>
              <SamplePhoneApp dataUser={this.state.user} />
            </ContainerCRUD>
          </ContainerContext>
        </Container>
      </Frame>
    )
  }
}

export default Backend_Put