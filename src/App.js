import React, { Component, useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Counter from "./components/Counter/Counter";
import MyForm from "./components/MyForm/MyForm";
import ValidationForm from "./components/ValidationForm/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser/FetchRandomUser";
import FetchMultiple from "./components/FetchMultiple/FetchMultiple";
import SyncCounter from "./components/SyncCounter/SyncCounter";
import TodoList from "./components/TodoList/TodoList";
import Loading from "./components/Loading/Loading";
import Menu from "./Menu";
import Header from "./components/Header/Header";

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
        <Header />
        {this.state.loading ? <Loading /> : <Menu />}
      </div>
    );
  }
}

export default App;
