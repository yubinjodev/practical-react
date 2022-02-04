import React from "react";
import NaverMapApi from "./NaverMapApi"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseDB from "../../firebaseConfig";
import "./AboutMe.css";
import { Geocoding } from "./Geocoding";

const initialState = {
  name: "",
  address: "",
  data:""
};

export default class AboutMe extends React.Component {
  state = initialState
  
  handleSubmit = (e) => {
    console.log("hi")
    e.preventDefault();
    if(!this.name||!this.address){
      alert("Please enter name and or address");
    }else{
      firebaseDB.child("Farms").push(this.state,(err)=>{
        if(err){
          alert(err);
        }else{
          alert("Farm added successfully");
        }
      })
    }
  };


  

  render() {
    return (
      
      <div>
        <h3>Naver Map Api</h3>
        <h3>{this.state.map}</h3>
        <div className="map-container">
          <form className="contact-container">
            <h3>Create</h3>
            <input
          placeholder="name"
          value={this.state.name}
          onChange={(e)=>this.setState({name: e.target.value})}
          />
          <input
          placeholder="address"
          value={this.state.address}
          onChange={(e)=>this.setState({address: e.target.value})}
          />
          <button
            className="map-button"
            onClick={(e)=>{
              e.preventDefault();
              if(!this.state.name||!this.state.address){
                alert("Please enter name and or address");
              }else{
                firebaseDB.child("Farms").push(this.state,(err)=>{
                  if(err){
                    alert(err);
                  }else{
                    alert("Farm added successfully");
                  }
                })
              }
              // this.setState(initialState)
            }}
            // onClick={() => this.handleSubmit}
          >
            Add Farm
          </button>
          </form>

          <form className="contact-container">
            <h3>Read</h3>
            {Object.keys(this.state.data).map((id, index)=>{
              return(
                <ul key={id}>
                  {/* <li scope="row">{index+1}</li> */}
                  <li>{this.state.data[id].name}</li>
                  <li>{this.state.data[id].address}</li>
                </ul>
              )
            })}
          <button
            className="map-button"
            onClick={()=>{
              let query= this.state.address
              alert(query)
              Geocoding(query)
//here boo
             }
            }
            // onClick={()=>{
            //   firebaseDB.child("Farms").on("value", (snapshot)=>{
            //     if(snapshot.val() !== null){
            //       this.setState({data:snapshot.val() });
            //     }else{
            //       this.setState({})

            //       return ()=>this.state
            //     }
            //   })
            // },[]}
            >
              Read
          </button>
          </form>
          
          <NaverMapApi />
        </div>
      </div>
    );
  }
}
