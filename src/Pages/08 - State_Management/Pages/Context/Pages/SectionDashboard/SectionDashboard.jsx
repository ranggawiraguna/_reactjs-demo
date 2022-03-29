import React from "react";
import "./SectionDashboard.css";
import CardProduct from "./../../Containers/ExampleApp/CardProduct/CardProduct";
import { Consumer } from "../../StateManagement/DummyApp";

function SectionDashboard(props) {
  return (
    <div className="dashboard-section">
      {props.state.listProduct.map((obj, index) => (
        <CardProduct key={index} id={obj.id} product={obj} />
      ))}
    </div>
  );
}

export default Consumer(SectionDashboard);
