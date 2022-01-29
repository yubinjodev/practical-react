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
          <Link className="components" to="imageSlider">
            Image Slider &gt;
          </Link>

          <Link className="components" to="counter">
            Counter &gt;
          </Link>

          <Link className="components" to="myForm">
            My Form &gt;
          </Link>

          <Link className="components" to="validationForm">
            Validation Form &gt;
          </Link>

          <Link className="components" to="fetchRandomUser">
            Fetch Random User &gt;
          </Link>

          <Link className="components" to="fetchMultiple">
            Fetch Multiple &gt;
          </Link>

          <Link className="components" to="syncCounter">
            Sync Counter &gt;
          </Link>

          <Link className="components" to="todoList">
            Todo List &gt;
          </Link>
        </div>
      </div>
    );
  }
}
