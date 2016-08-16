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

		if (firstName.length == 0 && lastName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter student details"
			});

			this.refs.firstName.focus();
			return false
		}
		else if (firstName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter student's first name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (lastName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter student's last name"
			});

			this.refs.lastName.focus();
			return false;
		}
		return true;
	},

	validateInput(){

		var firstName = this.refs.firstName.value;
		var lastName = this.refs.lastName.value;

		var regex = /\d/;
		var regexTwo = /^[a-zA-Z]+$/;

		if (((firstName.match(regex) != null) || (firstName.match(regexTwo) == null))  &&
			((lastName.match(regex) != null) || (lastName.match(regexTwo) == null))){
			this.setState({
				error: true,
				errorMessage: "Invalid input for student's first name and last name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if ((firstName.match(regex) != null) || (firstName.match(regexTwo) == null)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for student's first name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if ((lastName.match(regex) != null) || (lastName.match(regexTwo) == null)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for student's last name"
			});

			this.refs.lastName.focus();
			return false;
		}
		return true;
	},


	addStudent(e){

		e.preventDefault();

		if (this.ensureInputEntered() && this.validateInput()){
			this.props.onAddStudent({
				id: Date.now(),
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				gender: this.refs.gender.value,
				grade: this.refs.grade.value,
				school: this.refs.school.value
			});

			this.refs.firstName.value = '';
			this.refs.lastName.value = '';
		}

	},

	exitAddStudent(e){
		e.preventDefault();
		this.props.onExitAddStudent();
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
								<p class="student-header">Add Student</p>
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
	              <label for="grade" class="col-sm-2 control-label">Grade</label>
	              <div class="col-sm-5">
	                  <select class="form-control" ref="grade">
	                      <option>Kindergarten</option>
	                      <option>1st</option>
	                      <option>2nd</option>
	                      <option>3rd</option>
	                      <option>4th</option>
	                      <option>5th</option>
	                      <option>6th</option>
	                      <option>7th</option>
	                      <option>8th</option>
	                    	<option>9th</option>
	                      <option>10th</option>
	                      <option>11th</option>
	                      <option>12th</option>
	                  </select>
	              </div>
	          </div>
	          <div class="form-group">
	              <label for="school" class="col-sm-2 control-label">School</label>
	              <div class="col-sm-5">
	                  <select class="form-control" ref="school">
	                      <option>Ranswood Elementary</option>
	                      <option>ABC HighSchool</option>
	                      <option>XYZ College</option>
	                  </select>
	              </div>
	          </div>
	          <div class="form-group">
	              <label for="gender" ref="gender" class="col-sm-2 control-label">Gender</label>
	              <div class="col-sm-5">
	                  <select class="form-control" id="gender">
	                      <option>Male</option>
	                      <option>Female</option>
	                      <option>Not specified</option>
	                  </select>
	              </div>
	          </div>
	          <div class="form-group">
	              <label for="ethnicity" class="col-sm-2 control-label">Ethnicity</label>
	              <div class="col-sm-5">
	                  <select class="form-control" id="ethnicity">
	                    <option>Caucasian</option>
	                    <option>Hispanic/Latino</option>
	                    <option>Asian</option>
	                    <option>African American</option>
	                    <option>Pacific Islander</option>
	                  	<option>Native American</option>
	                    <option>Asian Indian</option>
	               			<option>Mixed Race</option>
	                  </select>
	              </div>
	          </div>
						<div class="form-group">
								<label for="referral" class="col-sm-2 control-label">Referral Source</label>
								<div class="col-sm-5">
										<select class="form-control" id="referral">
												<option>Self</option>
												<option>Peer</option>
												<option>Parent</option>
												<option>School Staff</option>
												<option>Other Adult</option>
												<option>Seen Last Year</option>
												<option>Classroom Presentation</option>
										</select>
								</div>
						</div>
						<div class="form-group">
								<label for="presentingIssue" class="col-sm-2 control-label">Presenting Issue</label>
								<div class="col-sm-5">
										<select class="form-control" id="referral">
												<option>Academic Stress</option>
												<option>Anger</option>
												<option>Anxiety</option>
												<option>Bullying (aggressor)</option>
												<option>...</option>
												<option>Substance Abuse/Family</option>
												<option>Suicidality</option>
										</select>
								</div>
						</div>
								<div class="form-group">
										<label class="col-sm-2 control-label">Free / Reduced Lunch</label>
											<div class="checkbox col-sm-5">
												<label>
													<input type="checkbox" />
												</label>
										</div>
								</div>
	          <div class="form-group">
	            <div class="col-sm-offset-2 col-sm-10">
	                <button type="submit" class="btn btn-success" onClick={this.addStudent}>
	                  	<span class="glyphicon glyphicon-save" aria-hidden="true">  </span>
	                	&nbsp; Save
	              	</button>&nbsp; &nbsp; &nbsp;
									<button type="submit" class="btn btn-danger" onClick={this.exitAddStudent}>
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
