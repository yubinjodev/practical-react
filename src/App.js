import React, { Component } from "react";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import "./App.css";

// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

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
