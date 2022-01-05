import React from "react";
import logo from "../logo.svg";
import "../App.css";

const Body = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.text}</p>
    </header>
  </div>
);

export default Body;
