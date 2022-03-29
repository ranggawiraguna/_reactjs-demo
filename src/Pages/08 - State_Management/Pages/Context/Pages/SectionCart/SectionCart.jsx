import React from "react";
import { Consumer } from "../../StateManagement/DummyApp";
import CardProduct from "./../../Containers/ExampleApp/CardProduct/CardProduct";
import "./SectionCart.css";

function CartSection(props) {
  return (
    <div className="cart-section">
      {props.state.listCart.map((obj, index) => (
        <CardProduct key={index} id={obj.id} product={obj} />
      ))}
    </div>
  );
}

export default Consumer(CartSection);
