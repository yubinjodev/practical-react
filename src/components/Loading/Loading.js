import React from "react";
import "./Loading.css";

export default class Loading extends React.Component {
  render() {
    return <img src={require("./logotext.png")} alt="logo" />;
  }
}
