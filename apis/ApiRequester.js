"use strict";

import axios from "axios";

///const CASSY_WEBSERV_URL = "https://cassy-server.herokuapp.com/";
const CASSY_URL = process.env.CASSY_URL || "http://localhost:8888/";

module.exports = {

	loginUser: function(user){

		console.log(CASSY_URL);

		return axios.post(CASSY_URL+"login").then(function(res) {

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
