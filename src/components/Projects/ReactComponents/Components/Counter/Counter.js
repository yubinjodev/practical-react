import React from "react";
import "./Counter.css";

export default class Counter extends React.Component {
  componentDidMount() {
    document.title = "Counter";
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h3>Counter : {this.state.count}</h3>

        <div className="button-container">
          <button className="button-counter" onClick={this.add}>
            +
          </button>
          <button className="button-counter" onClick={this.minus}>
            -
          </button>
        </div>
      </div>
    );
  }
}
