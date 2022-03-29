import React from "react";
import { Frame, Container } from "./../../../../../App/Components";
import { Switch, Route } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";
import SectionDashboard from "../Pages/SectionDashboard/SectionDashboard";
import SectionCart from "../Pages/SectionCart/SectionCart";
import SectionFavorite from "../Pages/SectionFavorite/SectionFavorite";
import SectionContainer from "../Components/SectionContainer/SectionContainer";
import ExampleApp from "../Containers/ExampleApp/ExampleApp";
import { Provider } from "../StateManagement/DummyApp";

function Context_Implementation() {
  return (
    <Frame>
      <Container id="Context_Implementation">
        <ExampleApp>
          <Navbar />
          <SectionContainer>
            <Switch>
              <Route
                exact
                path="/State-Management/Context/Implementation"
                component={SectionDashboard}
              />
              <Route
                exact
                path="/State-Management/Context/Implementation/Cart"
                component={SectionCart}
              />
              <Route
                exact
                path="/State-Management/Context/Implementation/Favorite"
                component={SectionFavorite}
              />
            </Switch>
          </SectionContainer>
        </ExampleApp>
      </Container>
    </Frame>
  );
}

export default Provider(Context_Implementation);
