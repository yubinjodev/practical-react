import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Counter from "./components/Counter/Counter";
import MyForm from "./components/MyForm/MyForm";
import ValidationForm from "./components/ValidationForm/ValidationForm";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/myForm" element={<MyForm />} />
          <Route path="/validationForm" element={<ValidationForm />} />
        </Routes>

        <Link className="go-back" to="/">
          Go back home
        </Link>
      </div>
    );
  }
}

export default App;
