"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";


export default React.createClass({

	onLogin(e){
		e.preventDefault();

		var username = this.refs.username.value;
		var password = this.refs.password.value;

		var user = {
			username: username,
			password: password
		}

		if (username.length >= 0 && typeof username === "string"){
			this.refs.username.value = '';
			this.refs.password.value = '';
			this.props.onUserLogin(user);
		}
	},

	render(){
		const active = { color: '#909439', backgroundColor: '#909439' };
		return(
			<div>
				<form id="loginForm" class="form-horizontal" role="form" onSubmit={this.onLogin}>
		            <div class="form-group has-feedback">
		                <label htmlFor="username" class="control-label">Username</label>
		                <input type="text" name="username" ref="username" class="form-control" placeholder="Enter email address" required/>
		                <i class="glyphicon glyphicon-user form-control-feedback"></i>
		            </div>
		            <div class="form-group has-feedback" >
		                <label htmlFor="password" class="control-label">Password</label>
		                <input type="password" name="password" ref="password" class="form-control" placeholder="Enter password" required/>
		                <i class="glyphicon glyphicon-eye-open form-control-feedback"></i>
		            </div>
		            <div class="form-group">
		                <div>
		                	<IndexLink to="/recover">
		                      	Forgot Password?
	                        </IndexLink>
		                </div>
		            </div>
		            <p class="line-breaker" />
		            <div class="form-group">
		                <button class="btn btn-lg btn-warning" type="submit">Login</button>
		            </div>
		        </form>
			</div>
		);
	}
});
