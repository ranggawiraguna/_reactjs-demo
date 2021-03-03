import React from 'react';
import { Frame, Container, Header2 } from '../../../../App/Components';
import JsonViewer from 'json-viewer-js';
import ContainerContext from './../../Components/ContainerContext/ContainerContext';
import SamplePhoneApp from './../../Components/SamplePhoneApp/SamplePhoneApp';
import ContainerCRUD from './../../Components/ContainerCRUD/ContainerCRUD';
import JsonPreview from './../../Components/JsonPreview/JsonPreview';

class Backend_Get extends React.Component {
  state = {
    user : {
      profile : {
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

  componentDidMount = async () => {
    this.setState({ user: await this.getDataUser() });
    this.viewDataJson();
  }


  render() {
    return (
      <Frame>
        <Container id="Backend_Get">
          <Header2 innerValue="Backend - GET" />
          <hr />
          <ContainerContext className="crud">
            <ContainerCRUD>
              <JsonPreview />
              <SamplePhoneApp dataUser={this.state.user} />
            </ContainerCRUD>
          </ContainerContext>
        </Container>
      </Frame>
    )
  }
}

export default Backend_Get