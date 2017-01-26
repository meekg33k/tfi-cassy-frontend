"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddStudent = (student) => {
	return (dispatch, getState) => {
		ApiRequester.addStudent(student).then(function(res){
			alert("New student added successfully");  //<============ Change all alerts to modals
			dispatch(asyncFetchStudents());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncDeleteStudent = (student) => {
	return (dispatch, getState) => {

		ApiRequester.deleteStudent(student).then(function(res){
			alert("Student deleted successfully"); 
			//Update changes in Staff view
			dispatch(asyncFetchStudents());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncEditStudent = (student) => {
	return (dispatch, getState) => {

		ApiRequester.editStudent(student).then(function(res){
			alert("Changes saved successfully"); 
			dispatch(asyncFetchStudents());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchStudents = () => {
	return (dispatch, getState) => {

		ApiRequester.getAllStudents().then(function(res){
			dispatch(setStudentList(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchStudentsByStaff = () => {
	return (dispatch, getState) => {

		ApiRequester.getStudentsByUser().then(function(res){
			dispatch(setStudentList(res));
		}, function(err){
			console.log(err);
		});

	};
}


export var asyncFetchStudentById = (studentId) => {
	return (dispatch, getState) => {

		ApiRequester.getOneStudent(studentId).then(function(res){
			dispatch(setSelectedStudent(res[0]));
		}, function(err){
			console.log(err);
		});

	};
}


export var asyncAddStudentScore = (scoreOption, scoreValue, date, studentId) => {
	return (dispatch, getState) => {

		ApiRequester.addStudentScore(scoreOption, scoreValue, date, studentId).then(function(res){
			alert("Student score saved successfully"); 

		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/
export var enableAddStudent = (value) => {
	return {
		type: 'ENABLE_ADD_STUDENT',
		payload: value
	};
}

export var setStudentList = (students) => {
	return {
		type: 'SET_STUDENT_LIST',
		payload: students
	};
}

export var setSelectedStudent = (student) => {
	return {
		type: 'SET_STUDENT',
		payload: student
	};
}