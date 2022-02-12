import React from "react";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Counter from "./Components//Counter/Counter";
import MyForm from "./Components/MyForm/MyForm";
import ValidationForm from "./Components/ValidationForm/ValidationForm";
import FetchRandomUser from "./Components/FetchRandomUser/FetchRandomUser";
import FetchMultiple from "./Components/FetchMultiple/FetchMultiple";
import SyncCounter from "./Components/SyncCounter/SyncCounter";
import TodoList from "./Components/TodoList/TodoList";
import "./ReactComponents.css";

export default class Components extends React.Component {
  render() {
    return (
      <div className="art-container">
        <h2>React Components</h2>
        <div className="comp">
          <ImageSlider />
        </div>

        <div className="comp">
          <Counter />
        </div>

        <div className="comp">
          <MyForm />
        </div>

        <div className="comp">
          <ValidationForm />
        </div>

        <div className="comp">
          <FetchRandomUser />
        </div>

        <div className="comp">
          <FetchMultiple />
        </div>

        <div className="comp">
          <SyncCounter />
        </div>

        <div className="comp">
          <TodoList />
        </div>
      </div>
    );
  }
}
