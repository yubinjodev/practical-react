import React from "react";
import shortid from "shortid";

const initialState = {
  text: "",
};
export default class Help extends React.Component {
  state = initialState;
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState(initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="enter your todo here"
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}
