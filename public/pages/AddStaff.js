"use strict"

import React from "react";
import ReactDOM from "react-dom";
import Search from "../components/Search"


export default React.createClass({
  	render() {
	    return (
	    	<div>
				<div class="container">
			        <p class="line-breaker" />
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-12 col-lg-12 ccol md-12">
			                <p class="section-header">Add Staff</p>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <p class="line-breaker" />
			            <form class="form-horizontal" role="form">
			                <div class="form-group">
			                    <label for="firstName" class="col-sm-2 control-label">First Name</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="firstName" placeholder="" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="lastName" class="col-sm-2 control-label">Last Name</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="lastName" placeholder="" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="email" class="col-sm-2 control-label">Email Address</label>
			                    <div class="col-sm-5">
			                      <input type="email" class="form-control" id="email" placeholder="" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="role" class="col-sm-2 control-label">Role</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="role">
			                            <option>Administrator</option>
			                            <option>Program Manager</option>
			                            <option>Site Coordinator</option>
			                            <option>Therapist</option>
			                        </select>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="manager" class="col-sm-2 control-label">Manager</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="role">
			                            <option>Eve Johnson</option>
			                            <option>John Doe</option>
			                            <option>Jill Smith</option>
			                        </select>
			                    </div>
			                </div>
			                <p class="line-breaker"></p>
			                <div class="form-group">
			                    <div class="col-sm-offset-2 col-sm-10">
			                        <button type="submit" class="btn btn-danger">Add Staff</button>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
		);
  }
});

	