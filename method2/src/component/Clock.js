import React from "react";
import ReactDOM from "react-dom";
//Adding local state to Class
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


export default Clock;