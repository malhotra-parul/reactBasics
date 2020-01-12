import React from "react";

 class Select extends React.Component{
     constructor(props){
         super(props);
         this.state={
             value : "coconut"
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
     };
     handleChange(event){
         this.setState({
            value: event.target.value
         })
     };
     handleSubmit(e){
         e.preventDefault();
     };
     render(){
         return(
             <form onSubmit={this.handleSubmit}>
                 <label>
                     Choose the flavour for your icecream- 
                        <select value={this.state.value} onChange={this.handleChange}>
                         <option value="strawberry">Strawberry</option>
                         <option value="mango">Mango</option>
                         <option value="coconut">Coconut</option>
                         <option value="kiwi">Kiwi</option>
                     </select>
                 </label>
                 <input type="submit" value="Submit" />
             </form>
         )
     }
 };
 export default Select;