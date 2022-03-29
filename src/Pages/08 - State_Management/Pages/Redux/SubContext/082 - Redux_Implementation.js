import React from "react";
import { Frame, Container } from "./../../../../../App/Components";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";
import SectionDashboard from "../Pages/SectionDashboard/SectionDashboard";
import SectionCart from "../Pages/SectionCart/SectionCart";
import SectionFavorite from "../Pages/SectionFavorite/SectionFavorite";
import SectionContainer from "../Components/SectionContainer/SectionContainer";
import Store from "./../StateManagement/DummyApp";
import ExampleApp from "../Containers/ExampleApp/ExampleApp";

function Redux_Implementation() {
  return (
    <Frame>
      <Container id="Redux_Implementation">
        <Provider store={Store}>
          <ExampleApp>
            <Navbar />
            <SectionContainer>
              <Switch>
                <Route
                  exact
                  path="/State-Management/Redux/Implementation"
                  component={SectionDashboard}
                />
                <Route
                  exact
                  path="/State-Management/Redux/Implementation/Cart"
                  component={SectionCart}
                />
                <Route
                  exact
                  path="/State-Management/Redux/Implementation/Favorite"
                  component={SectionFavorite}
                />
              </Switch>
            </SectionContainer>
          </ExampleApp>
        </Provider>
      </Container>
    </Frame>
  );
}

export default Redux_Implementation;
