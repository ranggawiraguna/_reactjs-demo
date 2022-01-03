import React from 'react';
import './ExampleApp.css';
import { connect } from 'react-redux';
import ActionType from './../../StateManagement/ActionType';

class ExampleApp extends React.Component {
  getRouter = async () => `http://localhost:${await fetch('/config/ports.json').then(response => response.json()).then(json => json.Redux_Implementation)}`;

  componentDidMount = async () => this.props.initialState(await fetch(`${await this.getRouter()}/Products`).then(response => response.json()).then(json => json));

  render(){
    return(
      <div id="ExampleApp">
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, (dispatch) => ({ initialState: (data) => dispatch({ type: ActionType.initialState, data: data }) }))(ExampleApp)