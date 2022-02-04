import React from "react";
import NaverMapApi from "./NaverMapApi";
import { useNavigate, useParams } from "react-router-dom";
import { Geocoding } from "./Geocoding";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseDB from "../../firebaseConfig";
import "./AboutMe.css";

export default class AboutMe extends React.Component {
  state = {
    name: "",
    adress: "",
  };
  submitHandle = () => {
    firebase.child("Farm").push(this.state, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("Address added!");
      }
    });
  };

  render() {
    return (
      <div>
        <h3>Naver Map Api</h3>
        <h3>{this.state.map}</h3>
        <div className="map-container">
          <input
            placeholder="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({
                name: e.target.value,
              });
            }}
          ></input>
          <input
            placeholder="address"
            value={this.state.adress}
            onChange={(e) => {
              this.setState({
                adress: e.target.value,
              });
            }}
          ></input>

          <button
            onClick={() => this.submitHandle}
            // onClick={() => {
            //   Geocoding(`${this.state.adress}`);
            // }}
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
