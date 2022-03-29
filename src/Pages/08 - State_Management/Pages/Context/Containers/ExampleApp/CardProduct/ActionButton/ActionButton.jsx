import React from "react";
import { Consumer } from "../../../../StateManagement/DummyApp";
import "./ActionButton.css";

function ActionButton(props) {
  return (
    <button
      className="button-action"
      onClick={() =>
        props.dispatch({ type: props.actionName, product: props.product })
      }
      style={props.style}
    >
      {props.text}
    </button>
  );
}

export default Consumer(ActionButton);
