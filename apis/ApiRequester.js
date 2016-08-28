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

	/** School-Related API Calls **/
	addSchool: function(school){

		return axios.post(CASSY_URL+"schools", {
			"name": school.school_name,
			"address": school.address,
			"principal": school.principal,
			"primaryContact": school.primary_contact,
			"contactEmail": school.primary_contact_email,
			"district": school.school_district
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

	deleteSchool: function(school){

		return axios.delete(CASSY_URL+"schools/"+school.school_id).then(function(res) {
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

	editSchool: function(school){

		return axios.put(CASSY_URL+"schools/"+school.school_id,  {
			"name": school.school_name,
			"address": school.address,
			"principal": school.principal,
			"primaryContact": school.primary_contact,
			"contactEmail": school.primary_contact_email,
			"district": school.district
			//Currently missing site co-ordinator
		}).then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},

	getAllSchools: function(){

		return axios.get(CASSY_URL+"schools").then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},

	getOneSchool: function(schoolId){

		return axios.get(CASSY_URL+"schools/"+schoolId).then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},




	/** Staff-Related API Calls **/
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

	getAllStaff: function(){
		
		return axios.get(CASSY_URL+"users").then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},


	loginUser: function(user){

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

	logoutUser: function(){

		return axios.get(CASSY_URL+"logout").then(function(res) {

			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
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
	},

}
