import React from "react";
import Syncer from "./Syncer";

const initialState = {
  count: 0,
};

export default class SyncCounter extends React.Component {
  componentDidMount() {
    document.title = "Sync Counter";
  }
  state = initialState;
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
      <div>
        <Syncer count={this.state.count} add={this.add} minus={this.minus} />
        <Syncer count={this.state.count} add={this.add} minus={this.minus} />
        <button onClick={() => this.setState(initialState)}>Refresh</button>
      </div>
    );
  }
}
