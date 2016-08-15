"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import {connect} from "react-redux"

import AddFieldForm from "../components/AddFieldForm"
import AddSchoolForm from "../components/AddSchoolForm"
import FormFieldList from "../components/FormFieldList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"

import * as actions from "../../actions/actions"


var FormPanel = React.createClass({

	getInitialState(){
		return {
			isEditing: false,
      fieldValues: this.props.values,
      selectedField: this.props
		};
	},

	cancelEdit(){
		this.setState({
			isEditing: !this.state.isEditing
		});
	},


	delete(e){
		e.preventDefault(e);
	},


	handleSaveFieldValue(newFieldValue){
		var {selectedField, dispatch} = this.props;
		console.log("Form: New value added", newFieldValue);
		console.log("Form: To field", selectedField);
		dispatch(actions.addNewValueToField(selectedField, newFieldValue));
	},


	render(){

		var selectedFieldValues;
    var {formFields, dispatch} = this.props;
    console.log("Selected field in Form Panel", this.props.selectedField);

		if (this.props.selectedField == "--None--"){
			dispatch(actions.toggleAddFieldButton(true));
		}
		else{
			dispatch(actions.toggleAddFieldButton(false));
		}

    for(var i = 0;  i < formFields.length; i++) {
        if (formFields[i].name === this.props.selectedField) {
            selectedFieldValues = formFields[i].fieldValues;
          	dispatch(actions.setFieldValues(selectedFieldValues));
            break;
        }
    }

		return(
			<div>
        <div class="row row-header">
          <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <p>You have selected: <b><i>{this.props.selectedField}</i></b></p>
          </div>
          <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
              <p></p>
          </div>
          <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
              <p></p>
          </div>
        </div>
        <AddFieldForm onSaveFieldValue={this.handleSaveFieldValue}/>
        <FormFieldList onEditValue={this.handleEditFieldValue}
              onDeleteValue={this.handleDeleteFieldValue}/>
			</div>
		);
	}
});

module.exports = connect(
	(store) => {
		return {
			schools: store.schools,
      selectedField: store.selectedFieldObject,
      formFields: store.formFields,
      formFieldValues: store.formFieldValues,
			addSchool: store.addSchoolState
		};
	}
)(FormPanel);
