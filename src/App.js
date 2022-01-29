import React, { Component, useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  state = { loading: true };

  render() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    return <div>{this.state.loading ? <Loading /> : <Header />}</div>;
  }
}

export default App;
