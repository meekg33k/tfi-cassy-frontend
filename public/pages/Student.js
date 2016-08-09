"use strict"

import uuid from "node-uuid";
import React from "react";
import ReactDOM from "react-dom";
import BreadCrumb from "react-breadcrumbs"

import AddStudentForm from "../components/AddStudentForm"
import StudentList from "../components/StudentList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"



export default React.createClass({

	getInitialState(){
		return {
      addStudent: false,
			searchString: "",
			students: [
				{
					id: 898091,
					firstName: "Jermain",
					lastName: "Dupril",
					gender: "Male",
					grade: "5th",
					school: "Loyola College",
					ethnicity: "African American"
				}, {
					id: 777118,
					firstName: "Priyanka",
					lastName: "Miya",
					gender: "Female",
					grade: "12th",
					school: "Ranswood School",
					ethnicity: "Asian Indian"
				},
			]
		};
	},

	handleAddStudent(student){

		this.setState({
			students: [
				...this.state.students,
				student
			],
      addStudent: !this.state.addStudent
		});
	},


	handleDeleteStudent(student){

		var victimId;

    if (confirm("Do you want to proceed to delete the student?") == true) {

      	for(var i = 0;  i < this.state.students.length; i++) {
  		    if (this.state.students[i].id === student.id) {
  		        victimId = i;
  		        break;
  		    }
  			}

  			var updatedStudents = this.state.students.splice(victimId, 1);
  			this.setState(updatedStudents);
    }

	},


	handleEditStudent(editedStudent){

		var updatedStudents = this.state.students.map((student) => {
			if (student.id === editedStudent.id){
				student.firstName = editedStudent.firstName;
				student.lastName = editedStudent.lastName;
				student.grade = editedStudent.grade;
				student.school = editedStudent.school;
				student.gender = editedStudent.gender;
			};
		});

		this.setState(updatedStudents);
	},

  handleExitAddStudent(){
    this.setState({
      addStudent: false
    });
  },

  initiateAddStudent(){
    this.setState({
      addStudent: true
    });
  },

	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

  	render() {

  		var {students, searchString} = this.state;
  		var filteredStudents = SearchProcessor.filter(students, searchString);

      var renderAddStudent = () =>{
  			if (this.state.addStudent){
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
			            <StudentList students={filteredStudents} onEditStudent={this.handleEditStudent} onDeleteStudent={this.handleDeleteStudent}/>
			        </div>
			    </div>
			</div>
		);
  }
});
