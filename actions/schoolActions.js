"use strict";

import ApiRequester from "../apis/ApiRequester.js";


export var startFetchSchools = (userId) => {
	return (dispatch, getState) => {

		ApiRequester.getAllSchools(userId).then(function(res){
			console.log("SCHOOLS OOOO!!!!!" ,res);

		}, function(err){
			console.log(err);
		});

	};
}

export var startAddSchool = (school) => {
	return (dispatch, getState) => {

		console.log("This is the school to be added", school);

		ApiRequester.addSchool(school).then(function(res){
			console.log("ADDED SCHOOL" ,res);
			dispatch(addSchool(school));

		}, function(err){
			//dispatch(actions.setLoginError("Invalid"));
			console.log(err);
		});

	};
}

export var addSchool = (newSchool) => {
	return {
		type: 'ADD_SCHOOL',
		payload: newSchool
	};
}

export var deleteSchool = (victimSchool) => {
	return {
		type: 'DELETE_SCHOOL',
		payload: victimSchool
	};
}

export var editSchool = (school) => {
	return {
		type: 'EDIT_SCHOOL',
		payload: school
	};
}

export var enableAddSchool = (value) => {
	return {
		type: 'ENABLE_ADD_SCHOOL',
		payload: value
	};
}
