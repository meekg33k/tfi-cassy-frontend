"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import {connect} from "react-redux"

import * as actions from "../../actions/actions"


var Admin = React.createClass({
	componentWillMount(){
		var user = JSON.parse(localStorage.getItem('user'));
		var {dispatch} = this.props;

		//Check if user is admin....
		if (user){
			//dispatch(actions.asyncFetchFormFields());
		}
		else{
			//User not logged in.. re-route
			//dispatch(actions.setUserError("Login 	"));
		}	
	},

	render(){
		return(
			<div>
				<div class="content-layout">
				    <p class="line-breaker"></p>

				    <div class="container">
				        <div class="row row-header">
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/forms">
						            <div class="well">
							            <p><i class = "fa fa-edit"></i></p>
							            <p class="btn-text"><b> Add/Edit Form Field </b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
								<Link to="/admin/staff">
									<div class="well">
										<p><i class = "fa fa-user-plus"></i></p>
										<p class="btn-text"><b> Add/Edit Staff </b></p>
										</div>
									</Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/schools">
						            <div class="well">
							            <p><i class = "fa fa-institution"></i></p>
							            <p class="btn-text"><b> Add/Edit School </b></p>
					                </div>
				                </Link>
				            </div>
		                </div>
		                <p class="line-breaker"></p>
		                <div class="row row-header">
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
											<Link to="/admin/events">
						            <div class="well">
							            <p><i class = "fa fa-calendar"></i></p>
							            <p class="btn-text"><b> Add/Edit Events</b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/students">
						            <div class="well">
							            <p><i class = "fa fa-graduation-cap"></i></p>
							            <p class="btn-text"><b> Add/Edit Student </b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/reports">
						            <div class="well">
							            <p><i class = "fa fa-pencil"></i></p>
							            <p class="btn-text"><b> View Reports </b></p>
					                </div>
				                </Link>
				            </div>
	                </div>
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
)(Admin);

