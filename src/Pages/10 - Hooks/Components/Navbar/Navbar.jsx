import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <p className="navbar-brand">Example Hooks</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto"></ul>
        <form className="form-inline">
          <Switch>
            <Route
              exact
              path="/Hooks/Side-Effect"
              component={() => {
                return (
                  <Link
                    className="btn btn-outline-info my-2 my-sm-0"
                    to="/Hooks"
                  >
                    Back to Previous Page
                  </Link>
                );
              }}
            />
          </Switch>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
