import React from "react";

const Context = React.createContext();

const Provider = (Children) => {
  return class ProviderComponent extends React.Component {
    state = {
      listProduct: [],
      listCart: [],
      cartCount: 0,
      favoriteCount: 0,
      listFavorite: [],
    };

    dispatch = (action) => {
      switch (action.type) {
        case ActionType.initialState:
          return this.setState({ listProduct: action.data });

        case ActionType.addToCart:
          let cart = [...this.state.listCart];
          let isExists = false;

          cart.forEach((item, index) => {
            if (item.id === action.product.id) {
              isExists = true;
              return (cart[index] = {
                ...item,
                count: item.count + action.count,
              });
            }
          });

          if (!isExists) cart.push({ ...action.product, count: action.count });
          if (action.callback !== undefined) action.callback();

          return this.setState({
            listCart: cart,
            cartCount: this.state.cartCount + action.count,
          });

        case ActionType.addToFavorite:
          if (action.callback !== undefined) action.callback();
          return this.setState({
            favoriteCount: this.state.favoriteCount + 1,
            listFavorite: [...this.state.listFavorite, action.product],
          });

        case ActionType.removeFromCart:
          let carts = [...this.state.listCart];
          let indexCart = null;

          carts.forEach((item, index) => {
            if (item.id === action.product.id) return (indexCart = index);
          });

          if (indexCart !== null) carts.splice(indexCart, 1);
          if (action.callback !== undefined) action.callback();

          return this.setState({
            listCart: carts,
            cartCount: this.state.cartCount - action.product.count,
          });

        case ActionType.removeFromFavorite:
          let favorites = [...this.state.listFavorite];
          let indexFav = null;

          favorites.forEach((item, index) => {
            if (item.id === action.product.id) return (indexFav = index);
          });

          if (indexFav !== null) favorites.splice(indexFav, 1);
          if (action.callback !== undefined) action.callback();

          return this.setState({
            listFavorite: favorites,
            favoriteCount: this.state.favoriteCount - 1,
          });

        case ActionType.buyProduct:
          let carts_2 = [...this.state.listCart];
          let indexCart_2 = null;

          carts_2.forEach((item, index) => {
            if (item.id === action.product.id) return (indexCart_2 = index);
          });

          if (indexCart_2 !== null) carts_2.splice(indexCart_2, 1);
          if (action.callback !== undefined) action.callback();

          alert("Order Success, Please wait for the product to be sent");

          return this.setState({
            listCart: carts_2,
            cartCount: this.state.cartCount - action.product.count,
          });

        default:
          return this.state;
      }
    };

    render() {
      return (
        <Context.Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props} />
        </Context.Provider>
      );
    }
  };
};

const Consumer = (Children) => {
  return class ConsumerComponent extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(value) => <Children {...this.props} {...value} />}
        </Context.Consumer>
      );
    }
  };
};

const ActionType = {
  initialState: "INITIAL_STATE",
  addToCart: "ADD_TO_CART",
  addToFavorite: "ADD_TO_FAVORITE",
  removeFromCart: "REMOVE_FROM_CART",
  removeFromFavorite: "REMOVE_FROM_FAVORITE",
  buyProduct: "BUY_PRODUCT",
};

export { Provider, Consumer, ActionType };
