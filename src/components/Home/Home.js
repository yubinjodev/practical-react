import React from "react";
import Counter from "../Counter/Counter";
import FetchRandomUser from "../FetchRandomUser/FetchRandomUser";
import ImageSlider from "../ImageSlider/ImageSlider";
import MyForm from "../MyForm/MyForm";
import SyncCounter from "../SyncCounter/SyncCounter";
import FetchMultiple from "../FetchMultiple/FetchMultiple";
import TodoList from "../TodoList/TodoList";
import ValidationForm from "../ValidationForm/ValidationForm";
import { Route, Routes, Link } from "react-router-dom";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to Yubin's Portfolio</h1>
        <div className="home-container">
          <h3>React Components</h3>
          <Link to="imageSlider">Image Slider</Link>
          <Link to="counter">Counter</Link>
          <Link to="myForm">My Form</Link>
          <Link to="validationForm">Validation Form</Link>
          <Link to="fetchRandomUser">Fetch Random User</Link>
          <Link to="fetchMultiple">Fetch Multiple</Link>
          <Link to="syncCounter">Sync Counter</Link>
          <Link to="todoList">Todo List</Link>
        </div>
      </div>
    );
  }
}
