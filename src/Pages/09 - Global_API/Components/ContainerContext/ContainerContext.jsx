import React from "react";
import "./ContainerContext.css";

const ContainerContext = (props) => (
  <div
    id="GlobalAPI_Section"
    className={
      "container-context" +
      (props.className != null ? ` ${props.className}` : "")
    }
  >
    {" "}
    {props.children}{" "}
  </div>
);

export default ContainerContext;
