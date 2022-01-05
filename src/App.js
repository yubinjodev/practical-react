import React, { Component } from "react";
import MyForm from "./components/MyForm";

class App extends Component {
  state = {
    visible: true,
  };
  render() {
    return <MyForm />;
  }
}

export default App;
