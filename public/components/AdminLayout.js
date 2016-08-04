"use strict"

import React from "react";
import {Link} from "react-router";
import NavBar from "./NavAdmin";


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

	