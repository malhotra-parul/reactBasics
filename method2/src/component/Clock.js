import React from "react";
import ReactDOM from "react-dom";
//Won't auto update
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>{this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


export default Clock;