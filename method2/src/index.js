import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from "./component/Clock";
//import Clock from "./component/Clock";


ReactDOM.render(<Clock date={new Date()} />, document.getElementById("main"));




