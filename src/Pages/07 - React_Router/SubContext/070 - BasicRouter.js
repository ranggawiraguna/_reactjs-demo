import React, { Component, Fragment } from 'react';
import { Frame, Container, Header2 } from './../../../App/Components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ContainerContext from './../Components/ContainerContext/ContainerContext';

class BasicRouter extends Component {
  state = {
    information: { name: "", about: "" },
    products: []
  }

  getRouter = async () => `http://localhost:${await fetch('/config/ports.json').then(response => response.json()).then(json => json.React_Router_Basic)}`;

  getData = (url = '') => fetch(url).then(response => response.json()).then(json => json);

  Home = () => {
    return (
      <Fragment>
        <div id="HomeCarousel" className="carousel slide" data-ride="carousel" data-interval="3000" style={{ height: 'calc(100% + 40px)', margin: -20 }}>
          <ol className="carousel-indicators">
            <li data-target="#HomeCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#HomeCarousel" data-slide-to="1"></li>
            <li data-target="#HomeCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }}>
            <div className="carousel-item active" style={{ height: '100%' }}>
              <img src={require('./../Assets/Carousel-1.svg')} height="100%" className="d-block w-100" alt="Example" />
              <div className="carousel-caption d-none d-md-block" style={{ color: 'black' }}>
                <p>Enjoy the friendly service of our shop</p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: '100%' }}>
              <img src={require('./../Assets/Carousel-2.svg')} height="100%" className="d-block w-100" alt="Example" />
              <div className="carousel-caption d-none d-md-block" style={{ color: 'black' }}>
                <p>Can booking a place to be together at a later time</p>
              </div>
            </div>
            <div className="carousel-item" style={{ height: '100%' }}>
              <img src={require('./../Assets/Carousel-3.svg')} height="100%" className="d-block w-100" alt="Example" />
              <div className="carousel-caption d-none d-md-block" style={{ color: 'black' }}>
                <p>Enjoy free shipping for the Jakarta and surrounding areas</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#HomeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#HomeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    )
  }

  Products = () => {
    return (
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'flex-start', columnGap: '40px', height: '100%' }}>
          {
            this.state.products.map((menu, index) => {
              return (
                <div key={index} style={{ backgroundColor: 'rgba(150,150,150,0.2)', borderRadius: 10, padding: 10, width: '350px' }}>
                  <div style={{ display: 'flex', width: '100%', height: '120px' }}>
                    <img src={menu.image} alt={`Menu ${menu.id}`} height="100%" />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 15, textAlign: 'start', padding: 10 }}>
                      <h3 style={{ fontWeight: 'bold', marginTop: 5, fontSize: 16 }}> {menu.name} </h3>
                      <Link to={`/React-Router/Basic-Router/Products/${menu.id}`} className="btn btn-primary" style={{ fontFamily: 'Product Sans, Comfortaa', marginTop: 5, fontSize: 14, letterSpacing: 1 }} role="button"> Lihat Detail </Link>
                    </div>
                  </div>
                  <Route exact path={`/React-Router/Basic-Router/Products/${menu.id}`} component={() => {
                    return (
                      <div style={{ width: '100%', height: '160px', textAlign: 'start', fontSize: 12 }}>
                        <hr />
                        <table>
                          <tr><td colSpan='3' style={{ lineHeight: 1.5 }}>{menu.information}</td></tr><br />
                          <tr><td style={{ fontWeight: 'bold' }}>Category </td><td style={{ padding: '0 10px' }}>:</td><td>{menu.category}</td></tr><br />
                          <tr><td style={{ fontWeight: 'bold' }}>Size</td><td style={{ padding: '0 10px' }}>:</td><td>{menu.size}</td></tr><br />
                          <tr><td style={{ fontWeight: 'bold' }}>Varian</td><td style={{ padding: '0 10px' }}>:</td><td>{menu.varian}</td></tr>
                        </table>
                      </div>
                    )
                  }} />
                </div>
              )
            })
          }
          <span style={{ height: '100%', width: 1 }}></span>
        </div>
      </Fragment>
    )
  }

  About = () => {
    return (
      <Fragment>
        <p style={{ fontSize: 14, lineHeight: 2 }}> {this.state.information.about} <br /><br /> - Toko Online {this.state.information.name} - </p>
      </Fragment>
    )
  }

  componentDidMount = async () => {
    this.setState({ information: await this.getData(`${await this.getRouter()}/Information`) })
    this.setState({ products: await this.getData(`${await this.getRouter()}/Products`) })

    let navItems = document.querySelectorAll('#Router_Section.container-context nav .nav-item > a');

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        document.querySelectorAll('#Router_Section.container-context nav .nav-item').forEach((e) => e.classList.remove('active'));
        item.parentElement.classList.add('active');
      })
    })

    let route = window.location.href.replace('http://localhost:3000/React-Router/Basic-Router', '');
    if(route.includes('Products')) navItems[1].click();
    else if(route.includes('About')) navItems[2].click();
    else navItems[0].click();
  }

  render() {
    return (
      <Frame>
        <Container id="React_Router">
          <Header2 innerValue="Router - Basic" />
          <hr />
          <ContainerContext className="basic-router">
            <BrowserRouter>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand text-logo" to="#" style={{ fontSize: 42, transform: 'translateY(-2px)' }}>React Router</Link>
                <div className="collapse navbar-collapse" id="RouterNavigation">
                  <ul className="navbar-nav mr-auto" style={{ margin: '0 10px', gap: 5, fontFamily: 'Product Sans, Comfortaa', fontSize: 18 }}>
                    <li className="nav-item"> <Link className="nav-link" to="/React-Router/Basic-Router/Home">Home</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/React-Router/Basic-Router/Products">Products</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/React-Router/Basic-Router/About">About</Link> </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
              <section style={{ flex: 1, width: '100%', padding: 20, overflow: 'auto' }}>                
                <Switch>
                  {/* keyword exact digunakan untuk memriksa path yang diterima secara penuh, jika tidak menggunakan exact maka route akan tetap di render walaupun pathnya hanya merupakan substring dari path yang diterima */}
                  <Route exact path="/React-Router/Basic-Router/Home" component={this.Home} /> 
                  <Route path="/React-Router/Basic-Router/Products" component={this.Products} />
                  <Route exact path="/React-Router/Basic-Router/About" component={this.About} />
                </Switch>
              </section>
              <footer style={{ backgroundColor: 'darkslategray', color: 'white', padding: 15, fontSize: 12 }}>
                <h5> Example Simulation - Basic React Router </h5>
              </footer>
            </BrowserRouter>
          </ContainerContext>
        </Container>
      </Frame>
    )
  }
}

export default BasicRouter