import React from "react";
import { Frame, Container, Header2 } from "../../../App/Components";
import JsonViewer from "json-viewer-js";
import ContainerContext from "./../Components/ContainerContext/ContainerContext";
import SamplePhoneApp from "./../Components/SamplePhoneApp/SamplePhoneApp";
import ContainerCRUD from "./../Components/ContainerCRUD/ContainerCRUD";
import JsonPreview from "./../Components/JsonPreview/JsonPreview";
import ContainerOperation from "./../Components/ContainerOperation/ContainerOperation";
import DropdownData from "../Components/DropdownData/DropdownData";
import TabContent from "../Components/TabContent/TabContent";
import TabpaneTable from "../Components/TabpaneTable/TabpaneTable";
import API from "../services/API";

class Backend_Delete extends React.Component {
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

  getDataUser = async () => {
    return {
      profile: await API.getUserProfile(),
      programming: await API.getUserProgramming(),
      software: await API.getUserSoftware(),
      educations: await API.getUserEducations(),
      workExperiences: await API.getUserWorkExperiences(),
      certificateSeminar: await API.getUserCertificateSeminar(),
      hobbies: await API.getUserHobbies(),
      socialMedia: await API.getUserSocialMedia(),
    };
  };

  deleteDataUser = async (path, id) => {
    let success = await API.deleteUserData(path, id);

    if (success) {
      alert("Data berhasil di hapus");
      this.setState({
        user: await this.getDataUser(),
      });
    } else {
      alert("Terjadi kesalahan, gagal menghapus data");
    }

    return success;
  };

  componentDidMount = async () => {
    this.setState({
      user: await this.getDataUser(),
    });

    document
      .querySelectorAll(
        "#GlobalAPI_Section.container-context .container-operation section tbody td.action > button"
      )
      .forEach((btn) => {
        btn.addEventListener("click", async () => {
          const currentPath =
            btn.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
              "name"
            );
          const idDataDelete = parseInt(
            btn.parentElement.parentElement.dataset["id"]
          );

          if (await this.deleteDataUser(currentPath, idDataDelete))
            this.setState({ user: await this.getDataUser() });
        });
      });

    this.viewDataJson();
  };

  render() {
    return (
      <Frame>
        <Container id="GlobalAPI_Delete">
          <Header2 innerValue="Global API - DELETE" />
          <hr />
          <ContainerContext className="crud">
            <ContainerCRUD>
              <JsonPreview />
              <ContainerOperation>
                <DropdownData />
                <TabContent>
                  <TabpaneTable id="programming" label="Programming Skills">
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Icon</th>
                        <th scope="col">Name</th>
                        <th scope="col">Progress</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.programming.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">
                            <img src={data["icon"]} alt="" height="25px" />
                          </td>
                          <td className="data">{data["name"]}</td>
                          <td className="data">{data["progress"]}%</td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="software" label="Software Skills">
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Icon</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.software.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">{data["name"]}</td>
                          <td className="data">
                            <img src={data["icon"]} alt="" height="25px" />
                          </td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="educations" label="Educations">
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Periode</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.educations.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">{data["name"]}</td>
                          <td className="data">{data["periode"]}</td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="workExperiences" label="Work Experiences">
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Jobdesk</th>
                        <th scope="col">Periode</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.workExperiences.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">{data["name"]}</td>
                          <td className="data">{data["jobdesk"]}</td>
                          <td className="data">{data["periode"]}</td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable
                    id="certificateSeminar"
                    label="Certificate / Seminar"
                  >
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Time</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.certificateSeminar.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">{data["name"]}</td>
                          <td className="data">{data["status"]}</td>
                          <td className="data">{data["time"]}</td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="hobbies" label="Hobbies">
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Icon</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.hobbies.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">{data["name"]}</td>
                          <td className="data">
                            <img src={data["icon"]} alt="" height="25px" />
                          </td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                  <TabpaneTable id="socialMedia" label="Social Media">
                    <thead className="thead-dark">
                      <tr>
                        <th className="index" scope="col">
                          No
                        </th>
                        <th scope="col">Icon</th>
                        <th scope="col">Url Account</th>
                        <th className="action" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.socialMedia.map((data, index) => (
                        <tr key={index} data-id={data["id"]}>
                          <th className="index">{index + 1}</th>
                          <td className="data">
                            <img src={data["icon"]} alt="" height="25px" />
                          </td>
                          <td className="data">{data["urlAccount"]}</td>
                          <td className="action">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-toggle="modal"
                              data-target="#ModalUpdate"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </TabpaneTable>
                </TabContent>
              </ContainerOperation>
              <SamplePhoneApp dataUser={this.state.user} />
            </ContainerCRUD>
          </ContainerContext>
        </Container>
      </Frame>
    );
  }
}

export default Backend_Delete;
