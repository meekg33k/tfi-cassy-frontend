"use strict";

import React from "react";
import { Link } from "react-router";
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux";
import moment from "moment";

import Problem from "../components/PresentingProblem";
import ProblemList from "../components/PresentingProblemList";
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
			dispatch(actions.asyncFetchStudentProblems(this.props.params.id));
			dispatch(actions.asyncFetchPresentingIssueFormValues("Presenting Issue"));
			dispatch(actions.asyncFetchTreatmentConcernFormValues("Focus of Treatment"));
		}
		dispatch(actions.asyncFetchSchools());
    },


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


	handleAddProblem(){

		var {dispatch} = this.props;
		dispatch(actions.asyncAddStudentProblem(this.refs.problem.value, this.state._id));

		dispatch(actions.addToTimeLine({
			id: Date.now(),
			date: moment().format("MM/DD/YY"),
			activity: "New Issue",
			description:this.refs.problem.value,
			comments: ""
		}));
	},


	render(){
		var renderProblems = () => {
			console.log("The length", this.props.studentProblems.length);
			if (this.props.studentProblems.length == 0){
				return (
					<p>No issues found. Use form to add issue </p>
				);
			}
			else{
				return this.props.studentProblems.map((problem) => {
					console.log("The problem", problem);
					return (
						<Problem key={problem.problem_id} onUpdateProblem={this.handleUpdateProblem} {...problem}/>
					);
				});
			}
		};

		var renderTreatments = () => {
			if (this.props.treatmentConcernValues.length == 0){
				return (
					<p>No issues found. Use form to add issue </p>
				);
			}
			else{
				return this.props.treatmentConcernValues.map((tconcern) => {
					return (
						<TreatmentList key={tconcern.concern_id} onUpdateProblem={this.handleUpdateProblem} />
					);
				});
			}
		};

		var renderProblemValues = () => {
	        return this.props.problemFieldValues.map((problem) => {
	          var problemName = problem.field_value;
	          return (
	            <option key={problem.field_id}>{problemName}</option>
	          );
	        });
	    };


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
			                {renderProblems()}
			                <p class="line-breaker" />
			                <div class="row">
								<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
									<select class="form-control" ref="problem">
										{renderProblemValues()}
									</select>
								</div>
								<div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
									<div class="form-group">
										<button type="submit" class="btn btn-sm btn-danger" onClick={this.handleAddProblem}>
											<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
											&nbsp; Add New Value
										</button>
									</div>
								</div>
							</div>
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
			selectedStudent: store.selectedStudent,
			studentProblems: store.studentProblems,
			studentTreatments: store.studentTreatments,
			problemFieldValues: store.problemFieldValues,
			treatmentConcernValues: store.treatmentConcernValues
		};
	}
)(StudentProfile);
