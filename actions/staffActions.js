"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddStaff = (staff) => {
	return (dispatch, getState) => {

		ApiRequester.addStaff(staff).then(function(res){
			alert("New staff added successfully");  //<============ Change all alerts to modals
			dispatch(asyncFetchStaff());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncDeleteStaff = (staff) => {
	return (dispatch, getState) => {

		ApiRequester.deleteStaff(staff).then(function(res){
			alert("Staff deleted successfully"); //<============ Change all alerts to modals
			//Update changes in Staff view
			dispatch(asyncFetchStaff());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncEditStaff = (staff) => {
	return (dispatch, getState) => {

		ApiRequester.editStaff(staff).then(function(res){
			alert("Changes saved successfully"); //<============ Change all alerts to modals
			dispatch(asyncFetchStaff());

		}, function(err){
			console.log(err);
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

export var setStaffList = (staff) => {
	return {
		type: 'SET_STAFF_LIST',
		payload: staff
	};
}
