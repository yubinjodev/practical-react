import React from "react";

export default class NewCounter extends React.Component {
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
      <div className="container">
        <div>Counter : {this.state.count}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
