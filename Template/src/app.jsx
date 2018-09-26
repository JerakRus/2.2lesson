import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/components/App";
import MainText from "./app/components/MainText";


ReactDOM.render(
    <div>
	    <App />
        <div><MainText /></div>
    </div>,
	document.getElementById("app")
);