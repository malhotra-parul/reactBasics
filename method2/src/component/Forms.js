import React from "react";

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(event){
        console.log("A form was submitted with value - "+this.state.value);
        event.preventDefault();
    }
    handleChange(event){
        this.setState({
            value: event.target.value.toUpperCase()
        });
        console.log(event.target.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" value={this.state.value} onChange={this.handleChange}></input>
                <button type="submit" >Submit</button>
            </form>
        )
    };
}

export default Forms;