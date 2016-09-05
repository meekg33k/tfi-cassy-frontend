"use strict"

import React from "react"
import ReactDOM from "react-dom"
import BreadCrumb from "react-breadcrumbs"
import axios from "axios"
import {connect} from "react-redux"

import AddSchoolForm from "../components/AddSchoolForm"
import FormPanel from "../components/FormPanel"
import SchoolList from "../components/SchoolList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"

import * as actions from "../../actions/actions"


var Form =  React.createClass({

	componentWillMount(){
		var user = JSON.parse(localStorage.getItem('user'));
		var {dispatch} = this.props;

		//Check if user is admin....
		if (user){
			dispatch(actions.asyncFetchFormFields());
		}
		else{
			//User not logged in.. re-route
			//dispatch(actions.setUserError("Login 	"));
		}	
	},

	getInitialState(){
		return {	
	  		isEditing: this.props,
	        showField: false,
	        currentlyEditing: this.props,
			searchString: ""
		};
	},

	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

    renderField(){
      console.log("Selected field Form", this.refs.name.value);
      var { dispatch, formFields } = this.props;
			var selectedField;

			console.log(formFields);

			for(var i = 0;  i < this.props.formFields.length; i++) {
	        if (formFields[i].name === this.refs.name.value) {
	            selectedField = formFields[i].name;
      	      	dispatch(actions.setSelectedField(selectedField));
	            break;
	        }
	    }

      	this.setState({
	        showField: true
	    });
    },

  	render() {
      	var {formFields} = this.props;
  		var searchString= this.state.searchString;

	    var renderFields = () => {
  			return formFields.map((formField) => {
  				return (
              		<option key={formField.id}>{formField.field_name}</option>
  				);
  			});
	  	};

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
	              <FormPanel></FormPanel>
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
		                  	<div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
			                    <p>Use the dropdown-menu to select a form field to manage</p>
			                </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
			                    <div class="form-group">
			                      <select class="form-control" onChange={this.renderField} ref="name">
			                          {renderFields()}
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
			addSchool: store.addSchoolState,
		    formFields: store.formFields,
		    formFieldValues: store.formFieldValues
		};
	}
)(Form);
