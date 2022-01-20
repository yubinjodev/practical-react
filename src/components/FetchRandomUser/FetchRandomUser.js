import React from "react";
import "./FetchRandomUser.css";

export default class FetchRandomUser extends React.Component {
  componentDidMount() {
    document.title = "Fetch Random User";
  }
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.loading || !this.state.person ? (
            <div>loading . . .</div>
          ) : (
            <div>
              <img src={this.state.person.picture.large} />
              <div>
                {this.state.person.name.first} {this.state.person.name.last}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            window.location.reload(false);
          }}
        >
          New User
        </button>
      </div>
    );
  }
}
