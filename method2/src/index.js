
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
//condition && element -- if condition is true, only then element will b displayed. 
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <Fragment>
        <h1>HellO!</h1>
       
        { unreadMessages.length > 0 && 
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
        }
        </Fragment>
    )
};

const messages =  ["Re: Parul", "Re: Re: Parul", "Fw: To Dear"];

ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById("root"));



