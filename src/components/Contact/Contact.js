import React from "react";
import './Contact.css'

const initialState={
    name:"",
    email:"",
    phone:"",
    message:""
}

export default class Contact extends React.Component{
    componentDidMount() {
        document.title = "Validation Form";
      }

    state=initialState;

    inputHandle=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandle =(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    
    render(){
        return (
            <form onSubmit={this.submitHandle}
             className="contact-form">
                 <h3>To. Yubin</h3>
                <input 
                onChange={this.inputHandle} 
                name="name" 
                placeholder="Name"
                value={this.state.name}>
                </input>
                
                <input 
                onChange={this.inputHandle} 
                name="email" 
                placeholder="Email"
                value={this.state.email}>
                </input>
                
                <input 
                onChange={this.inputHandle} 
                name="phone" 
                placeholder="Phone"
                value={this.state.phone}>
                </input>
                
                <input 
                id="message"
                onChange={this.inputHandle} 
                name="message" 
                placeholder="Message"
                value={this.state.message}>
                </input>
                
                <button type="submit">Send</button>
            </form>
        )
    }
}