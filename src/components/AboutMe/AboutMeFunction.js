import React, { useState, useEffect } from "react";
import { getDatabase, ref, runTransaction } from "firebase/database";
import NaverMapApi from "./NaverMapApi";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseDB from "../../firebaseConfig";
import "./AboutMe.css";
import { Geocoding } from "./Geocoding";

export const AboutMeFunction = () => {
  const [data, setData] = useState({});
  const [state, setState] = useState({});
  const [coord, setCoord] = useState({});
  const [query, setQuery] = useState({});

  const { name, address } = state;

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter name");
    } else if (!address) {
      alert("Please enter address");
    } else {
      firebaseDB.child("Database/Farms").push(state, (err) => {
        if (err) {
          alert(err);
        } else {
          alert("Farm added successfully");
        }
      });
    }
  };

  useEffect(() => {
    firebaseDB.child("Database/Farms").on("value", (snapshot) => {
      if (snapshot.value !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  return (
    <div>
      <div>
        <h3>Naver Map Api</h3>
        <div className="map-container">
          <form className="contact-container">
            <h3>Create</h3>
            <input
              placeholder="name"
              name="name"
              value={name}
              onChange={handleInput}
            />
            <input
              placeholder="address"
              name="address"
              value={address}
              onChange={handleInput}
            />
            <button className="map-button" onClick={handleSubmit}>
              Add Farm
            </button>
          </form>

          <div className="contact-container">
            <h3>Read</h3>
            <div>
              {Object.keys(data).map((id, index) => {
                return (
                  <ul key={id}>
                    <li>{data[id].name}</li>
                    <li>{data[id].address}</li>
                  </ul>
                );
              })}
              {/* <Geocoding /> */}
            </div>
          </div>

          <NaverMapApi />
        </div>
      </div>
    </div>
  );
};
