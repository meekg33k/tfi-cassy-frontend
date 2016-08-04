"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";


//className Layout extends React.Component {
export default React.createClass({
	render(){
		return(
			<div>
		    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
	        	<div className="container">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <IndexLink to="/home">
		                	<span className="navbar-brand"><img src="../assets/images/imgLogo.png" height="80" ></img></span>
	                	</IndexLink>
		            </div>
		            <div id="navbar" class="navbar-collapse collapse">
		                <ul class="nav navbar-nav">
		                    <li>
		                    	<IndexLink to="/events/add" activeClassName="active">
		                      		<i class="fa fa-calendar"></i>
			                            &nbsp;Events
		                        </IndexLink>
		                    </li>
		                    <li>
		                    	<IndexLink to="/students/view" activeClassName="active">
		                        	<i class="fa fa-group "></i>
		                            &nbsp;Students
		                        </IndexLink>
		                    </li>
		                    <li>
		                        <a href="./reports.html">
		                            <span class="fa fa-pencil" aria-hidden="true">
		                            </span> 
		                            &nbsp;Reports
		                        </a>
		                    </li>
		                </ul>
		                <ul class="nav navbar-nav navbar-right">
		                    <li>
		                    	<Link to="/">
		                    		<span id="logout" class="glyphicon glyphicon-log-in" title="Logout Here"></span>
	                    		</Link>
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
