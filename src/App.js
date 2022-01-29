import React, { Component, useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Menu from "./Menu";
import Header from "./components/Header/Header";
import BounceLoader from "react-spinners/BounceLoader";
import "./App.css";
import Home from "./components/Home/Home";

class App extends Component {
  componentDidMount() {
    document.title = "Home";
  }

  state = { loading: true };

  render() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);

    return (
      <div>
        {this.state.loading ? <div></div> : <Header />}
        {this.state.loading ? <Loading /> : <div></div>}
        {this.state.loading ? (
          <div></div>
        ) : (
          <h1>Welcome to Yubin's Portfolio</h1>
        )}
      </div>
    );
  }
}

export default App;
