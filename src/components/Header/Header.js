import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "./logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar-container">
          <li>
            <Link to="/">
              <img className="logo" src={Logo} alt="logo"></img>
            </Link>
          </li>
          <li className="navbar-contents">Home</li>
          <li className="navbar-contents">Projects</li>
          <li className="navbar-contents">About Me</li>
          <li className="navbar-contents">Contact</li>
          <li>
            <button id="github" className="contents-git">
              Github
            </button>
          </li>
          <li>
            <button id="gitlab" className="contents-git">
              GitLab
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
