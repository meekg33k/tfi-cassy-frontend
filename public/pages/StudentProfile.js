"use strict";

import React from "react";
import { Link } from "react-router";
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux";

import Problem from "../components/PresentingProblem";
import StudentDetails from "../components/StudentDetails";
import TreatmentList from "../components/TreatmentConcernList";
import TimeLineList from "../components/TimeLineList";

import * as actions from "../../actions/actions"


var StudentProfile = React.createClass({

	componentWillMount(){
  		var user = JSON.parse(localStorage.getItem('user'));
		var {dispatch} = this.props;

		if (!user){
			window.location.replace(
			  window.location.pathname + window.location.search + '#/'
			);
			//dispatch(actions.setUserError());
		}
		this.setState({
			_id: this.props.params.id
		});

		if (!this.props.selectedStudent.first_name){
			dispatch(actions.asyncFetchStudentById(this.props.params.id));
		}
		dispatch(actions.asyncFetchSchools());
    },

    /*<StudentDetails firstName={this.state.firstName} lastName={this.state.lastName} ethnicity={this.state.ethnicity}
			            	gender={this.state.gender} grade={this.state.grade} firstName={this.state.school}></StudentDetails>
*/

    componentWillReceiveProps(nextProps) {
  		console.log("Next props", nextProps);
  		this.setState({
			firstName: this.props.selectedStudent.first_name,
			lastName: this.props.selectedStudent.last_name,
			ethnicity: this.props.selectedStudent.ethnicity,
			gender: this.props.selectedStudent.gender,
			grade: this.props.selectedStudent.grade,
			school: this.props.selectedStudent.school
		});
	},

	render(){
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
			            <StudentDetails id={this.state._id}></StudentDetails>
					</div>
			        <p class="line-breaker" />
					<div>
	                    <p class="student-header">Health Details</p>
	                </div>
					<div class="row row-header">
				        <div class="col-xs-12 col-sm-5 col-lg-5 col-md-5 well inline-div">
			                <p><b>Presenting Problem</b></p>
			                <Problem></Problem>
			            </div>
						<div class="col-sm-1 col-lg-1 col md-1">
			            </div>
			            <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6 well inline-div">
				            <p><b>Treatment Concern</b></p>
		                	<TreatmentList></TreatmentList>
			            </div>
					</div>
					<p class="line-breaker" />
					<div>
	                    <p class="student-header">Student Timeline</p>
	                </div>
					<div class="well  inline-div">
		            	<TimeLineList></TimeLineList>
					</div>
					<p class="line-breaker" />
					<div>
							<p class="student-header">Update Progress</p>
					</div>
			        </div>
			    </div>
			</div>
		);
	}
});
module.exports = connect(
	(store) => {
		return {
			selectedStudent: store.selectedStudent
		};
	}
)(StudentProfile);
