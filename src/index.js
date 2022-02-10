import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Login } from "./components/Login/Login";

ReactDOM.render(
  <BrowserRouter>
    <RenderAfterNavermapsLoaded ncpClientId={"ao4ecp11iw"}>
      <App />
    </RenderAfterNavermapsLoaded>
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <RenderAfterNavermapsLoaded ncpClientId={"ao4ecp11iw"}>
  //     <App />
  //   </RenderAfterNavermapsLoaded>

  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/home" element={<Home />} />
  //     <Route path="/projects" element={<Projects />} />
  //     <Route path="/contact" element={<Contact />} />
  //   </Routes>
  // </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
