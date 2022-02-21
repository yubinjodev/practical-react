import React from "react";
import "./Contact.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default class Contact extends React.Component {
  // componentDidMount() {
  //   document.title = "Validation Form";
  // }

  state = initialState;

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
      <form className="contact-container" onSubmit={this.submitHandle}>
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

        <input
          id="message"
          name="message"
          type="text"
          value={this.state.message}
          onChange={this.changeHandle}
          placeholder="Message"
        ></input>

        <button type="submit">Send</button>
      </form>
    );
  }
}
