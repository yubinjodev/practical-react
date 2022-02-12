import React from "react";
import { Animated } from "react-animated-css";
import MainLogo from "./MainLogo.svg";
import MainLogoTop from "./MainLogoTop.svg";
import MainLogoRight from "./MainLogoRight.svg";
import MainLogoLeft from "./MainLogoLeft.svg";
import "./Loading.css";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </head>
        <Animated
          animationIn="slideInLeft"
          animationInDuration={1000}
          isVisible={true}
        >
          <img
            id="logo-left"
            src={MainLogoLeft}
            alt="logo"
          />
        </Animated>

        <Animated
          id="logo-top"
          animationIn="slideInDown"
          animationInDuration={1000}
          isVisible={true}
        >
          <img src={MainLogoTop} alt="logo" />
        </Animated>

        <Animated
          id="logo-right"
          animationIn="slideInRight"
          animationInDuration={1000}
          isVisible={true}
        >
          <img src={MainLogoRight} alt="logo" />
        </Animated>
      </div>
    );
  }
}
