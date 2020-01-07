import React from "react";

function Comment(props){
    return(
        <div className ="Comment">
            <UserInfo user={props.author} />
            
            <div className ="Comment-text">
                    {props.text}
            </div>
            <div className ="Comment-date">
                    {formatDate(props.date)}
            </div>
        </div>
    )
}
//extracting mini components from a component
function Avatar(props){
    return(
        <img className ="Avatar" 
        src={props.user.avatarUrl} alt={props.user.name} />
    )
}
function UserInfo(props){
    return(
        <div className ="UserInfo">
                <Avatar user= {props.user} />
                
                <div className ="UserInfo-name">
                    {props.user.name}
                </div>
            </div>
    )
}