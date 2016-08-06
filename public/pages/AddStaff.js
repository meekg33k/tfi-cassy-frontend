"use strict"

import uuid from "node-uuid";
import React from "react";
import ReactDOM from "react-dom";

import AddStaffForm from "../components/AddStaffForm"
import StaffList from "../components/StaffList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"



export default React.createClass({

	getInitialState(){
		return {
			searchString: "",
			staff: [
				{
					id: 123,
					firstName: "Christy",
					lastName: "Hayes",
					role: "Executive",
					manager: "Christy Hayes"

				}, {
					id: 456,
					firstName: "Eve",
					lastName: "Jackson",
					role: "Administrator",
					manager: "Christy Hayes"

				}, {
					id: 789,
					firstName: "John",
					lastName: "Doe",
					role: "Program Manager",
					manager: "Eve Jackson"

				},
			]
		};
	},

	handleAddStaff(staff){

		this.setState({
			staff: [
				...this.state.staff,
				staff
			]
		});
	},


	handleDeleteStaff(staff){

		this.state.staff.map((staffer) => {
			console.log(staffer.id);

		});

		var victimId;

	    if (confirm("Do you want to proceed to delete the staff?") == true) {

	    	for(var i = 0;  i < this.state.staff.length; i++) {
			    if (this.state.staff[i].id === staff.id) {
			        victimId = i;
			        break;
			    }
			}

			var updatedStaff = this.state.staff.splice(victimId, 1);

			this.setState(updatedStaff);
	    }

	},


	handleEditStaff(editedStaff){

		var updatedStaff = this.state.staff.map((staffMember) => {
			if (staffMember.id === editedStaff.id){
				staffMember.firstName = editedStaff.firstName;
				staffMember.lastName = editedStaff.lastName;
				staffMember.role = editedStaff.role;
				staffMember.manager = editedStaff.manager;
			};
		});

		this.setState(updatedStaff);

		this.state.staff.map((staffMember) => {
			console.log(staffMember.firstName);
		});
	},


	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

  	render() {

  		var {staff, searchString} = this.state;

  		var filteredStaff = SearchProcessor.filter(staff, searchString);

	    return (
	    	<div>
				<div class="container">
			        <p class="line-breaker" />
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-7 col-lg-7 ccol md-7">
			                <p class="staff-header">Add Staff Member</p>
			            </div>
			            <div class="col-xs-12 col-sm-5 col-lg-5 col md-5 ">
			            	<Search onSearch={this.handleSearch} placeholder = "Enter staff name here to search"/>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <p class="line-breaker" />
			            <AddStaffForm onAddStaff={this.handleAddStaff}/>
			            <p class="line-breaker" />
			            <StaffList staff={filteredStaff} onEditStaff={this.handleEditStaff} onDeleteStaff={this.handleDeleteStaff}/>
			        </div>
			    </div>
			</div>
		);
  }
});
