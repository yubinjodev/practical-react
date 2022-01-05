import React from "react";
import "../App.css";

export default (props) => (
  <header className="App-header">
    <div>{props.text}</div>
  </header>
);

export const AnotherHeader = (props) => (
  <div className="App-header">{props.weather}</div>
);
