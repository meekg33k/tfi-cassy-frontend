"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Staff from "../components/Staff"


export default React.createClass({

	getInitialState(){
		return {
			staff: this.props
		};
	},


	render(){

		var {staff} = this.props;

		var renderMessage = () => {
			if (staff.length == 0){
				return(
					<div>
						<p>No staff details found. You can use the form above to add the staff</p>
					</div>
				);
			}
			else {
				return(
					<div>
		        <div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>First Name</b>
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Last Name</b>
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Role</b>
							</div>
							<div class="col-sm-6 col-lg-6 col md-6">
								<b>Email</b>
							</div>
						</div>
						<br />
            {renderStaff()}
          </div>
          );
			}
		};

		var renderStaff = () => {
			return staff.map((staffMember) => {
				return (
					<Staff key={staffMember.id} onCancelEdit = {this.props.onCancelEditStaff} onDelete={this.props.onDeleteStaff} onEdit={this.props.onEditStaff} 
							validateEdit={this.props.onValidateEditStaff} {...staffMember}/>
				);
			});
		};

		return(
			<div>
				<div class="container">
							<br />
			        <div class="row row-header">
				        <div class="well width-well">
				        	{renderMessage()}
				        </div>
			        </div>
			    </div>
			</div>
		);
	}

});
