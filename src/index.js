import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects/Projects";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Counter from "./components/Counter/Counter";
import MyForm from "./components/MyForm/MyForm";
import ValidationForm from "./components/ValidationForm/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser/FetchRandomUser";
import FetchMultiple from "./components/FetchMultiple/FetchMultiple";
import SyncCounter from "./components/SyncCounter/SyncCounter";
import TodoList from "./components/TodoList/TodoList";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/imageSlider" element={<ImageSlider />} />
      <Route path="/projects/counter" element={<Counter />} />
      <Route path="/projects/myForm" element={<MyForm />} />
      <Route path="/projects/validationForm" element={<ValidationForm />} />
      <Route path="/projects/fetchRandomUser" element={<FetchRandomUser />} />
      <Route path="/projects/fetchMultiple" element={<FetchMultiple />} />
      <Route path="/projects/syncCounter" element={<SyncCounter />} />
      <Route path="/projects/todoList" element={<TodoList />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
