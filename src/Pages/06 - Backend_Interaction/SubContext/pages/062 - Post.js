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
import TabpaneForm from '../../Components/TabpaneForm/TabpaneForm';

class Backend_Post extends React.Component {
  state = {
    user: {
      profile: {
        name: "",
        foto: "",
        countFollowers: 0,
        countFollowing: 0,
        countPosts: 0,
      },
      programming: [],
      software: [],
      educations: [],
      workExperiences: [],
      certificateSeminar: [],
      hobbies: [],
      socialMedia: []
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

  getRouter = async () => `http://localhost:${await fetch('/config/ports.json').then(response => response.json()).then(json => json.Backend_Interaction)}`;

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

  postData = (url = '', data = {}) => fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.ok)
    .then(success => success);

  postDataUser = async (path, data) => {
    let success = await this.postData(`${await this.getRouter()}/${path}`, data)

    if (success) {
      alert("Data berhasil tersimpan");
      document.querySelectorAll(".tab-pane input").forEach((e) => {
        const valueIsNumber = /^\d+$/.test(e.value);
        if (valueIsNumber) {
          e.parentElement.querySelector('span > p:first-child').innerHTML = "0"
          e.value = 0;
        } else {
          e.value = "";
        }
      });
    } else {
      alert("Teejadi kesalahan, gagal menyimpan");
    }

    return success;
  }

  changeNavOperation(elemenSelected) {
    document.querySelector("#Backend_Section.container-context .container-operation .dropdown button").innerHTML = elemenSelected.innerHTML;
    document.querySelectorAll("#Backend_Section.container-context .container-operation .dropdown-item").forEach((e) => {
      e.classList.remove("active")
      e.setAttribute("aria-selected", false);
    });
    elemenSelected.setAttribute("aria-selected", true);
  }

  componentDidMount = async () => {
    this.setState({ user: await this.getDataUser() });

    document.querySelectorAll("#Backend_Section.container-context .container-operation .dropdown-item").forEach((item) => item.addEventListener('click', () => this.changeNavOperation(item)));

    document.querySelector("#Backend_Section.container-context .container-operation .tab-pane > div > span > .input-range > input").addEventListener('change', (e) => {
      document.querySelector("#Backend_Section.container-context .container-operation .tab-pane > div > span > .input-range > span > p").innerHTML = e.target.value;
    });

    document.querySelectorAll("#Backend_Section.container-context .container-operation .tab-pane > div > button").forEach((btn) => {
      btn.addEventListener('click', async () => {
        let newData = { };
        btn.parentElement.querySelectorAll('input').forEach((input) => newData = { ...newData, [input.name]: input.value });
        if (await this.postDataUser(btn.parentElement.getAttribute('name'), newData)) {
          this.setState({ user: await this.getDataUser() });
          this.viewDataJson();
        }
      })
    });

    this.viewDataJson();
  }

  render() {
    return (
      <Frame>
        <Container id="Backend_Post">
          <Header2 innerValue="Backend - POST" />
          <hr />
          <ContainerContext className="crud">
            <ContainerCRUD>
              <JsonPreview />
              <ContainerOperation>
                <DropdownData />
                <TabContent>
                  <TabpaneForm id="programming" >
                    <span>
                      <label htmlFor="name">Language Name : </label> <input name="name" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="progress">Percentage Progress (%) : </label>
                      <div className="input-range">
                        <input name="progress" type="range" className="custom-range" min="0" max="100" step="1" defaultValue="0" />
                        <span>
                          <p>0</p>
                          <p>%</p>
                        </span>
                      </div>
                    </span>
                    <span>
                      <label htmlFor="icon">Icon Url : </label> <input name="icon" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                  <TabpaneForm id="software">
                    <span>
                      <label htmlFor="name">Software Name : </label> <input name="name" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="icon">Icon Url : </label> <input name="icon" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                  <TabpaneForm id="educations">
                    <span>
                      <label htmlFor="image">School Picture Url : </label> <input name="image" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="name">School Name : </label> <input name="name" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="periode">Periode (xxxx - xxxx) : </label> <input name="periode" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                  <TabpaneForm id="workExperiences">
                    <span>
                      <label htmlFor="name">Company Name : </label> <input name="name" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="jobdesk">Job / Position : </label> <input name="jobdesk" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="periode">Periode (xxxx - xxxx) : </label> <input name="periode" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                  <TabpaneForm id="certificateSeminar">
                    <span>
                      <label htmlFor="name">Activity Name : </label> <input name="name" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="status">Status : </label> <input name="status" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="time">Activity Time(Month Year) : </label> <input name="time" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                  <TabpaneForm id="hobbies">
                    <span>
                      <label htmlFor="name">Hobby Name : </label> <input name="name" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="icon">Icon Url : </label> <input name="icon" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                  <TabpaneForm id="socialMedia">
                    <span>
                      <label htmlFor="icon">Icon Url : </label> <input name="icon" type="text" className="form-control" />
                    </span>
                    <span>
                      <label htmlFor="urlAccount">Social Media Url : </label> <input name="urlAccount" type="text" className="form-control" />
                    </span>
                    <button className="btn btn-primary">Post Data</button>
                  </TabpaneForm>
                </TabContent>
              </ContainerOperation>
              <SamplePhoneApp dataUser={this.state.user} />
            </ContainerCRUD>
          </ContainerContext>
        </Container>
      </Frame>
    )
  }
}

export default Backend_Post