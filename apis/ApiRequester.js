"use strict";

import axios from "axios";

//var CASSY_URL;

var CASSY_URL = "http://localhost:8888/";//"https://cassy-server.herokuapp.com/";

// if (process.env.NODE_ENV === "production"){
// 	CASSY_URL = "https://cassy-server.herokuapp.com/";
// }
// else {
// 	CASSY_URL = "http://localhost:8888/";
// }

module.exports = {

	addSchool: function(school){
		return axios.post(CASSY_URL+"schools", {
			"name": school.name,
			"address": school.address,
			"principal": school.principal,
			"primaryContact": school.contact,
			"contactEmail": school.contactEmail,
			"district": school.district
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
	},

	addStaff: function(staff){
		return axios.post(CASSY_URL+"users", {
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
	},


	loginUser: function(user){

		console.log(CASSY_URL);
		console.log("API Request: Username", user.username);
		console.log("API Request: Password", user.password);

		return axios.post(CASSY_URL+"login", {
			username: user.username,
			password: user.password
		}).then(function(res) {
			console.log("Response from server>>>>", res.data);

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
	},

	createNewUser: function(user){
		console.log(CASSY_URL);

		return axios.post(CASSY_URL+"login", user).then(function(res) {
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
	}

}
