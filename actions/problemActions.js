"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/
export var asyncAddStudentProblem = (problem, studentId) => {
	return (dispatch, getState) => {
		var theProblem = problem;
		var student_id = studentId;

		ApiRequester.addStudentProblem(theProblem, student_id).then(function(res){
			//Re-render problems in StudentProfile View
			dispatch(asyncFetchStudentProblems(student_id));
		}, function(err){
			console.log(err);
		});

	};
}


export var asyncFetchStudentProblems = (studentId) => {
	var student_id = studentId;
	return (dispatch, getState) => {

		ApiRequester.getStudentProblems(student_id).then(function(res){
			dispatch(setStudentProblems(res));
		}, function(err){
			console.log(err);
		});

	};
}

//This will be done in the main Student component
export var asyncUpdateStudentProblem = (studentId, problemId, problemType, resolved) => {
	var id = studentId;
	var problem_id = problemId;
	var status = resolved;
	var type = problemType;

	return (dispatch, getState) => {

		ApiRequester.updateStudentProblem(id, problem_id, type, status).then(function(res){
			dispatch(asyncFetchStudentProblems(id));

		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/
export var setStudentProblems = (problems) => {
	return {
		type: 'SET_PROBLEM_LIST',
		payload: problems
	};
}