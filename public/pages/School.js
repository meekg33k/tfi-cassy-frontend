"use strict"

import React from "react"
import ReactDOM from "react-dom"
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux"

import AddSchoolForm from "../components/AddSchoolForm"
import SchoolList from "../components/SchoolList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"

import * as actions from "../../actions/actions"


var School =  React.createClass({

	getInitialState(){
		return {
      		addSchool: this.props,
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


  	render() {

  		var {schools} = this.props;
  		var searchString= this.state.searchString;
  		var filteredSchools = SearchProcessor.filterEvents(schools, searchString);

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
			            <SchoolList schools={filteredSchools} onEditSchool={this.handleEditSchool} onDeleteSchool={this.handleDeleteSchool}/>
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
			addSchool: store.addSchoolState
		};
	}
)(School);
