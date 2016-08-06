"use strict";

import React from "react";
import ReactDOM from "react-dom";
import uuid from "node-uuid";


export default React.createClass({

	getInitialState(){
		return {
			error: false,
			errorMessage: ""
		};
	},

	ensureInputEntered(){

		var firstName = this.refs.firstName.value;
		var lastName = this.refs.lastName.value;
		var email = this.refs.email.value;

		if (firstName.length == 0 && email.length == 0 && lastName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter staff details"
			});

			this.refs.firstName.focus();
			return false
		}
		else if (firstName.length == 0 && lastName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter staff's first name and last name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (firstName.length == 0 && email.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter staff's first name and email"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (lastName.length == 0 && email.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter staff's last name and email"
			});

			this.refs.lastName.focus();
			return false;
		}
		else if (firstName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter staff's first name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (lastName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter staff's last name"
			});

			this.refs.lastName.focus();
			return false;
		}
		else if ((email.length == 0) || !isNaN(email)){

			if (email.length == 0){
				this.setState({
					error: true,
					errorMessage: "Invalid input for staff's email address"
				});

				this.refs.email.focus();
				return false;
			}

			if (!isNaN(email)){
				this.setState({
					error: true,
					errorMessage: "Kindly enter staff email address"
				});

				this.refs.email.focus();
				return false;
			}
		}
		return true;
	},

	validateInput(){

		var firstName = this.refs.firstName.value;
		var lastName = this.refs.lastName.value;
		var email = this.refs.email.value;

		var regex = /\d/;

		if ((firstName.match(regex) != null)  && (lastName.match(regex) != null) && !isNaN(email)){
			this.setState({
				error: true,
				errorMessage: "Invalid input details entered"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if ((firstName.match(regex) != null)&& (lastName.match(regex) != null)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's first name and last name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if ((firstName.match(regex) != null) && !isNaN(email)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's first name and email"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if ((lastName.match(regex) != null) && !isNaN(email)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's last name and email"
			});

			this.refs.lastName.focus();
			return false;
		}
		else if (firstName.match(regex) != null){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's first name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (lastName.match(regex) != null){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's last name"
			});

			this.refs.lastName.focus();
			return false;
		}
		return true;
	},


	addStaff(e){

		e.preventDefault();

		if (this.validateInput() && this.ensureInputEntered()){

			this.props.onAddStaff({
				id: Date.now(),
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				role: this.refs.role.value,
				manager: this.refs.manager.value
			});

			this.refs.firstName.value = '';
			this.refs.lastName.value = '';
			this.refs.email.value = '';

		}

	},


	render(){
		var displayError = () =>{
			if (this.state.error){
				return(
					<div>
						<p>{this.state.errorMessage}</p>
					</div>
				);
			}

		};

		return(
			<div>
				{displayError()}	
				<form class="form-horizontal" role="form" onSubmit={this.addStaff}>

	                <div class="form-group">
	                    <label for="firstName" class="col-sm-2 control-label">First Name</label>
	                    <div class="col-sm-5">
	                      <input type="text" class="form-control" ref="firstName" placeholder="" />
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label for="lastName" class="col-sm-2 control-label">Last Name</label>
	                    <div class="col-sm-5">
	                      <input type="text" class="form-control" ref="lastName" placeholder="" />
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label for="email" class="col-sm-2 control-label">Email Address</label>
	                    <div class="col-sm-5">
	                      <input type="email" class="form-control" ref="email" placeholder="" />
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label for="role" class="col-sm-2 control-label">Role</label>
	                    <div class="col-sm-5">
	                        <select class="form-control" ref="role">
	                            <option>Administrator</option>
	                            <option>Program Manager</option>
	                            <option>Site Coordinator</option>
	                            <option>Therapist</option>
	                        </select>
	                    </div>
	                </div>
	                <div class="form-group">
	                    <label for="manager" class="col-sm-2 control-label">Manager</label>
	                    <div class="col-sm-5">
	                        <select class="form-control" ref="manager">
	                            <option>Eve Johnson</option>
	                            <option>John Doe</option>
	                            <option>Jill Smith</option>
	                        </select>
	                    </div>
	                </div>
	                <div class="form-group">
	                    <div class="col-sm-offset-2 col-sm-10">
	                        <button type="submit" class="btn btn-success">
	                        	<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
		                    	&nbsp; Add Staff
	                    	</button>
	                    </div>
	                </div>
	            </form>
			</div>
		);
	}

});