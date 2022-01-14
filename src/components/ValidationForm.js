import React from "react";
import "./ValidationForm.css";

export default class ValidationForm extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  changeHandle = (event) => {
    const isCheckBox = event.target.type === "checkbox";

    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  submitHandle = (event) => {
    event.preventDefault();
    console.log(this.state);
    alert("Submitted!");
  };

  render() {
    return (
      <form className="container" onSubmit={this.submitHandle}>
        <h3 className="header">Validation Form</h3>
        <div>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.changeHandle}
            placeholder="Name"
          />
        </div>

        <div>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.changeHandle}
            placeholder="Email"
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.changeHandle}
            placeholder="Password"
          />
        </div>

        <button type="submit">Send</button>
      </form>
    );
  }
}
