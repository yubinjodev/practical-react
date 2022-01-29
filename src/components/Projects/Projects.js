import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-container">
          <h3>React Components</h3>
          <Link className="components" to="imageSlider">
            Image Slider
          </Link>

          <Link className="components" to="counter">
            Counter
          </Link>

          <Link className="components" to="myForm">
            My Form
          </Link>

          <Link className="components" to="validationForm">
            Validation Form
          </Link>

          <Link className="components" to="fetchRandomUser">
            Fetch Random User
          </Link>

          <Link className="components" to="fetchMultiple">
            Fetch Multiple
          </Link>

          <Link className="components" to="syncCounter">
            Sync Counter
          </Link>

          <Link className="components" to="todoList">
            Todo List
          </Link>
        </div>
      </div>
    );
  }
}
