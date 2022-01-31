import React from "react";
import { Link } from "react-router-dom";
import Flowers from "./Images/flowers.png"
import Reflection from "./Images/reflection.png"
import Bubble from "./Images/bubble.jpg"
import Sunflowers from "./Images/sunflowers.jpg"
import "./Projects.css";

export default class Home extends React.Component {
  state={
    itProjects:true
  }

  render() {
    return (
      <div className="home">
        <div className="projects-navbar">
        <ul>
          <h3 onClick={()=>{
            this.setState({itProjects: true});
          }}>React</h3>
          <h3>Web</h3>
          <h3>Mobile</h3>
          <h3 onClick={()=>{
            this.setState({itProjects: false});
          }}>Art Gallery</h3>
        </ul>
        </div>
        
        <div>{this.state.itProjects?
        <div className="home-container">
          <h3>React Components</h3>
          <Link className="components" to="imageSlider">
            Image Slider
          </Link>

          <Link className="components" to="counter">
            Counter
          </Link>

          <Link className="components" to="myForm">
            My Form
          </Link>

          <Link className="components" to="validationForm">
            Validation Form
          </Link>

          <Link className="components" to="fetchRandomUser">
            Fetch Random User
          </Link>

          <Link className="components" to="fetchMultiple">
            Fetch Multiple
          </Link>

          <Link className="components" to="syncCounter">
            Sync Counter
          </Link>

          <Link className="components" to="todoList">
            Todo List
          </Link>
        </div>
        :
        <div className="art-container">
          <img className="frame "src={Flowers}/>
          <img className="frame " src={Reflection}/>
          <img className="frame " src={Bubble}/>
          <img className="frame " src={Sunflowers}/>
        </div>
      }</div>
        
        
      </div>
      
    );
  }
}
