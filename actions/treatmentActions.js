"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/
export var asyncAddStudentTreatment = (treatment, studentId) => {
	return (dispatch, getState) => {
		var theTreatment = treatment;
		var student_id = studentId;

		ApiRequester.addStudentTreatment(theTreatment, student_id).then(function(res){
			//Re-render problems in StudentProfile View
			dispatch(asyncFetchStudentTreatments(student_id));
		}, function(err){
			console.log(err);
		});

	};
}


export var asyncFetchStudentTreatments = (studentId) => {
	var student_id = studentId;
	return (dispatch, getState) => {

		ApiRequester.getStudentTreatments(student_id).then(function(res){
			dispatch(setStudentTreatments(res));
		}, function(err){
			console.log(err);
		});

	};
}

//This will be done in the main Student component..
export var asyncUpdateStudentTreatment = (studentId, treatmentId, treatmentType, resolved) => {
	var id = studentId;
	var treatment_id = treatmentId;
	var status = resolved;
	var type = treatmentType;

	return (dispatch, getState) => {

		ApiRequester.updateStudentTreatment(id, treatment_id, type, status).then(function(res){
			dispatch(asyncFetchStudentTreatments(id));

		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/
export var setStudentTreatments = (treatments) => {
	return {
		type: 'SET_TREATMENT_LIST',
		payload: treatments
	};
}