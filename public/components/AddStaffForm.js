"use strict";

import React from "react";
import ReactDOM from "react-dom";
import uuid from "node-uuid";

import ApiRequester from "../../apis/ApiRequester"


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
			return false;
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
		var regexTwo = /^[a-zA-Z]+$/;

		if (((firstName.match(regex) != null) || (firstName.match(regexTwo) == null))  &&
			((lastName.match(regex) != null) || (lastName.match(regexTwo) == null)) && !isNaN(email)){
			this.setState({
				error: true,
				errorMessage: "Invalid input details entered"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (((firstName.match(regex) != null) || (firstName.match(regexTwo) == null))
					&& ((lastName.match(regex) != null) || (lastName.match(regexTwo) == null))){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's first name and last name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (((firstName.match(regex) != null) || (firstName.match(regexTwo) == null)) && !isNaN(email)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's first name and email"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (((lastName.match(regex) != null) || (lastName.match(regexTwo) == null)) && !isNaN(email)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's last name and email"
			});

			this.refs.lastName.focus();
			return false;
		}
		else if ((firstName.match(regex) != null) || (firstName.match(regexTwo) == null)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for staff's first name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if ((lastName.match(regex) != null) || (lastName.match(regexTwo) == null)){
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

		if (this.ensureInputEntered() && this.validateInput() ){
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

	exitAddStaff(e){
		e.preventDefault();
		this.props.onExitAddStaff();
	},

	render(){
		var displayError = () =>{
			if (this.state.error){
				return(
					<div>
						<p class="error">{this.state.errorMessage}</p>
					</div>
				);
			}

		};

		return(
			<div class="well">
				<div class="row row-header">
					<div class="col-xs-12 col-sm-12 col-lg-12 ccol md-12">
							<p class="staff-header">Add Staff Member</p>
					</div>
				</div>
				<br />
				{displayError()}
				<br />
				<form class="form-horizontal" role="form">
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
                    <button type="submit" class="btn btn-success" onClick={this.addStaff}>
                      	<span class="glyphicon glyphicon-save" aria-hidden="true">  </span>
                    	&nbsp; Save
                  	</button>&nbsp; &nbsp; &nbsp;
										<button type="submit" class="btn btn-danger" onClick={this.exitAddStaff}>
											<span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
										&nbsp; Cancel
									</button>
                </div>
              </div>
          </form>
			</div>
		);
	}

});
