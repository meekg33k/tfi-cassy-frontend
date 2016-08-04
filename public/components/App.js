"use strict"

import React from "react";
import ReactDOM from "react-dom";

//class Layout extends React.Component {
export default React.createClass({
	render(){
		return(
			<div>
			<div class="jumbotron">
		        <div class="container">
		            <div class="row row-header">
		                <div class="col-xs-12 col-sm-12 col-lg-12 col md-12">
		                    <p align="center" style="font-size:40px;" >Data Management Portal</p>
		                </div>
		            </div>
		            <div class="row row-header">
		                <div class="col-xs-12 col-sm-7 col-lg-8 col md-7">
		                    <p style="padding-top: 40px;"></p>
		                    <img src="../assets/images/charts.png" class="img-responsive" height="500px" width="500px"></img>
		                    <p style="padding: 20px;"></p>
		                    <p style="color: #FF9900;">....spooling reports just got easier</p>
		                </div>
		                <div class="col-xs-12 col-sm-5 col-lg-4 col-md-5">
		                    <p style="padding:60px;"></p>
		                    <form id="loginForm" class="form-horizontal" role="form">
		                        <div class="form-group has-feedback">
		                            <label for="username" class="control-label">Username</label>
		                            <input type="text" name="username" id="username" class="form-control" placeholder="Enter username"></input>
		                            <i class="glyphicon glyphicon-user form-control-feedback"></i>
		                        </div>
		                        <div class="form-group has-feedback" >
		                            <label for="password" class="control-label">Password</label>
		                            <input type="text" name="password" id="password" class="form-control" placeholder="Enter password"></input>
		                            <i class="glyphicon glyphicon-pencil form-control-feedback"></i>
		                        </div>
		                         <div  class="form-group has-feedback" >
		                            <label for="password" class="control-label">Confirm Password</label>
		                            <input type="text" name="password" id="password" class="form-control" placeholder="Enter password again"></input>
		                            <i class="glyphicon glyphicon-pencil form-control-feedback"></i>
		                        </div> -->
		                        <div class="form-group">
		                            <div>
		                              <div class="checkbox">
		                                <label>
		                                  <input type="checkbox"> Remember me</input>
		                                </label>
		                              </div>
		                            </div>
		                        </div>
		                        <div id="app">
		                        </div>
		                        <div id="searchStudent">
		                        </div>
		                        <p style="padding:10px;"></p>
		                        <div class="form-group">
		                            <a class="btn btn-lg btn-warning" href="./home.html" type="submit">Login</a>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
		    </div>
		    </div>		);
	}
});