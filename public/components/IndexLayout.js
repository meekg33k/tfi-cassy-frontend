"use strict"

import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import NavBarIndex from "./NavBarIndex";


export default React.createClass({
  	render() {
	    return (
	    	<div>
	    		<NavBarIndex />
	    		{this.props.children}

			</div>
		);
  }
});

	