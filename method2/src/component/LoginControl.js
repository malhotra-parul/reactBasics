import React, { Fragment } from "react";
 
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLoggedin : false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    };

    handleLoginClick(){
        this.setState({
            isLoggedin : true
        })
    };

    handleLogoutClick(){
        this.setState({
            isLoggedin: false
        })
    };
    render(){
        const isLoggedin = this.state.isLoggedin;
        let button;

        if(isLoggedin){
            button = <LoginButton onClick={this.handleLogoutClick}/>
        }else{
            button = <LogoutButton onClick={this.handleLoginClick} />
        }

        return(
            <Fragment>
            <Greeting isLoggedin={isLoggedin} />
            {button}
            </Fragment>
        )
    };
};
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
};


function LoginButton(props){
    return(
        <button onClick = {props.onClick}>Login</button>
    )
};
function LogoutButton(props){
    return(
        <button onClick = {props.onClick}>Logout</button>
    )
};

export default LoginControl;