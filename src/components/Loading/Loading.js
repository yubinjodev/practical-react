import React from "react";
import "./Loading.css";

export default class Loading extends React.Component {
  render() {
    return (
      <img
        id={"rotate"}
        classname={"loading-logo"}
        src={require("./logotext.png")}
        alt="logo"
      />
    );
  }
}
