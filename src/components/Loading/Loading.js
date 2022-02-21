import React, {useEffect, useState} from "react";
import { Animated } from "react-animated-css";
import MainLogo from "./MainLogo.svg";
import MainLogoTop from "./MainLogoTop.svg";
import MainLogoRight from "./MainLogoRight.svg";
import MainLogoLeft from "./MainLogoLeft.svg";
import "./Loading.css";

export const Loading =()=>{

    return (
      <div className="logo-container">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </head>

        <Animated 
        animationIn="rotateIn" 
        animationOut="rotateOut" 
        animationInDuration={1800} 
        animationOutDuration={1800} 
        isVisible={true}>
          <img className="main-logo"
            src={MainLogo}
            alt="logo"
          />
        </Animated>
      </div>
    );
}
