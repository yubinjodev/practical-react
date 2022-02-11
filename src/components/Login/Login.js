import {useState} from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css"

export const Login = () =>{
  const navigate=useNavigate();
  const [password, setPassword] = useState();
  const auth="69420"

  const handleSubmit=()=>{
    if(password === auth){
      navigate("/home");
    }
  }

  return(
    <div className="center-div">
      <form 
      onSubmit={handleSubmit}
      className="valid-container">
      <h3 className="header">Enter password</h3>
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}