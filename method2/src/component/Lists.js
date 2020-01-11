import React from "react";
import ReactDOM from "react-dom";

function Lists(props){

    return(
        <li>{props.value}</li>
    )
};

function NameList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
    <Lists id={number.toString()} value={number} />);

    return(
        <ul>
            {listItems}
        </ul>
    )

}
const numbers = [1,2,3,4,5];
ReactDOM.render(<NameList numbers= {numbers} />, document.getElementById("root"));

export default Lists;