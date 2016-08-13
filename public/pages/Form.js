"use strict"

import React from "react"
import ReactDOM from "react-dom"
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux"

import AddSchoolForm from "../components/AddSchoolForm"
import FormField from "../components/FormField"
import SchoolList from "../components/SchoolList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"

import * as actions from "../../actions/actions"


var Form =  React.createClass({

		getInitialState(){
			return {
	  		isEditing: this.props,
        showField: false,
        currentlyEditing: this.props,
				searchString: "",
				schools: this.props
			};
		},


		handleAddSchool(school){
			//To include REST API calls
			var { dispatch } = this.props;
			dispatch(actions.addSchool(school));
			this.handleExitAddSchool();
		},


		handleDeleteSchool(school){

		    if (confirm("Do you want to proceed to delete the school?") == true) {
		    	//TODO: Include REST API calls to delete school
		    	var { dispatch } = this.props;
				dispatch(actions.deleteSchool(school));
		    }

		},


		handleEditSchool(editedSchool){
			var { dispatch } = this.props;
			dispatch(actions.editSchool(editedSchool));
		},


		handleExitAddSchool(){
			var { dispatch } = this.props;
			dispatch(actions.enableAddSchool(false));
		},


		initiateAddSchool(){
			var { dispatch } = this.props;
			dispatch(actions.enableAddSchool(true));
		},


		handleSearch(searchString){
			this.setState({
				searchString: searchString.toLowerCase()
			});
		},

    renderField(){
      console.log("In Form", this.refs.name.value);
      var { dispatch } = this.props;
      dispatch(actions.setSelectField(this.refs.name.value));

      this.setState({
        showField: true,
        currentlyEditing: this.refs.name.value
      });
    },

  	render() {

  		var {schools} = this.props;
  		var searchString= this.state.searchString;
  		var filteredSchools = SearchProcessor.filterEvents(schools, searchString);

			var renderFormField = () =>{
				if (!this.state.showField){
					return(
						<div>
						</div>
					);
				}
        else{
          return(
            <div>
              <FormField></FormField>
            </div>
          );
        }

			};

	    return (
	    	<div>
					<div class="container">
		        <p class="line-breaker" />
						<BreadCrumb routes={this.props.routes} separator =" >> "/>
						<br />
						<br />
			        <div class="row row-header report-form">
								<br />
								<div class="row row-header">
	                <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
	                    <p class="form-header">Form Fields Administration</p>
	                </div>
                </div>
                <br />
                <div class="row row-header">
                  <div class="col-xs-12 col-sm-5 col-lg-5 col-md-5">
	                    <p>Use the dropdown-menu to select a form to edit</p>
	                </div>
			            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
                    <div class="form-group">
                      <select class="form-control" onChange={this.renderField} ref="name">
                          <option>--None--</option>
                          <option>Assessment Type</option>
                          <option>District</option>
                          <option>Ethnicity</option>
                          <option>Event Type</option>
                          <option>Grade</option>
                          <option>Presenting Issue</option>
                          <option>Referral Source</option>
                          <option>Sex</option>
                      </select>
                    </div>
			            </div>
	            	</div>
                <br />
                <br />
                <br />
                {renderFormField()}
			        </div>
			    </div>
			</div>
			);
  	}
});

module.exports = connect(
	(store) => {
		return {
			schools: store.schools,
      currentlyEditing: store.formFieldState,
			addSchool: store.addSchoolState
		};
	}
)(Form);
