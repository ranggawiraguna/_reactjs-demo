import React from "react";
import "./CardProduct.css";
import CounterForm from "./CounterForm/CounterForm";
import { ActionType, Consumer } from "../../../StateManagement/DummyApp";
import { Switch, Route } from "react-router-dom";
import ActionButton from "./ActionButton/ActionButton";

class CardProduct extends React.Component {
  state = { isFavorite: false };

  changeFavorite = () => this.setState({ isFavorite: !this.state.isFavorite });

  componentDidMount = () => {
    this.props.state.listFavorite.forEach((item) => {
      if (item.id === this.props.id) this.setState({ isFavorite: true });
    });
  };

  render() {
    return (
      <div className="card-product" data-id={this.props.id}>
        <div className="product-header">
          <img
            src={this.props.product.brandIcon}
            alt="Brand Icon"
            width="12%"
          />
          <h4>{this.props.product.brandName}</h4>
        </div>
        <img src={this.props.product.image} alt="" width="100%" />
        <div className="product-title">
          <h5>{this.props.product.articleName}</h5>
          <Switch>
            <Route
              exact
              path="/State-Management/Context/Implementation"
              component={() => {
                return (
                  <button
                    onClick={() => {
                      if (!this.state.isFavorite)
                        this.props.dispatch({
                          type: ActionType.addToFavorite,
                          product: this.props.product,
                          callback: this.changeFavorite,
                        });
                      else
                        this.props.dispatch({
                          type: ActionType.removeFromFavorite,
                          product: this.props.product,
                          callback: this.changeFavorite,
                        });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      fill={
                        this.state.isFavorite
                          ? "rgba(255,0,0,1)"
                          : "rgba(0,0,0,0.2)"
                      }
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </button>
                );
              }}
            />
          </Switch>
        </div>
        <p>Rp. {this.props.product.price}</p>
        <Switch>
          {" "}
          <Route
            exact
            path="/State-Management/Context/Implementation/Cart"
            component={() => (
              <p style={{ marginTop: 10, fontWeight: "bold" }}>
                Order Quantity : {this.props.product.count}
              </p>
            )}
          />{" "}
        </Switch>
        <Switch>
          <Route
            exact
            path="/State-Management/Context/Implementation"
            component={() => <CounterForm product={this.props.product} />}
          />
          <Route
            exact
            path="/State-Management/Context/Implementation/Favorite"
            component={() => (
              <ActionButton
                product={this.props.product}
                actionName={ActionType.removeFromFavorite}
                text="Remove From Favorite"
              />
            )}
          />
          <Route
            exact
            path="/State-Management/Context/Implementation/Cart"
            component={() => (
              <ActionButton
                product={this.props.product}
                actionName={ActionType.removeFromCart}
                text="Remove From Cart"
              />
            )}
          />
        </Switch>
        <Switch>
          {" "}
          <Route
            exact
            path="/State-Management/Context/Implementation/Cart"
            component={() => (
              <ActionButton
                product={this.props.product}
                actionName={ActionType.buyProduct}
                text="Buy Product"
                style={{ marginTop: -5, backgroundColor: "#A3BAFF" }}
              />
            )}
          />{" "}
        </Switch>
      </div>
    );
  }
}

export default Consumer(CardProduct);
