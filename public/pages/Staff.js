"use strict"

import React from "react"
import ReactDOM from "react-dom"
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux"

import AddStaffForm from "../components/AddStaffForm"
import StaffList from "../components/StaffList"
import Search from "../components/Searcher"
import Util from "../../apis/Helper"

import * as actions from "../../actions/actions"


var Staff =  React.createClass({

	getInitialState(){
		return {
  		addStaff: this.props,
			error: false,
			errorMessage: "",
			searchString: "",
			staff: this.props
		};
	},

	handleAddStaff(staff){
		//To include REST API calls
		var { dispatch } = this.props;
		dispatch(actions.addStaff(staff));
		this.handleExitAddStaff();
	},

	handleCancelEditStaff(){
		if  (this.state.error == true){
			this.setState({
				error: false
			});
		}
	},

	handleDeleteStaff(staff){
	    if (confirm("Do you want to proceed to delete the staff?") == true) {
	    	//TODO: Include REST API calls to delete staff
	    	var { dispatch } = this.props;
				dispatch(actions.deleteStaff(staff));
	    }
	},

	handleEditStaff(editedStaff){
		var { dispatch } = this.props;
		dispatch(actions.editStaff(editedStaff));
	},

	handleExitAddStaff(){
		var { dispatch } = this.props;
		dispatch(actions.enableAddStaff(false));
	},

	initiateAddStaff(){
		var { dispatch } = this.props;
		dispatch(actions.enableAddStaff(true));
	},

	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

	validateEditStaff(firstName, lastName){
		if ((firstName.length == 0) || (lastName.length == 0)){
			if ((firstName.length == 0) && (lastName.length == 0)){
					this.setState({
						error: true,
						errorMessage: "Kindly enter staff first name and last name"
					});
					return {
						state: false,
						field: "firstName"
					};
			}
			else if (firstName.length == 0){
				this.setState({
					error: true,
					errorMessage: "Kindly enter staff first name"
				});
				return {
					state: false,
					field: "firstName"
				};
			}
			else if (lastName.length == 0){
				this.setState({
					error: true,
					errorMessage: "Kindly enter staff last name"
				});
				return {
					state: false,
					field: "lastName"
				};
			}
		}
		else{
			var inputValidator = Util.validateUserInput(firstName, lastName);
			if (!inputValidator.state){
				this.setState({
					error: true,
					errorMessage: inputValidator.errorMessage
				});
				return {
					state: false,
					field: inputValidator.field
				};
			}
			else{
				this.setState({
					error: false
				});
				return {
					state: true,
					field: "lastName"
				};
			}
		}
	},

  	render() {

  		var {staff} = this.props;
  		var searchString= this.state.searchString;
  		var filteredStaff = Util.filter(staff, searchString);

			var displayErrorMessage = () =>{
				if (this.state.error){
					return(
						<div>
							<p class="error">{this.state.errorMessage}</p>
						</div>
					);
				}
			};

			var renderAddStaff = () =>{
				if (this.props.addStaff){
					return(
						<div>
							<AddStaffForm onAddStaff={this.handleAddStaff} onExitAddStaff={this.handleExitAddStaff}/>
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
						{renderAddStaff()}
						<br />
						<div class="row row-header">
                <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                    <p class="staff-header">Staff List</p>
                </div>
                <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
                  	<div class="form-group">
                        <button type="submit" class="btn btn-danger" onClick={this.initiateAddStaff}>
                          <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
                        &nbsp; Add Staff
                      </button>
                  	</div>
                </div>
	            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
	            	<Search onSearch={this.handleSearch} placeholder = "Enter staff name here to search"/>
	            </div>
            	</div>
							<div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
								{displayErrorMessage()}
							</div>
			            <StaffList staff={filteredStaff} onCancelEditStaff={this.handleCancelEditStaff} onEditStaff={this.handleEditStaff}
										onDeleteStaff={this.handleDeleteStaff}	onValidateEditStaff={this.validateEditStaff} />
			        </div>
			    </div>
			</div>
			);
  	}
});

module.exports = connect(
	(store) => {
		return {
			staff: store.staff,
			addStaff: store.addStaffState
		};
	}
)(Staff);
