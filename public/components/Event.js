"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux"

import * as actions from "../../actions/actions"


var Event =  React.createClass({

	getInitialState(){
		return {
			isEditing: false, //Internal state to determine if this is being edited
			id: this.props.id,
			name: this.props.name,
			type: this.props.type,
			school: this.props.school,
  		other: this.props.other,
			description: this.props.description,
			date: this.props.date,
  		students: this.props.students
		};
	},


	delete(e){
		e.preventDefault(e);
		this.props.onDelete({
			id: this.state.id
		});
	},


	startEdit(){
		var {dispatch} = this.props;

		if (this.props.onEdit(this.state)){
			//send app-wide signal
			dispatch(actions.enableEditEvent(true));
			//set internal component state
			this.setState({
				isEditing: true
			});
		}
		else{
			this.setState({
				isEditing: false
			});
		}

	},


	render(){

		var renderEvent = () =>{
			if (!this.state.isEditing && !this.props.editEventState){
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.name}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.type}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.description}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.school}
							</div>
							<div class="col-sm-4 col-lg-4 col md-4">
        				{this.state.date}
								&nbsp;

								<button type="button" onClick={this.startEdit} class="btn btn-sm btn-success" disabled={this.props.editEventState}>
	                  <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
	                  &nbsp; Edit
	              </button>
								&nbsp;

								<button type="button" onClick={this.delete} class="btn btn-sm btn-danger" disabled={this.props.editEventState}>
                    <span class="glyphicon glyphicon-trash" aria-hidden="true">  </span>
                    &nbsp; Delete
                </button>
							</div>
						</div>
					</div>
				);
			}
			if (!this.state.isEditing && this.props.editEventState){
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.name}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.type}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.description}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.school}
							</div>
							<div class="col-sm-4 col-lg-4 col md-4">
        				{this.state.date}
								&nbsp;

								<button type="button" onClick={this.startEdit} class="btn btn-sm btn-success" disabled={this.props.editEventState}>
                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                    &nbsp; Edit
                </button>
								&nbsp;

								<button type="button" onClick={this.delete} class="btn btn-sm btn-danger" disabled={this.props.editEventState}>
                    <span class="glyphicon glyphicon-trash" aria-hidden="true">  </span>
                    &nbsp; Delete
                </button>
							</div>
						</div>
					</div>
				);
			}
			if (this.state.isEditing && this.props.editEventState) {
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.name}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.type}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.description}
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								{this.state.school}
							</div>
							<div class="col-sm-4 col-lg-4 col md-4">
                {this.state.date}
								&nbsp;
        				<b>Currently Editing...</b> &nbsp;&nbsp;
							</div>
						</div>
					</div>
				);
			}
		};

		return(
			<div>
				{renderEvent()}
			</div>
		);
	}

});

module.exports = connect(
	(store) => {
		return {
			editEventState: store.editEventState
		};
	}
)(Event);
