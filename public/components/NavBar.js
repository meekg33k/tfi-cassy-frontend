"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";


export default React.createClass({
	logOut(){

		ApiRequester.logoutUser().then(function(res){
			localStorage.removeItem('user');
			console.log("User logged out!");
		}, function(err){
			console.log(err);
		});
	},

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
		                <IndexLink to="/home">
		                	<span className="navbar-brand"><img src="../assets/images/imgLogo.png" height="80" ></img></span>
	                	</IndexLink>
		            </div>
		            <div id="navbar" class="navbar-collapse collapse">
		                <ul class="nav navbar-nav">
							<li>
								<IndexLink to="/students" activeStyle={active}>
									<i class="fa fa-group "></i>
										&nbsp;Students
								</IndexLink>
							</li>
	                    <li>
	                    	<IndexLink to="/events" activeStyle={active}>
	                      		<span class="glyphicon glyphicon-calendar"></span>
		                            &nbsp;Events
                        	</IndexLink>
	                    </li>
	                    <li>
							<IndexLink to="/reports" activeStyle={active}>
	                      		<span class="glyphicon glyphicon-pencil"></span>
		                            &nbsp;Reports
                        	</IndexLink>
	                    </li>
		                </ul>
		                <ul class="nav navbar-nav navbar-right">
		                    <li>
		                    	<Link to="/">
		                    		<span id="logout" onClick={this.logOut} class="glyphicon glyphicon-log-in" title="Logout Here"></span>
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
