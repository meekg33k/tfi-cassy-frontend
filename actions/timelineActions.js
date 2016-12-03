"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddtoStudentTimeline = (timelineObject) => {
	return (dispatch, getState) => {

		ApiRequester.addtoStudentTimeline(timelineObject).then(function(res){
			dispatch(asyncFetchStudentTimeline());

		}, function(err){
			console.log(err);
		});

	};
}


export var asyncFetchStudentTimeline = (studentId) => {
	return (dispatch, getState) => {
		ApiRequester.getStudentTimeline(studentId).then(function(res){
			dispatch(setStudentTimeline(res));

		}, function(err){
			console.log(err);
		});

	};
}

export var setStudentTimeline = (timelineObject) => {
	return {
		type: 'SET_STUDENT_TIMELINE',
		payload: timelineObject
	};
}