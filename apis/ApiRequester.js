"use strict";

import axios from "axios";

var CASSY_URL;

///const CASSY_WEBSERV_URL = "https://cassy-server.herokuapp.com/";
if (process.env.NODE_ENV === "production"){
	CASSY_URL = "https://cassydataportal.herokuapp.com/";
}
else {
	CASSY_URL = "http://localhost:8888/";
}

module.exports = {

	loginUser: function(user){

		console.log(CASSY_URL);

		return axios.post(CASSY_URL+"login", {
			username: "batman", 
			password: "mobile"
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
	}

}
