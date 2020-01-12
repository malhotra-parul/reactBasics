import React from "react";

class Textarea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value : "Please enter some text here!"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({value: event.target.value})
    };
    handleSubmit(event){
        event.preventDefault();
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>TextArea:
                <textarea value={this.state.value} onChange= {this.handleChange} />
                </label>
                <input type="submit" value= "Submit" />
                
            </form>
        )
    }
}
export default Textarea;