"use strict";

import React from "react";
import { Link } from "react-router";
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux";
import moment from "moment";

import Problem from "../components/PresentingProblem";
import StudentDetails from "../components/StudentDetails";
import Treatment from "../components/TreatmentConcern";
import TimeLineList from "../components/TimeLineList";

import * as actions from "../../actions/actions"


var StudentProfile = React.createClass({

	getInitialState(){
		return {
			addProblemError: false,
			addTreatmentError: false
		};
	},


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
			//Save the id of the student to state
			_id: this.props.params.id
		});

		if (!this.props.selectedStudent.first_name){
			dispatch(actions.asyncFetchStudentById(this.props.params.id));
			dispatch(actions.asyncFetchStudentProblems(this.props.params.id));
			dispatch(actions.asyncFetchStudentTreatments(this.props.params.id));
			dispatch(actions.asyncFetchPresentingIssueFormValues("Presenting Issue"));
			dispatch(actions.asyncFetchTreatmentConcernFormValues("Focus of Treatment"));
			dispatch(actions.asyncFetchStudentTimeline(this.props.params.id));
		}
		dispatch(actions.asyncFetchSchools());
    },


    componentWillReceiveProps(nextProps) {
  		this.setState({
			firstName: this.props.selectedStudent.first_name,
			lastName: this.props.selectedStudent.last_name,
			ethnicity: this.props.selectedStudent.ethnicity,
			gender: this.props.selectedStudent.gender,
			grade: this.props.selectedStudent.grade,
			school: this.props.selectedStudent.school
		});
	},


	containsProblem(a, obj) {
	    var i = a.length;
	    while (i--) {
	       	if (a[i].problem_type === obj) {
	       		console.log(" "+a[i]+" equals "+obj);
	           	return true;
	       }
	    }
	    return false;
	},


	containsTreatment(a, obj) {
	    var i = a.length;
	    while (i--) {
	       	if (a[i].concern_type === obj) {
	       		console.log(" "+a[i]+" equals "+obj);
	           	return true;
	       }
	    }
	    return false;
	},


	handleAddNote(e){
		e.preventDefault();

		var {dispatch} = this.props;
		var dispatchMessage = "New note added";

		//This can be better managed //
		dispatch(actions.asyncAddStudentNote(this.refs.notes.value, this.state._id));
		dispatch(actions.asyncAddtoStudentTimeline({
			id: Date.now(),
			date: moment().format("MM/DD/YY"),
			activity: "Progress Update",
			description: "New Note",
			comments: dispatchMessage
		}));

		this.refs.notes.value = "";
	},


	handleAddProblem(){

		var {dispatch} = this.props;

		if (this.containsProblem(this.props.studentProblems, this.refs.problem.value)){
			this.setState({
				addProblemError: true
			});
		}
		else{
			this.setState({
				addProblemError: false
			});
			dispatch(actions.asyncAddStudentProblem(this.refs.problem.value, this.state._id));
			//Update Student TimeLine
			dispatch(actions.asyncAddtoStudentTimeline({
				id: this.state._id,
				date: moment().format("MM/DD/YY"),	
				activity: "New Problem",
				description: this.refs.problem.value,
				comments: this.refs.problem.value+" added"
			}));
		}
	},


	handleAddScore(e){
		e.preventDefault();
		var {dispatch} = this.props;

		dispatch(actions.asyncAddStudentScore(this.refs.scoreOption.value, 
			this.refs.score.value, this.refs.date.value, this.state._id));
		//Update Student TimeLine
		dispatch(actions.asyncAddtoStudentTimeline({
			id: Date.now(),
			date: moment().format("MM/DD/YY"),
			activity: "Progress Update",
			description: "New Score",
			comments: this.refs.scoreOption.value+" score of "+this.refs.score.value+" added"
		}));

		this.refs.score.value = "";
	},


	handleAddTreatment(){

		var {dispatch} = this.props;

		if (this.containsTreatment(this.props.studentTreatments, this.refs.treatment.value)){
			this.setState({
				addTreatmentError: true
			});
		}
		else{
			this.setState({
				addTreatmentError: false
			});
			dispatch(actions.asyncAddStudentTreatment(this.refs.treatment.value, this.state._id));
			//Update Student TimeLine
			dispatch(actions.asyncAddtoStudentTimeline({
				id: this.state._id,
				date: moment().format("MM/DD/YY"),	
				activity: "New Treatment Concern",
				description:this.refs.treatment.value+" added",
				comments: ""
			}));
		} 

	},


	render(){
		var renderProblems = () => {
			if (this.props.studentProblems.length == 0){
				return (
					<p>No issues found. Use form to add issue </p>
				);
			}
			else{
				return this.props.studentProblems.map((problem) => {
					return (
						<Problem key={problem.problem_id} onUpdateProblem={this.handleUpdateProblem} {...problem}/>
					);
				});
			}
		};

		var renderTreatments = () => {
			if (this.props.studentTreatments.length == 0){
				return (
					<p>No issues found. Use form to add a treatment concern </p>
				);
			}
			else{
				return this.props.studentTreatments.map((tconcern) => {
					return (
						<Treatment key={tconcern.concern_id} onUpdateTreatment={this.handleUpdateTreatment} {...tconcern}/>
					);
				});
			}
		};

		var renderAddProblemError = () => {
			if (this.state.addProblemError){
				return (
					<p class="error">Problem already exists.</p>
				);
			}
			else{
				return (
					<p></p>
				);
			}
		};

		var renderAddTreatmentError= () => {
			if (this.state.addTreatmentError){
				return (
					<p class="error">Treatment Concern already exists.</p>
				);
			}
			else{
				return (
					<p></p>
				);
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

	    var renderTreatmentValues = () => {
	        return this.props.treatmentFieldValues.map((treatment) => {
	          var treatmentName = treatment.field_value;
	          return (
	            <option key={treatment.field_id}>{treatmentName}</option>
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
			                {renderAddProblemError()}
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
											&nbsp; Add New Problem
										</button>
									</div>
								</div>
							</div>
			            </div>
						<div class="col-sm-1 col-lg-1 col md-1">
			            </div>
			            <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6 well inline-div">
				            <p><b>Treatment Concern</b></p>
		                	{renderTreatments()}
			                <p class="line-breaker" />
			                {renderAddTreatmentError()}
			                <div class="row">
								<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
									<select class="form-control" ref="treatment">
										{renderTreatmentValues()}
									</select>
								</div>
								<div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
									<div class="form-group">
										<button type="submit" class="btn btn-sm btn-danger" onClick={this.handleAddTreatment}>
											<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
											&nbsp; Add Treatment Concern
										</button>
									</div>
								</div>
							</div>
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
						<div class="well">
							<p><b>Record Assessment Score</b></p>
							<form onSubmit={this.handleAddScore}>
								<div class="row">
							  		<div class="col-sm-4 col-lg-4 col-xs-12">
							            <select class="form-control" ref="scoreOption">
											<option>CGAS</option>
											<option>DA/WM</option>
										</select>
						            </div>
	  								<div class="col-sm-3 col-lg-3 col-xs-12">
							            <input class="form-control" type="date" ref="date" required></input>
						            </div>
	  								<div class="col-sm-3 col-lg-3 col-xs-12">
							            <input class="form-control" type="number" ref="score" placeholder="Enter score" required></input>
						            </div>
						            <div class="col-sm-2 col-lg-2 col-xs-12">
							            <button type="submit" class="btn btn-sm btn-success">
											<span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
											&nbsp; Click to Add Score
										</button>
						            </div>
								</div>
							</form>
						</div>
					</div>
					<p class="line-breaker" />
					<div>
						<p class="student-header">Record Other Notes</p>
						<div class="well">
							<form onSubmit={this.handleAddNote}>
								<div class = "row">
									<div class="col-sm-8 col-lg-9 col-xs-12">
					                    <textarea class="form-control" ref="notes" rows="10" required placeholder="Enter any extra information or notes here">
					                        </textarea>
			                        </div>
			                        <div class="col-sm-4 col-lg-3 col-xs-6">
					                    <button type="submit" class="btn btn-sm btn-success">
											<span class="glyphicon glyphicon-save" aria-hidden="true"></span>
											&nbsp; Click to Save Note
										</button>
			                        </div>
		                        </div>
	                        </form>
		                </div>
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
			timelines: store.timelineState,
			treatmentFieldValues: store.treatmentConcernValues
		};
	}
)(StudentProfile);
