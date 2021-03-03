import React from 'react';
import { Frame, Container, Header2 } from './../../../App/Components';
import ContainerContext from './../Components/ContainerContext/ContainerContext';
import { Link } from 'react-router-dom';
import CardArticle from '../Components/CardArticle/CardArticle';

class SendingParams extends React.Component {
  state = {
    data: []
  }

  getRouter = async () => `http://localhost:${await fetch('/config/ports.json').then(response => response.json()).then(json => json.React_Router_Params)}`;

  getData = (url = '') => fetch(url).then(response => response.json()).then(json => json);

  componentDidMount = async () => this.setState({ data: await this.getData(`${await this.getRouter()}/Articles`) });

  render() {
    return (
      <Frame>
        <Container id="React_Router">
          <Header2 innerValue="Router - Sending Params" />
          <hr />
          <ContainerContext className="sending-params">
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand text-logo" to="#" style={{ fontSize: 42, transform: 'translateY(-2px)' }}>Articles</Link>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </nav>
            <section style={{ width: "100%", flex: 1, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'flex-start', gap: 30, overflow: 'auto', padding: 30 }}>
              {this.state.data.map((obj, index) => <CardArticle key={index} data={obj}/>)}
              <span style={{height:'100%', width:1}}></span>
            </section>
          </ContainerContext>
        </Container>
      </Frame>
    )
  }
}

export default SendingParams