"use strict"

import uuid from "node-uuid";
import React from "react";
import ReactDOM from "react-dom";

import AddStudentForm from "../components/AddStudentForm"
import StudentList from "../components/StudentList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"



export default React.createClass({

	getInitialState(){
		return {
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
			]
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


	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

  	render() {

  		var {students, searchString} = this.state;

  		var filteredStudents = SearchProcessor.filter(students, searchString);

	    return (
	    	<div>
				 <div class="container">
                    <p class="line-breaker" />
                    <div class="row row-header">
                        <div class="col-xs-12 col-sm-7 col-lg-7 col md-7">
                            <p class="student-header">Add Student</p>
                        </div>
			            <div class="col-xs-12 col-sm-5 col-lg-5 ccol md-5 ">
			            	<Search onSearch={this.handleSearch} placeholder = "Enter student name here to search"/>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <p class="line-breaker" />
			            <AddStudentForm onAddStudent={this.handleAddStudent}/>
			            <p class="line-breaker" />
			            <StudentList students={filteredStudents} onEditStudent={this.handleEditStudent} onDeleteStudent={this.handleDeleteStudent}/>
			        </div>
			    </div>
			</div>
		);
  }
});
