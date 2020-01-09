import React from "react";
//Set up own timer and auto update every second
//adding life cycle methods
//mounting - 
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    //called immediately when a component is rendered in DOM, called as mounting.
    componentDidMount(){
        //setting up a timer here!
        this.timerId = setInterval(()=> this.tick(), 1000);
    }
    //called immediately just before a component is removed, called as Unmounting.
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    //using setState() to update clock and call render method to update DOM.
    tick(){
        this.setState({
            date: new Date()
        });
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