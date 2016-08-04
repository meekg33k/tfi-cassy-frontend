"use strict"

import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import NavBar from "./NavBar";


export default React.createClass({
  	render() {
	    return (
	    	<div>
	    		<NavBar />
	    		{this.props.children}

			</div>
		);
  }
});

	