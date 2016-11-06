"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";


export default React.createClass({

	getInitialState(){
		return {
			error: false
		}
	},


	getUserName(){
		return JSON.parse(localStorage.getItem('user')).username;
	},


	resetError(e){
		e.preventDefault();
		this.setState({
			error: false
		});
	},


	setNewPassword(e){
		e.preventDefault();
		if (this.refs.password.value != this.refs.password2.value){
			this.setState({
				error: true
			});
		}
		else{
			console.log("Make call to set Password");
			var user = JSON.parse(localStorage.getItem('user'));
			var password = this.refs.username.password;
		}
	},


	validatePassword(e){
		e.preventDefault();
		if (this.refs.password.value != this.refs.password2.value){
			document.getElementById('password2').style.borderColor = "red";
		}
		else{
			document.getElementById('password').style.borderColor = "green";
			document.getElementById('password2').style.borderColor = "green";
			this.setState({
				error: false
			});
		}
	},


	render(){
		var showPasswordError = () =>{
			if (this.state.error){
				document.getElementById('password').style.borderColor = "red";
				document.getElementById('password2').style.borderColor = "red";
				const style = {
			      color: 'red',
			      fontSize: 14
			    };
				return(
					<p style={style}>Passwords do not match</p>
				);
			}
			else{
				return(
					<p></p>
				);
			}
		};
		return(

			<div>
				<div class="jumbotron">
			        <div class="container">
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-12 col-lg-12 col md-12">
			                </div>
			            </div>
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
			                    <p ></p>
			                </div>
			                <div class="col-xs-12 col-sm-5 col-lg-4 col-md-5">
			                    <form id="resetForm" class="form-horizontal" role="form" onSubmit={this.setNewPassword}>
						            <div class="form-group has-feedback">
						                <label htmlFor="username" class="control-label">Username</label>
						                <input type="text" name="username" ref="username" class="form-control" defaultValue={this.getUserName()} required/>
						                <i class="glyphicon glyphicon-user form-control-feedback"></i>
						            </div>
						            <div class="form-group has-feedback" >
						                <label htmlFor="password" class="control-label">Enter New Password</label>
						                <input id="password" type="password" name="password" ref="password" class="form-control" placeholder="Enter password" required/>
						                <i class="glyphicon glyphicon-eye-open form-control-feedback"></i>
						            </div>
						            <div class="form-group has-feedback" >
						                <label htmlFor="password" class="control-label">Confirm Password</label>
						                <input id="password2" type="password" name="password2" ref="password2" class="form-control" 
						                		onChange={this.validatePassword} placeholder="Re-enter password" required/>
						                <i class="glyphicon form-control-feedback"></i>
						            </div>
						            <div class="form-group">
						            	{showPasswordError()}
					            	</div>
						            <div class="form-group">
						                <button class="btn btn-right btn-md btn-warning" type="submit">Set Password</button>
						            </div>
						        </form>
						        <p class="line-breaker" />
						        <p class="line-breaker" />
			                </div>
		                </div>
			        </div>
			    </div>
			</div>
		);
	}
});
