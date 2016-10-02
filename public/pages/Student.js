"use strict"

import uuid from "node-uuid";
import React from "react";
import ReactDOM from "react-dom";
import BreadCrumb from "react-breadcrumbs";
import {connect} from "react-redux";

import AddStudentForm from "../components/AddStudentForm"
import StudentList from "../components/StudentList"
import Search from "../components/Searcher"
import Util from "../../apis/Helper"

import * as actions from "../../actions/actions"



var Student = React.createClass({

	componentWillMount(){
		var user = JSON.parse(localStorage.getItem('user'));
		var {dispatch} = this.props;

		if (user){
			//User is logged in
			dispatch(actions.asyncFetchStudents());
			dispatch(actions.asyncFetchSchools());
		}
		else {
			//User needs to login
			window.location.replace(
			  window.location.pathname + window.location.search + '#/'
			);
			//dispatch(actions.setUserError());
		}
	},

	getInitialState(){
		return {
      		addStudent: false,
			error: false,
			errorMessage: "",
			searchString: "",
			students: this.props
		};
	},

	handleAddStudent(student){
		var { dispatch } = this.props;
		dispatch(actions.asyncAddStudent(student));
		this.handleExitAddStudent();
	},

	handleCancelEditStudent(){
		if  (this.state.error == true){
			this.setState({
				error: false
			});
		}
	},

	handleDeleteStudent(student){
		if (confirm("Do you want to proceed to delete the student?") == true) {
	    	var { dispatch } = this.props;
	    	dispatch(actions.asyncDeleteStudent(student));
	    }
	},


	handleEditStudent(editedStudent){
		var { dispatch } = this.props;
		dispatch(actions.asyncEditStudent(editedStudent));
	},


	handleExitAddStudent(){
	    var { dispatch } = this.props;
		dispatch(actions.enableAddStudent(false));
	  },

    initiateAddStudent(){
	    var { dispatch } = this.props;
		dispatch(actions.enableAddStudent(true));
    },

	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

	validateEditStudent(firstName, lastName){
		if ((firstName.length == 0) || (lastName.length == 0)){
			if ((firstName.length == 0) && (lastName.length == 0)){
					this.setState({
						error: true,
						errorMessage: "Kindly enter student first name and last name"
					});
					return {
						state: false,
						field: "firstName"
					};
			}
			else if (firstName.length == 0){
				this.setState({
					error: true,
					errorMessage: "Kindly enter student first name"
				});
				return {
					state: false,
					field: "firstName"
				};
			}
			else if (lastName.length == 0){
				this.setState({
					error: true,
					errorMessage: "Kindly enter student last name"
				});
				return {
					state: false,
					field: "lastName"
				};
			}
		}
		else{
			var inputValidator = Util.validateUserInput(firstName, lastName);
			if (!inputValidator.state){
				this.setState({
					error: true,
					errorMessage: inputValidator.errorMessage
				});
				return {
					state: false,
					field: inputValidator.field
				};
			}
			else{
				this.setState({
					error: false
				});
				return {
					state: true,
					field: ""
				};
			}
		}
	},

  	render() {

  		var {students} = this.props;
  		var searchString= this.state.searchString;
  		var filteredStudents = Util.filterStudents(students, searchString);

		var displayErrorMessage = () =>{
			if (this.state.error){
				return(
					<div>
						<p class="error">{this.state.errorMessage}</p>
					</div>
				);
			}
		};

      	var renderAddStudent = () =>{
  			if (this.props.addStudent){
  				return(
  					<div>
	            		<AddStudentForm onAddStudent={this.handleAddStudent} onExitAddStudent={this.handleExitAddStudent}/>
  					</div>
  				);
  			}

  		};

	    return (
	    	<div>
			    <div class="container">
	                <p class="line-breaker" />
	                <BreadCrumb routes={this.props.routes} separator =" >> "/>
	                <br />
	                <br />
			        <div class="row row-header report-form">
	      				{renderAddStudent()}
			            <br />
	                    <div class="row row-header">
		                    <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
		                        <p class="student-header">Student List</p>
		                    </div>
		                    <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
		                        <div class="form-group">
		                            <button type="submit" class="btn btn-success" onClick={this.initiateAddStudent}>
		                              <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
		                            &nbsp; Add Student
		                          </button>
		                        </div>
		                    </div>
	  			            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
	  			            	<Search onSearch={this.handleSearch} placeholder = "Enter student name here to search"/>
	  			            </div>
	                    </div>
						<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
							{displayErrorMessage()}
						</div>
			            <StudentList students={filteredStudents} onCancelEditStudent={this.handleCancelEditStudent} onDeleteStudent={this.handleDeleteStudent}
							onEditStudent={this.handleEditStudent} onValidateEditStudent={this.validateEditStudent}/>
			        </div>
			    </div>
			</div>
		);
  }
});

module.exports = connect(
	(store) => {
		return {
			students: store.students,
			addStudent: store.addStudentState
		};
	}
)(Student);