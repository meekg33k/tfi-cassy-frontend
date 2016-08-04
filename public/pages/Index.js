"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import LoginForm from "../components/LoginForm"
import ApiRequester from "../../apis/ApiRequester.js"



export default class Index extends React.Component {

	handleUserLogin(user){

		ApiRequester.loginUser(user).then(function(res){
			console.log(res);
			console.log("success");
			if (user.username == "admin@cassy.com"){
			window.location.replace(
			  window.location.pathname + window.location.search + '#/admin'
			);
			}
			else{
				window.location.replace(
				  window.location.pathname + window.location.search + '#/home'
				);
			}
		}, function(err){
			console.log(err);
		});

	}

	render(){
		return(
			    <div class="jumbotron">
			        <div class="container">
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-12 col-lg-12 col md-12">
			                </div>
			            </div>
			            <div class="row row-header">
			                <div class="col-xs-12 col-sm-7 col-lg-8 col md-7">
			                    <p ></p>
			                    <img src="../assets/images/charts.png" class="img-responsive" height="500px" width="500px"></img>
			                    <p ></p>
			                    <p class="line-breaker" ></p>
			                    <p>....spooling reports just got easier</p>
			                </div>
			                <div class="col-xs-12 col-sm-5 col-lg-4 col-md-5">
			                    <p class="line-breaker" />
			                    <p class="line-breaker" />
			                    <LoginForm onUserLogin={this.handleUserLogin}/>
			                </div>
		                </div>
			        </div>
			    </div>
		);
	}
}
