import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-dark  navbar-expand-lg">
      <ul className="navbar-nav">
          <li className="navbar-brand nav-item">Clicky Game!</li>
          <li className="statementDisplay nav-item">{props.statement}</li>
          <li className="nav-item">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
)

export default Navbar;