import React from 'react';
import './ArticleDetail.css';
import { Frame, Container, Header2 } from './../../../../../App/Components';
import { Link } from 'react-router-dom';
import ContainerContext from './../../../Components/ContainerContext/ContainerContext';

class ArticleDetail extends React.Component {
  state = {
    data: {
      id: 1,
      title: "",
      post_date: "",
      hero_image: "https://wallpapercave.com/wp/wp7632525.jpg",
      text_article: ""
    }
  }

  getRouter = async () => `http://localhost:${await fetch('/config/ports.json').then(response => response.json()).then(json => json.React_Router_Params)}`;

  getData = (url = '') => fetch(url).then(response => response.json()).then(json => json);

  componentDidMount = async () => this.setState({ data: await this.getData(`${await this.getRouter()}/Articles/${this.props.match.params.id}`) });

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
            <section className="article-detail">
              <h4> {this.state.data.title} </h4>
              <img src={this.state.data.hero_image} alt="Article Hero" width="40%" />
              <p> ({this.state.data.post_date}) </p>
              <p> {this.state.data.text_article.split('\n').map((str) => [str, <br />])} </p>
            </section>
          </ContainerContext>
        </Container>
      </Frame>
    )
  }
}

export default ArticleDetail