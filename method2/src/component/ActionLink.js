import React from "react";

function ActionClick(){
    function handleClick(e){
        e.preventDefault();
        console.log(e);
    }

    return(
            <a href="https://www.google.com" onClick={handleClick}>Click me!</a>
        );
};

export default ActionClick;