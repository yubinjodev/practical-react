import React, { Component, useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Counter from "./components/Counter/Counter";
import MyForm from "./components/MyForm/MyForm";
import ValidationForm from "./components/ValidationForm/ValidationForm";
import FetchRandomUser from "./components/FetchRandomUser/FetchRandomUser";
import FetchMultiple from "./components/FetchMultiple/FetchMultiple";
import SyncCounter from "./components/SyncCounter/SyncCounter";
import TodoList from "./components/TodoList/TodoList";
import Loading from "./components/Loading/Loading";

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/myForm" element={<MyForm />} />
          <Route path="/validationForm" element={<ValidationForm />} />
          <Route path="/fetchRandomUser" element={<FetchRandomUser />} />
          <Route path="/fetchMultiple" element={<FetchMultiple />} />
          <Route path="/syncCounter" element={<SyncCounter />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </div>
    );
  }
}
