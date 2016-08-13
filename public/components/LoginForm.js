"use strict"

import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";


export default React.createClass({

	getDefaultProps(){
		return {
			name: "React"
		};
	},

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
		return(
			<div>
				<form id="loginForm" class="form-horizontal" role="form" onSubmit={this.onLogin}>
            <div class="form-group has-feedback">
                <label htmlFor="username" class="control-label">Username</label>
                <input type="text" name="username" ref="username" class="form-control" placeholder="Enter email address" />
                <i class="glyphicon glyphicon-user form-control-feedback"></i>
            </div>
            <div class="form-group has-feedback" >
                <label htmlFor="password" class="control-label">Password</label>
                <input type="password" name="password" ref="password" class="form-control" placeholder="Enter password" />
                <i class="glyphicon glyphicon-eye-open form-control-feedback"></i>
            </div>
            <div class="form-group">
                <div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
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
