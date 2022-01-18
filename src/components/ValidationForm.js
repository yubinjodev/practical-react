import React from "react";
import "./ValidationForm.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValidationForm extends React.Component {
  state = initialState;

  changeHandle = (event) => {
    const isCheckBox = event.target.type === "checkbox";

    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
    });
  };

  validation = () => {
    // let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  submitHandle = (event) => {
    event.preventDefault();
    const isValid = this.validation();

    if (isValid) {
      alert("Validated!");
      this.setState(initialState);
    }
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
        <div className="emailError">{this.state.emailError}</div>

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
