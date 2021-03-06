import React from "react";
import "./FetchMultiple.css";

export default class FetchMultiple extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    document.title = "Fetch Multiple";
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className="container">loading...</div>;
    }

    if (!this.state.people.length) {
      <div>Cannot fetch users</div>;
    }

    return (
      <div>
        {this.state.people.map((person, idx) => (
          <div key={person.login.uuid}>
            {/* <div key={`user${idx}`}> */}
            <img src={person.picture.large} alt="userimage" />
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
          </div>
        ))}
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
