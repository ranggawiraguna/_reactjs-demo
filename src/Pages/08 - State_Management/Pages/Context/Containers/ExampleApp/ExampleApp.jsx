import React from "react";
import "./ExampleApp.css";
import { ActionType, Consumer } from "../../StateManagement/DummyApp";

class ExampleApp extends React.Component {
  getRouter = async () =>
    `http://localhost:${await fetch("/config/ports.json")
      .then((response) => response.json())
      .then((json) => json.Redux_Implementation)}`;

  componentDidMount = async () =>
    this.props.dispatch({
      type: ActionType.initialState,
      data: await fetch(`${await this.getRouter()}/Products`)
        .then((response) => response.json())
        .then((json) => json),
    });

  render() {
    return <div id="ExampleApp">{this.props.children}</div>;
  }
}

export default Consumer(ExampleApp);
