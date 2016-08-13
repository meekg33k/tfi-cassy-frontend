"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import {connect} from "react-redux"

import AddFormField from "../components/AddFormField"
import AddSchoolForm from "../components/AddSchoolForm"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"
import SchoolList from "../components/SchoolList"

import * as actions from "../../actions/actions"


var FormField = React.createClass({

	getInitialState(){
		return {
			isEditing: false,
      schools: this.props,
      searchString:"",
      name: this.props
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
    var searchString = this.state.searchString;
    var {schools} = this.props;
    var filteredSchools = SearchProcessor.filterEvents(schools, searchString);
		return(
			<div>
        <div class="row row-header">
          <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <p>Currently editing <b><i>{this.props.name}</i>...</b></p>
          </div>
          <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
              <p></p>
          </div>
          <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
              <p></p>
          </div>
        </div>
        <AddFormField />
        <SchoolList schools={filteredSchools} onEditSchool={this.handleEditSchool} onDeleteSchool={this.handleDeleteSchool}/>
			</div>
		);
	}
});

module.exports = connect(
	(store) => {
		return {
			schools: store.schools,
      name: store.formFieldState,
			addSchool: store.addSchoolState
		};
	}
)(FormField);
