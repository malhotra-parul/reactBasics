import React, {Component} from "react";
import Welcome from "./Welcome";
import Fun from "./Fun";

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello from App.</h1>
                <Fun/>
                <Welcome/>
            </div>
        )
    }
};

export default App;