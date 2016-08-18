"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import * as actions from "../../actions/actions"

var FieldValue = React.createClass({

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
		var {formFields, selectedField, dispatch} = this.props;

		if (confirm("Do you want to proceed to delete the field value?") == true) {
				dispatch(actions.deleteValueFromField(selectedField, this.props.name));
				//dispatch(actions.setSelectedField(selectedField));
		}
	},


	saveEdit(e){

		e.preventDefault(e);

		console.log("Typed in ", this.refs.name.value);

		this.setState({
			isEditing: !this.state.isEditing,
			name: this.refs.name.value
		});

	},

	startEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	render(){

		var renderFieldValue = () =>{
			if (!this.state.isEditing){
				return(
					<div>
						<p></p>
						<div class="row">
              <div class="col-sm-2 col-lg-2 col-md-2">
                <p></p>
              </div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								{this.state.name}
							</div>
							<div class="col-sm-6 col-lg-6 col-md-6">

								<button type="button" onClick={this.startEdit} class="btn btn-sm btn-warning">
                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                    &nbsp; Edit
                </button>
                &emsp;
                &emsp;

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
							<div class="col-sm-2 col-lg-2 col md-2">
								<p></p>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								<input type="text" ref="name" class="form-control" placeholder="" defaultValue={this.state.name} />
							</div>
							<div class="col-sm-6 col-lg-6 col md-6">
								<button type="button" onClick={this.saveEdit} class="btn btn-sm btn-success">
                    <span class="glyphicon glyphicon-save" aria-hidden="true"></span>
                    &nbsp; Save Changes
                </button>
                &emsp;
                &emsp;

								<button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
	                  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
	                  &nbsp; Discard Changes
	              </button>
							</div>
						</div>
					</div>
				);
			}
		};

		return(
			<div>
				{renderFieldValue()}
			</div>
		);
	}

});
module.exports = connect(
	(store) => {
		return {
      formFields: store.formFields,
      selectedField: store.selectedField,
      formFieldValues: store.formFieldValues
		};
	}
)(FieldValue);
