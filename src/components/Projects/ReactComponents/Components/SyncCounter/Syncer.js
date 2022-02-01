import React from "react";

export default class Syncer extends React.Component {
  render() {
    return (
      <div>
        <div>Counter : {this.props.count}</div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}
