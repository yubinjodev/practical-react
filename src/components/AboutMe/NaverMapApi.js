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
import "./NaverMapApi.css";

export default class NaverMapApi extends React.Component {
  YOUR_CLIENT_ID = "ao4ecp11iw";
  render() {
    return (
      <div>
        <RenderAfterNavermapsLoaded ncpClientId={this.YOUR_CLIENT_ID}>
          <NaverMap
            mapDivId={"react-naver-map"} // default: react-naver-map
            style={{
              width: "600px",
              height: "400px",
              margin: "0 auto",
            }}
            defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
            defaultZoom={10}
          >
            <Marker position={{ lat: 37.3595704, lng: 127.105399 }} />
          </NaverMap>
        </RenderAfterNavermapsLoaded>
      </div>
    );
  }
}
