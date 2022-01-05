import React from "react";
import "./MyForm.css";

export default class MyForm extends React.Component {
  state = {
    name: "",
    email: "",
    title: "",
    message: "",
    agreeToTerms: false,
    getEmail: "Yes",
  };

  changeHandle = (event, fieldName) => {
    console.log(fieldName);
    this.setState({ [fieldName]: event.target.value });
  };

  agreeToTermsHandle = (event) => {
    this.setState({ agreeToTerms: event.target.checked });
  };

  submitHandle = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h3 className="header">Contact Form</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.changeHandle(event, "name")}
          placeholder="Name"
        ></input>
        <input
          type="text"
          value={this.state.email}
          onChange={(event) => this.changeHandle(event, "email")}
          placeholder="Email"
        ></input>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.changeHandle(event, "title")}
          placeholder="Title"
        ></input>

        <textarea
          type="text"
          value={this.state.message}
          onChange={(event) => this.changeHandle(event, "message")}
          placeholder="Message"
        ></textarea>

        <label>
          <input type="checkbox" onChange={this.agreeToTermsHandle}></input>I
          agree to terms and agreements
        </label>

        <select
          value={this.state.getEmail}
          onChange={(event) => this.changeHandle(event, "getEmail")}
        >
          <option>Yes, I want promotional emails</option>
          <option>No, I do not want promotional emails</option>
        </select>

        <button onClick={this.submitHandle}>Send</button>
      </div>
    );
  }
}
