"use strict";

import React from "react";
import { Link } from "react-router";
import StudentDetails from "../components/StudentDetails";
import Problem from "../components/PresentingProblem";
import Treatment from "../components/TreatmentConcern";


export default React.createClass({

	render(){
		return (
			<div>
				<div class="container">
			        <p class="line-breaker" />
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-7 col-lg-7 ccol md-7">
			                <p class="event-header">Student Profile</p>
			            </div>
			            <div class="col-xs-12 col-sm-5 col-lg-5 ccol md-5 ">
			                <div class="form-group has-feedback">
							    <input type="text" class="form-control" placeholder="Search for student name here" />
							    <i class="glyphicon glyphicon-search form-control-feedback"></i>
							</div>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <StudentDetails></StudentDetails>
			            <p class="line-breaker" />
			            <div class="col-xs-12 col-sm-6 col-lg-6 ccol md-6">
			                <p><b>Presenting Problem</b></p>
			                <Problem></Problem>
			            </div>
			            <div class="col-xs-12 col-sm-6 col-lg-6 ccol md-6">
				            <p><b>Treatment Concern</b></p>
			                <Treatment></Treatment>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}

});