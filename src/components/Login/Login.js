import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export const Login = () => {
  const [password, setPassword] = useState();

  return (
    <div>
      <form className="login-container">
        <h3 className="header">Enter passcode</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={() => {
            if (password != "yubin") {
              alert("invalid pw");
            }
            if (password === "yubin") {
              alert("yay");
            }
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
