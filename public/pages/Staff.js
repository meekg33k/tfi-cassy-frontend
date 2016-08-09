"use strict"

import React from "react"
import ReactDOM from "react-dom"
import BreadCrumb from "react-breadcrumbs"

import AddStaffForm from "../components/AddStaffForm"
import StaffList from "../components/StaffList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"



export default React.createClass({

	getInitialState(){
		return {
      addStaff: false,
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
			],
			addStaff: !this.state.addStaff
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

	handleExitAddStaff(){
		this.setState({
			addStaff: false
		});
	},

	initiateAddStaff(){
		this.setState({
			addStaff: true
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

			var renderAddStaff = () =>{
				if (this.state.addStaff){
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
	                            <button type="submit" class="btn btn-success" onClick={this.initiateAddStaff}>
	                              <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
	                            &nbsp; Add Staff
	                          </button>
	                      </div>
	                    </div>
	  			            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
	  			            	<Search onSearch={this.handleSearch} placeholder = "Enter staff name here to search"/>
	  			            </div>
	                  </div>
				            <StaffList staff={filteredStaff} onEditStaff={this.handleEditStaff} onDeleteStaff={this.handleDeleteStaff}/>
				        </div>
				    </div>
				</div>
			);
	  }
	});
