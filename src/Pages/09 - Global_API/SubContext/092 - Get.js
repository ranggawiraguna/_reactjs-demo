import React from "react";
import { Frame, Container, Header2 } from "../../../App/Components";
import JsonViewer from "json-viewer-js";
import ContainerContext from "./../Components/ContainerContext/ContainerContext";
import SamplePhoneApp from "./../Components/SamplePhoneApp/SamplePhoneApp";
import ContainerCRUD from "./../Components/ContainerCRUD/ContainerCRUD";
import JsonPreview from "./../Components/JsonPreview/JsonPreview";
import API from "../services/API";

class Backend_Get extends React.Component {
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
      socialMedia: [],
    },
  };

  viewDataJson = () => {
    document.querySelector(".json-preview > div").innerHTML = "";
    document
      .querySelector(".json-preview > div")
      .classList.remove("jv-light-con");
    new JsonViewer({
      container: document.querySelector(".json-preview > div"),
      data: JSON.stringify(this.state.user),
      theme: "light",
      expand: false,
    });
  };

  componentDidMount = async () => {
    this.setState({
      user: {
        profile: await API.getUserProfile(),
        programming: await API.getUserProgramming(),
        software: await API.getUserSoftware(),
        educations: await API.getUserEducations(),
        workExperiences: await API.getUserWorkExperiences(),
        certificateSeminar: await API.getUserCertificateSeminar(),
        hobbies: await API.getUserHobbies(),
        socialMedia: await API.getUserSocialMedia(),
      },
    });

    this.viewDataJson();
  };

  render() {
    return (
      <Frame>
        <Container id="GlobalAPI_Get">
          <Header2 innerValue="Global API - GET" />
          <hr />
          <ContainerContext className="crud">
            <ContainerCRUD>
              <JsonPreview />
              <SamplePhoneApp dataUser={this.state.user} />
            </ContainerCRUD>
          </ContainerContext>
        </Container>
      </Frame>
    );
  }
}

export default Backend_Get;
