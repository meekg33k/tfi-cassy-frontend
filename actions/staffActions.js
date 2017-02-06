"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddStaff = (staff) => {
	return (dispatch, getState) => {

		ApiRequester.addStaff(staff).then(function(res){
			alert("New staff added successfully");
			dispatch(asyncFetchStaff());

		}, function(err){
			alert("Error adding new staff");
		});

	};
}

export var asyncDeleteStaff = (staff) => {
	return (dispatch, getState) => {

		ApiRequester.deleteStaff(staff).then(function(res){
			alert("Staff deleted successfully");
			//Update changes in Staff view
			dispatch(asyncFetchStaff());

		}, function(err){
			alert("Error deleting staff");
		});

	};
}

export var asyncEditStaff = (staff) => {
	return (dispatch, getState) => {

		ApiRequester.editStaff(staff).then(function(res){
			alert("Changes saved successfully"); 
			dispatch(asyncFetchStaff());

		}, function(err){
			alert("Error saving staff changes");
		});

	};
}

export var asyncFetchStaff = () => {
	return (dispatch, getState) => {

		ApiRequester.getAllStaff().then(function(res){
			dispatch(setStaffList(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchSiteCoordinators = () => {
	return (dispatch, getState) => {

		ApiRequester.getSiteCoordinators().then(function(res){
			dispatch(setSiteCoordinators(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchTherapists = () => {
	return (dispatch, getState) => {

		ApiRequester.getTherapists().then(function(res){
			dispatch(setTherapists(res));
		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/
export var addStaff = (newStaff) => {
	return {
		type: 'ADD_STAFF',
		payload: newStaff
	};
}

export var deleteStaff = (victimStaff) => {
	return {
		type: 'DELETE_STAFF',
		payload: victimStaff
	};
}

export var editStaff = (staff) => {
	return {
		type: 'EDIT_STAFF',
		payload: staff
	};
}

export var enableAddStaff = (value) => {
	return {
		type: 'ENABLE_ADD_STAFF',
		payload: value
	};
}

export var setSiteCoordinators = (coordinators) => {
	return {
		type: 'SET_COORDINATOR_LIST',
		payload: coordinators
	};
}

export var setStaffList = (staff) => {
	return {
		type: 'SET_STAFF_LIST',
		payload: staff
	};
}

export var setTherapists = (therapists) => {
	return {
		type: 'SET_THERAPIST_LIST',
		payload: therapists
	};
}
