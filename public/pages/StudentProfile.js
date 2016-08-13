"use strict";

import React from "react";
import { Link } from "react-router";
import BreadCrumb from "react-breadcrumbs"

import StudentDetails from "../components/StudentDetails";
import Problem from "../components/PresentingProblem";
import Treatment from "../components/TreatmentConcern";


export default React.createClass({

	render(){

		// componentDidMount() {
	  //   this.setState({
	  //     // route components are rendered with useful information, like URL params
	  //     user: findUserById(this.props.params.userId)
	  //   })
	  // },
		return (
			<div>
				<div class="container">
			        <p class="line-breaker" />
						  <BreadCrumb routes={this.props.routes} separator =" >> "/>
							<p class="line-breaker" />
			        <div class="row row-header report-form">
									<br />
									<div>
	                    <p class="student-header">Student Profile</p>
	                </div>
									<div class="well">
			            	<StudentDetails></StudentDetails>
									</div>
			            <p class="line-breaker" />
									<div>
	                    <p class="student-header">Health Details</p>
	                </div>
			            <div class="col-xs-12 col-sm-5 col-lg-5 col-md-5 well">
			                <p><b>Presenting Problem</b></p>
			                <Problem></Problem>
			            </div>
									<div class="col-sm-1 col-lg-1 col md-1">
			            </div>
			            <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6 well">
				            <p><b>Treatment Concern</b></p>
			                <Treatment></Treatment>
			            </div>
									<div>
	                    <p class="student-header">Student Timeline</p>
	                </div>
									<div>
											<p class="student-header">Update Progress</p>
									</div>
			        </div>
			    </div>
			</div>
		);
	}

});
