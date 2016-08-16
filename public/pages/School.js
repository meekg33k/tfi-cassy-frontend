"use strict"

import React from "react"
import ReactDOM from "react-dom"
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux"

import AddSchoolForm from "../components/AddSchoolForm"
import Error from "../components/Error"
import SchoolList from "../components/SchoolList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"

import * as actions from "../../actions/actions"


var School =  React.createClass({

		getInitialState(){
			return {
	  		addSchool: this.props,
				error: false,
				errorMessage: "Kindly enter school name",
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

		handleCancelEditSchool(){
			if  (this.state.error == true){
				this.setState({
					error: false
				});
			}
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
			console.log("Edited School in School", editedSchool);
			dispatch(actions.editSchool(editedSchool));
		},

		handleExitAddSchool(){
			var { dispatch } = this.props;
			dispatch(actions.enableAddSchool(false));
		},

		handleSearch(searchString){
			this.setState({
				searchString: searchString.toLowerCase()
			});
		},

		initiateAddSchool(){
			var { dispatch } = this.props;
			dispatch(actions.enableAddSchool(true));
		},

		validateEditSchool(schoolName){
			if (schoolName.length == 0){
					this.setState({
						error: true
					});
				return false;
			}
			else{
				this.setState({
					error: false
				});
				return true;
			}
		},


  	render() {
  		var {schools} = this.props;
  		var searchString= this.state.searchString;
  		var filteredSchools = SearchProcessor.filterEvents(schools, searchString);

			var displayErrorMessage = () =>{
				if (this.state.error){
					return(
						<div>
							<p class="error">{this.state.errorMessage}</p>
						</div>
					);
				}
			};

			var renderAddSchool = () =>{
				if (this.props.addSchool){
					return(
						<div>
							<AddSchoolForm onAddSchool={this.handleAddSchool} onExitAddSchool={this.handleExitAddSchool}/>
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
								{renderAddSchool()}
								<br />
								<div class="row row-header">
	                <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
	                    <p class="school-header">School List</p>
	                </div>
	                <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
	                  	<div class="form-group">
	                        <button type="submit" class="btn btn-primary" onClick={this.initiateAddSchool}>
	                          <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
	                        &nbsp; Add School
	                      </button>
	                  	</div>
	                </div>
			            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
			            	<Search onSearch={this.handleSearch} placeholder = "Enter school name here to search"/>
			            </div>
	            	</div>
								<div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
									{displayErrorMessage()}
								</div>
			            <SchoolList schools={filteredSchools} onCancelEditSchool = {this.handleCancelEditSchool}
											onDeleteSchool={this.handleDeleteSchool} onEditSchool={this.handleEditSchool} onValidateEditSchool = {this.validateEditSchool} />
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
			addSchool: store.addSchoolState,
			editSchoolErr: store.editSchoolErrorState,
			editSchoolErrMsg: store.editSchoolErrorMessage
		};
	}
)(School);
