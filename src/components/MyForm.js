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
        <h3 className="header">Contact Form</h3>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.changeHandle}
          placeholder="Name"
        />

        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.changeHandle}
          placeholder="Email"
        />

        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.changeHandle}
          placeholder="Title"
        />

        <textarea
          name="message"
          type="text"
          value={this.state.message}
          onChange={this.changeHandle}
          placeholder="Message"
        ></textarea>

        <label>
          <input
            name="agreeToTerms"
            type="checkbox"
            checked={this.state.agreeToTerms}
            onChange={this.changeHandle}
          ></input>
          I agree to terms and agreements
        </label>

        <div>
          <select
            name="getEmail"
            value={this.state.getEmail}
            onChange={this.changeHandle}
          >
            <option>Yes, I want promotional emails</option>
            <option>No, I do not want promotional emails</option>
          </select>
        </div>

        <button type="submit">Send</button>
      </form>
    );
  }
}
