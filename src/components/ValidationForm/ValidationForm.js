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
  componentDidMount() {
    document.title = "Validation Form";
  }
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
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Name cannot be empty";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }

    if (this.state.password.length < 8) {
      passwordError = "Password must be at least 8 characters long";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  };

  submitHandle = (event) => {
    event.preventDefault();
    const isValid = this.validation();

    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form className="container" onSubmit={this.submitHandle}>
        <h3 className="header">Validation Form</h3>
        <div className="error">{this.state.nameError}</div>
        <div>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.changeHandle}
            placeholder="Name"
          />
        </div>
        <div className="error">{this.state.emailError}</div>
        <div>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.changeHandle}
            placeholder="Email"
          />
        </div>

        <div className="error">{this.state.passwordError}</div>
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
