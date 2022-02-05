import React from "react";
import "./Loading.css";

export default class Loading extends React.Component {
  render() {
    return (
      <img
        id={"rotate"}
        className={"loading-logo"}
        src={require("./logo.png")}
        alt="logo"
      />
    );
  }
}
