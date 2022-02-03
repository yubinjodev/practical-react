import React from "react";
import {
  Circle,
  Ellipse,
  GroundOverlay,
  Marker,
  NaverMap,
  Overlay,
  Polygon,
  Polyline,
  Rectangle,
  RenderAfterNavermapsLoaded,
  loadNavermapsScript,
} from "react-naver-maps";
import { Geocoding } from "./Geocoding";
import NaverMapApi from "./NaverMapApi";
import "./AboutMe.css";

export default class AboutMe extends React.Component {
  state = {
    query: "",
  };

  render() {
    return (
      <div>
        <h3>Naver Map Api</h3>
        <h3>{this.state.map}</h3>
        <div className="map-container">
          <input
            placeholder="address"
            value={this.state.query}
            onChange={(e) => {
              this.setState({
                query: e.target.value,
              });
            }}
          ></input>

          <button
            onClick={() => {
              Geocoding(`${this.state.query}`);
            }}
            className="map-button"
          >
            search
          </button>
          <NaverMapApi />
        </div>
      </div>
    );
  }
}
