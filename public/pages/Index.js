"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import {connect} from "react-redux";

import LoginForm from "../components/LoginForm"
import ApiRequester from "../../apis/ApiRequester.js"

import * as actions from "../../actions/actions"



export default class Index extends React.Component {

	handleUserLogin(user){
		var {dispatch} = this.props;
		console.log("User object", user);

		ApiRequester.loginUser(user).then(function(res){
			console.log("Received from server" ,res);
			dispatch(actions.setLoginError("Valid"));

			localStorage.setItem('user', JSON.stringify(res[0]);

			if (res[0].role === "administrator"){
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
				dispatch(actions.setLoginError("Invalid"));
				console.log(err);
		});

	}

	render(){
		var showLoginError = () =>{
			if (this.props.loginError === "Invalid"){
				return(
					<p class="error">Invalid login credentials</p>
				);
			}
			if (this.props.loginError === "Valid"){
				return(
					<p></p>
				);
			}
		};
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
			                    <p>....gateway to CASSY Data Management Platform</p>
			                </div>
			                <div class="col-xs-12 col-sm-5 col-lg-4 col-md-5">
			                    <p class="line-breaker" />
			                    {showLoginError()}
			                    <LoginForm onUserLogin={this.handleUserLogin}/>
			                </div>
		                </div>
			        </div>
			    </div>
		);
	}
}
module.exports = connect(
	(store) => {
		return {
			adminError: store.adminError,
			loginError: store.loginError,
			events: store.events,
			addEvent: store.addEventState,
			isEditing: store.editEventState
		};
	}
)(Index);
