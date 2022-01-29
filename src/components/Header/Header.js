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
              <img className="navbar-logo" src={Logo} alt="logo"></img>
            </Link>
          </li>
          <div>
            <li className="navbar-contents">Home</li>
            <li className="navbar-contents">Projects</li>
            <li className="navbar-contents">About Me</li>
            <li className="navbar-contents">Contact</li>
          </div>
          <div className="contents-git">
            <li>
              <button
                onClick={() => {
                  window.location.href = "https://github.com/yubinitdadev";
                }}
                id="github"
              >
                Github
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.location.href = "https://gitlab.com/yubinitdadev";
                }}
                id="gitlab"
              >
                GitLab
              </button>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
