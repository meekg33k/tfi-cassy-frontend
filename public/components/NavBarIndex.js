"use strict"

import React from "react";
import ReactDOM from "react-dom";

//class Layout extends React.Component {
export default React.createClass({
	render(){
		return(
			<div>
		    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	        	<div class="container">
		            <div class="navbar-header">
		                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                    <span class="sr-only">Toggle navigation</span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                </button>
		                <a class="navbar-brand" href="../home.html"><img src="../assets/images/imgLogo.png" height="80" ></img></a>
		            </div>
		            <div id="navbar" class="navbar-collapse collapse">
		                <ul class="nav navbar-nav">

		                    <li>
		                        <a target="_blank" href="http://cassybayarea.org">
		                            <i class="fa fa-home"></i>
		                            <span class="nav-index"> About Us</span>
		                        </a>
		                    </li>
		                    <li>
		                    </li>
		                    <li>
		                        <a target="_blank" href="https://donatenow.networkforgood.org/CASSY"><i class="fa fa-money "></i>
		                            <span class="nav-index"> Make a Donation</span>
		                        </a>
		                    </li>
		                    <li>
		                    </li>
		                    <li>
		                        <a target="_blank" href="http://cassybayarea.org/contact-us/">
		                            <span class="fa fa-phone" aria-hidden="true">
		                            </span> 
		                            <span class="nav-index"> Contact Us</span>
		                        </a>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav> 
		    {this.props.children}
		    </div>
		);
	}
});
