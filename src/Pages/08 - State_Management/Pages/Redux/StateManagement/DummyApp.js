import { createStore } from "redux";
import ActionType from "./ActionType";

const Store = createStore(
  (
    currentState = {
      listProduct: [],
      listCart: [],
      cartCount: 0,
      favoriteCount: 0,
      listFavorite: [],
    },
    action
  ) => {
    switch (action.type) {
      case ActionType.initialState:
        return { ...currentState, listProduct: action.data };

      case ActionType.addToCart:
        let cart = [...currentState.listCart];
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

        return {
          ...currentState,
          listCart: cart,
          cartCount: currentState.cartCount + action.count,
        };

      case ActionType.addToFavorite:
        if (action.callback !== undefined) action.callback();
        return {
          ...currentState,
          listFavorite: [...currentState.listFavorite, action.product],
        };

      case ActionType.removeFromCart:
        let carts = [...currentState.listCart];
        let indexCart = null;

        carts.forEach((item, index) => {
          if (item.id === action.product.id) return (indexCart = index);
        });

        if (indexCart !== null) carts.splice(indexCart, 1);
        if (action.callback !== undefined) action.callback();

        return {
          ...currentState,
          listCart: carts,
          cartCount: currentState.cartCount - action.product.count,
        };

      case ActionType.removeFromFavorite:
        let favorites = [...currentState.listFavorite];
        let indexFav = null;

        favorites.forEach((item, index) => {
          if (item.id === action.product.id) return (indexFav = index);
        });

        if (indexFav !== null) favorites.splice(indexFav, 1);
        if (action.callback !== undefined) action.callback();

        return {
          ...currentState,
          listFavorite: favorites,
          favoriteCount: currentState.favoriteCount - 1,
        };

      case ActionType.buyProduct:
        let carts_2 = [...currentState.listCart];
        let indexCart_2 = null;

        carts_2.forEach((item, index) => {
          if (item.id === action.product.id) return (indexCart_2 = index);
        });

        if (indexCart_2 !== null) carts_2.splice(indexCart_2, 1);
        if (action.callback !== undefined) action.callback();

        alert("Order Success, Please wait for the product to be sent");

        return {
          ...currentState,
          listCart: carts_2,
          cartCount: currentState.cartCount - action.product.count,
        };

      default:
        return currentState;
    }
  }
);

Store.subscribe(() => {
  console.log("State Changed : ", Store.getState());
});

export default Store;
