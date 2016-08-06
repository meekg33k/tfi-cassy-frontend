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

		if ((firstName.match(regex) != null)&& (lastName.match(regex) != null)){
			this.setState({
				error: true,
				errorMessage: "Invalid input for student's first name and last name"
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
		else if (firstName.match(regex) != null){
			this.setState({
				error: true,
				errorMessage: "Invalid input for student's first name"
			});

			this.refs.firstName.focus();
			return false;
		}
		else if (lastName.match(regex) != null){
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

		if (this.validateInput() && this.ensureInputEntered()){

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
				<form class="form-horizontal" role="form" onSubmit={this.addStudent}>
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
	                    <div class="col-sm-offset-2 col-sm-10">
	                        <button type="submit" class="btn btn-success">
	                        	<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
		                    	&nbsp; Add Student
	                    	</button>
	                    </div>
	                </div>
	            </form>
			</div>
		);
	}

});