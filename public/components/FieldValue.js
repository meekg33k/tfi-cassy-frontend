"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import * as actions from "../../actions/actions"

var FieldValue = React.createClass({

	componentWillMount(){
		this.setState ({
			isEditing: false,
			id: this.props.id,
			name: this.props.name
		});
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

		this.props.onEdit({
			id: this.state.id,
			name: this.refs.firstName.value,
			lastName: this.refs.lastName.value,
			role: this.refs.role.value,
			manager: this.refs.manager.value
		});

		this.setState({
			isEditing: !this.state.isEditing
		});

	},

	startEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	render(){

		var renderStaff = () =>{
			if (!this.state.isEditing){
				return(
					<div>
						<p></p>
						<div class="row">
              <div class="col-sm-2 col-lg-2 col-md-2">
                <p></p>
              </div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								{this.props.name}
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
								<input type="text" ref="name" class="form-control" placeholder="" defaultValue={this.state.name} />
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<input type="text" ref="lastName" class="form-control" placeholder="" defaultValue={this.state.lastName} />
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<select class="form-control" ref="role">
                    <option>Administrator</option>
                    <option>Program Manager</option>
                    <option>Site Coordinator</option>
                    <option>Therapist</option>
                </select>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								<select class="form-ctrl" ref="manager">
                    <option>Eve Johnson</option>
                    <option>John Doe</option>
                    <option>Jill Smith</option>
              	</select>
							</div>
							<div class="col-sm-3 col-lg-3 col md-3">
								<button type="button" onClick={this.saveEdit} class="btn btn-sm btn-success">
                    <span class="glyphicon glyphicon-save" aria-hidden="true"></span>
                    &nbsp; Save
                </button>
                &emsp;
                &emsp;

								<button type="button" onClick={this.cancelEdit} class="btn btn-sm btn-danger">
	                  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
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
				{renderStaff()}
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
