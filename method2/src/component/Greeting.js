import React from "react";

function Greeting(props){
    const isLoggedin = props.isLoggedin;
    if (isLoggedin){
        return <UserGreeting />;
    }
    else{
        return <GuestGreeting />;
    }

}

function UserGreeting(props){
    return(
        <h1>Hello! Welcome to our website!</h1>
    );
};

function GuestGreeting(props){
    return(
        <h1>Please signup to view this content.</h1>
    );
}

export default Greeting;