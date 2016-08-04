"use strict"

import React from "react";
import ReactDOM from "react-dom";


export default React.createClass({
	getDefaultProps(){
		return {
			name: "React"
		};
	},
	
	render(){
		return(
			<h1>You are messing up!</h1>
		);
	}
});

/*
setTimeout(function(){

}, 2000);

setTimeout(() => {
	
}, 2000);*/