"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";


//className Layout extends React.Component {
export default React.createClass({
	render(){
		const active = { color: 'white', backgroundColor: '#909439' };
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
		                <IndexLink to="/admin">
		                	<span className="navbar-brand"><img src="../assets/images/imgLogo.png" height="80" ></img></span>
	                	</IndexLink>
		            </div>
		            <div id="navbar" class="navbar-collapse collapse">
		                <ul class="nav navbar-nav">
		                    <li>
		                    	<IndexLink to="/admin/schools/edit" activeStyle={active}>
		                      		<i class="fa fa-university"></i>
		                            &nbsp;Schools
		                        </IndexLink>
		                    </li>
		                    <li>
		                    	<IndexLink to="/admin/students/add" activeStyle={active}>
		                        	<i class="fa fa-group "></i>
	                            	&nbsp;Students
		                        </IndexLink>
		                    </li>
		                    <li>
		                    	<IndexLink to="/admin/staff/add" activeStyle={active}>
		                        	<i class="fa fa-user "></i>
	                            	&nbsp;Staff
		                        </IndexLink>
		                    </li>
		                    <li>
		                        <a href="/admin/forms/edit">
		                            <span class="fa fa-edit" aria-hidden="true">
		                            </span>
		                            &nbsp;Forms
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
