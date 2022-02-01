import React from "react";
import "./Projects.css";

import Components from "./Components";
import ArtGallery from "./ArtGallery";

const initialState = {
  web: false,
  mobile: false,
  dataEngineering: false,
  react: false,
  artGallery: false,
};

export default class Home extends React.Component {
  state = initialState;

  onClickHandle = (e) => {
    e.preventDefault();
    this.setState({ [e.target.getAttribute("name")]: true });
  };

  clearHandle = () => {};

  render() {
    return (
      <div className="home">
        <div className="projects-navbar">
          <ul>
            <h3 name="web" onClick={this.onClickHandle}>
              Web
            </h3>
            <h3 name="mobile" onClick={this.onClickHandle}>
              Mobile
            </h3>
            <h3 name="dataEngineering" onClick={this.onClickHandle}>
              Data Engineering
            </h3>
            <h3 name="react" onClick={this.onClickHandle}>
              React
            </h3>
            <h3 name="artGallery" onClick={this.onClickHandle}>
              Art Gallery
            </h3>
          </ul>
        </div>

        {this.state.react ? <Components /> : <div></div>}
        {this.state.artGallery ? <ArtGallery /> : <div></div>}
      </div>
    );
  }
}
