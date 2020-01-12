import React from "react";

class Multiple extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            female: false,
            workEx : 5

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }
    handleChange(event){
        const target = event.target;
        const value = (target.type === "checkbox") ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <label>Check if you are a Female Candidate: 
                <input name="female"
                       type="checkbox" 
                       checked={this.state.female} 
                       onChange={this.handleChange} />
                </label>
                <br/>
                <label>Work Experience in years: 
                <input  name="workEx"
                        type="number"
                        value={this.state.workEx}
                        onChange = {this.handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    };
}

export default Multiple;