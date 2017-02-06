"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddSchool = (school) => {
	return (dispatch, getState) => {
		var theSchool = school;

		ApiRequester.addSchool(school).then(function(res){

			var schoolFromServer = {
				id: res.insertId,
				school_id: res.insertId,
				react_id: theSchool.react_id,
				school_name: theSchool.school_name,
				address: theSchool.address,
				principal: theSchool.principal,
				primary_contact: theSchool.primary_contact,
				primary_contact_email: theSchool.primary_contact_email,
				school_district: theSchool.school_district,
				siteCoordinator: "Not Set"
			};
			//Render school in Schools View
			dispatch(asyncFetchSchools());

		}, function(err){
			alert("Error adding new school");
			console.log(err);
		});

	};
}

export var asyncDeleteSchool = (school) => {
	return (dispatch, getState) => {

		ApiRequester.deleteSchool(school).then(function(res){
			//Update changes in Schools view
			dispatch(asyncFetchSchools());

		}, function(err){
			alert("Error deleting school");
			console.log(err);
		});

	};
}

export var asyncEditSchool = (school) => {
	return (dispatch, getState) => {

		ApiRequester.editSchool(school).then(function(res){
			alert("Changes saved successfully"); //Change to modal
			dispatch(asyncFetchSchools());

		}, function(err){
			alert("Error saving school changes");
			console.log(err);
		});

	};
}

export var asyncFetchSchoolById = (schoolId) => {
	return (dispatch, getState) => {

		ApiRequester.getOneSchool(schoolId).then(function(res){
			dispatch(setSelectedSchool(res[0]));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchSchools = () => {
	return (dispatch, getState) => {

		ApiRequester.getAllSchools().then(function(res){
			dispatch(setSchoolList(res));
		}, function(err){
			console.log(err);
		});

	};
}


/** User Interface Actions **/

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

export var setSchoolList = (schools) => {
	return {
		type: 'SET_SCHOOL_LIST',
		payload: schools
	};
}

export var setSelectedSchool = (school) => {
	return {
		type: 'SET_SCHOOL',
		payload: school
	};
}
