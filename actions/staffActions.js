"use strict";

import ApiRequester from "../apis/ApiRequester.js";
import axios from "axios";


export var startAddStaff = (staff) => {
	return (dispatch, getState) => {

		console.log("This is the staff to be added", staff);

		axios.post("https://cassy-server.herokuapp.com/users", {
			"firstname": staff.firstName,
			"lastname": staff.lastName,
			"username": staff.email,
			"role": staff.role,
			"managerid": null
		}).then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				console.log(res.data);
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});


		/*ApiRequester.addStaff(staff).then(function(res){
			console.log("Staff addition successful!!!" ,res);
			//dispatch(addSchool(school));

		}, function(err){
			//dispatch(actions.setLoginError("Invalid"));
			console.log(err);
		});*/

	};
}


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
