import React from "react";
import "./FetchRandomUser.css";

export default class FetchRandomUser extends React.Component {
  componentDidMount() {
    document.title = "Fetch Random User";
  }
  state = {
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0] });
  }

  render() {
    return (
      <div className="user-container">
        <div>
          {!this.state.person ? (
            <div></div>
          ) : (
            <div className="user-container">
              <img src={this.state.person.picture.large} />
              <div>
                {this.state.person.name.first} {this.state.person.name.last}
              </div>
            </div>
          )}
        </div>
        <button>Generate New User</button>
      </div>
    );
  }
}
