"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import {connect} from "react-redux"


var Therapist = React.createClass({

	getInitialState(){
		return {
			isEditing: false,
			id: this.props.id,
			name: this.props.name
		};
	},

	cancelEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},

	delete(e){
		e.preventDefault(e);
		this.props.onDelete({
			id: this.state.id
		});
	},

	saveEdit(e){
    	e.preventDefault(e);

		this.setState({
			isEditing: !this.state.isEditing,
			name: this.refs.name.value,
		});

	},

	startEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},

	render(){

		var renderTherapistOptions = () => {
	        return this.props.therapists.map((therapistOption) => {
	          var therapistName = therapistOption.first_name+" "+therapistOption.last_name;
	          return (
	            <option key={therapistOption.user_id} value={therapistOption.user_id}>{therapistName}</option>
	          );
	        });
	    };

		var renderTherapist = () => {
			if (!this.state.isEditing){
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-4 col-lg-4 col md-4">
								{this.state.name}
							</div>
							<div class="col-sm-4 col-lg-4 col md-4">
								<button type="button" onClick={this.startEdit} class="btn btn-sm btn-warning">
				                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
				                    &nbsp; Edit
				                </button>
								&nbsp;
								<button type="button" onClick={this.delete} class="btn btn-sm btn-danger">
				                    <span class="glyphicon glyphicon-trash" aria-hidden="true">  </span>
				                    &nbsp; Delete
				                </button>
							</div>
						</div>
					</div>
				);
			}
			else {
				return(
					<div>
						<p></p>
						<div class="row">
							<div class="col-sm-4 col-lg-4 col md-4">
				                <select class="form-control" ref="name">
				                    {renderTherapistOptions()}
				                </select>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								<button type="button" onClick={this.saveEdit} class="btn btn-sm btn-success">
				                    <span class="glyphicon glyphicon-save" aria-hidden="true">  </span>
				                    &nbsp; Save
				                </button>
				                &emsp;
				                &emsp;

								<button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
				                    <span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
				                    &nbsp; Cancel
				                </button>
							</div>
						</div>
					</div>
				);
			}
		};

		return(
			<div>
				{renderTherapist()}
			</div>
		);
	}
});
module.exports = connect(
  (store) => {
    return {
      therapists: store.therapists
    };
  }
)(Therapist);
