import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Yubin's version of practical-react</h1>)
        <div className="nav-container">
          <h3>My components</h3>
          <Link to="imageSlider">Image Slider</Link>
          <Link to="counter">Counter</Link>
          <Link to="myForm">My Form</Link>
          <Link to="validationForm">Validation Form</Link>
          <Link to="fetchRandomUser">Fetch Random User</Link>
          <Link to="fetchMultiple">Fetch Multiple</Link>
          <Link to="syncCounter">Sync Counter</Link>
        </div>
      </div>
    );
  }
}