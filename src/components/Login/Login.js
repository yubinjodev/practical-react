import React, {useState} from "react";
import "./Login.css"

export const Login = () =>{
  const [password, setPassword] = useState();

  return(
    <div>
      <form className="valid-container">
      <h3 className="header">Enter the password</h3>
        <input
        placeholder="Password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}