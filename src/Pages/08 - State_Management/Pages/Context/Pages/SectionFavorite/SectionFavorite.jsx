import React from "react";
import CardProduct from "../../Containers/ExampleApp/CardProduct/CardProduct";
import { Consumer } from "../../StateManagement/DummyApp";
import "./SectionFavorite.css";

function SectionFavorite(props) {
  return (
    <div className="cart-section">
      {props.state.listFavorite.map((obj, index) => (
        <CardProduct key={index} id={obj.id} product={obj} />
      ))}
    </div>
  );
}

export default Consumer(SectionFavorite);
