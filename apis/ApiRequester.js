"use strict";

import axios from "axios";

//var CASSY_URL;

var CASSY_URL = "/";//"https://cassy-server.herokuapp.com/";

// if (process.env.NODE_ENV === "production"){
// 	CASSY_URL = "https://cassy-server.herokuapp.com/";
// }
// else {
// 	CASSY_URL = "http://localhost:8888/";
// }

module.exports = {

	/** Event-Related API Calls **/
	createEvent: function(event){

		return axios.post(CASSY_URL+"event-attendances", {
			"name": event.school_name,
			"address": event.address,
			"principal": event.principal,
			"primaryContact": event.primary_contact,
			"contactEmail": event.primary_contact_email,
			"district": event.school_district
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

	deleteEvent: function(event){

		return axios.delete(CASSY_URL+"event-attendances/"+event.school_id).then(function(res) {
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

	editEvent: function(event){

		return axios.put(CASSY_URL+"event-attendances/"+event.school_id,  {
			"name": event.school_name,
			"address": event.address,
			"principal": event.principal,
			"primaryContact": event.primary_contact,
			"contactEmail": event.primary_contact_email,
			"district": event.district
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

	getUserEvents: function(userId){

		return axios.get(CASSY_URL+"users/"+userId+"/events").then(function(res) {
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

/*	getAllEvents: function(){

		return axios.get(CASSY_URL+"event-attendances").then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},*/





	/** Form-Related API Calls **/
	addFieldValue: function(fieldId, fieldValue){

		return axios.post(CASSY_URL+"form-fields", {
			"field_name_id": fieldId,
			"value": fieldValue
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

	deleteFieldValue: function(fieldValueId){

		return axios.delete(CASSY_URL+"form-fields/"+fieldValueId).then(function(res) {
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


	editFieldValue: function(fieldValueId, fieldId, fieldValue){

		return axios.put(CASSY_URL+"form-fields/"+fieldValueId, {
			"field_name_id": fieldId,
			"value": fieldValue
		}).then(function(res) {
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}
			else {
				return true;
				//return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},

	getFormFieldNames: function(){

		return axios.get(CASSY_URL+"form-fields/names").then(function(res) {
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

	getFormFieldValues: function(fieldId){

		return axios.get(CASSY_URL+"form-fields/"+fieldId).then(function(res) {
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

	getFormFieldValuesByName: function(fieldName){

		return axios.get(CASSY_URL+"form-fields/names/"+fieldName).then(function(res) {
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




	/** Problem-Related API Calls **/
	addStudentProblem: function(problem, studentId){

		return axios.post(CASSY_URL+"students/problems", {
			"id": studentId,
			"problemtype": problem
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

	getStudentProblems: function(studentId){

		return axios.get(CASSY_URL+"students/"+studentId+"/problems").then(function(res) {
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

	updateStudentProblem: function(studentId, problemId, problemType, resolved){

		return axios.put(CASSY_URL+"students/problems/"+problemId, {
			"resolved": resolved,
			"problemtype": problemType
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




	/** Student-Related API Calls **/
	addStudent: function(student){
		return axios.post(CASSY_URL+"students", {
			"firstname": student.firstName,
			"lastname": student.lastName,
			"ethnicity": student.ethnicity,
			"gender": student.gender,
			"grade": student.grade,
			"lunch": student.lunchOption,
			"school": student.school,
			"presentingissue": student.presentingIssue,
			"referral": student.referral
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

	deleteStudent: function(student){

		return axios.delete(CASSY_URL+"students/"+student.student_id).then(function(res) {
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

	editStudent: function(student){

		return axios.put(CASSY_URL+"students/"+student.id,  {
			"firstname": student.firstName,
			"lastname": student.lastName,
			"ethnicity": student.ethnicity,
			"gender": student.gender,
			"grade": student.grade,
			"lunch": student.lunchOption,
			"school": student.school,
			"presentingissue": student.presentingIssue,
			"referral": student.referral
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

	getAllStudents: function(){

		return axios.get(CASSY_URL+"students").then(function(res) {
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

	getStudentsByUser: function(userId){

		return axios.get(CASSY_URL+"users/students").then(function(res) {
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

	getOneStudent: function(studentId){

		return axios.get(CASSY_URL+"students/"+studentId).then(function(res) {
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
				return res.data;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	},

	deleteStaff: function(staff){

		return axios.delete(CASSY_URL+"users/"+staff.user_id).then(function(res) {
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

	editStaff: function(staff){

		console.log("Edited Staff", staff);

		return axios.put(CASSY_URL+"users/"+staff.id,  {
			"firstname": staff.firstName,
			"lastname": staff.lastName,
			"role": staff.role,
			"username": staff.email
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



	/** Problem-Related API Calls **/
	addStudentTreatment: function(treatment, studentId){

		return axios.post(CASSY_URL+"students/concerns", {
			"id": studentId,
			"concerntype": treatment
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

	getStudentTreatments: function(studentId){

		return axios.get(CASSY_URL+"students/"+studentId+"/concerns").then(function(res) {
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

	updateStudentTreatment: function(studentId, treatmentId, resolved){

		return axios.put(CASSY_URL+"students/concerns/"+problemId, {
			"resolved": resolved,
			"concerntype": problem
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




	/** General User-Related API Calls **/
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

}
