"use strict";

import React from "react";
import { Link } from "react-router";
import {connect} from "react-redux";


import SchoolTherapists from "../components/SchoolTherapists";
import SiteCoordinator from "../components/SiteCoordinator";
import BreadCrumb from "react-breadcrumbs";

import * as actions from "../../actions/actions"


var SchoolDetails = React.createClass({

	componentWillMount(){
		var user = JSON.parse(localStorage.getItem('user'));
		var {dispatch} = this.props;

		if (user.role !== "Administrator"){
			window.location.replace(
			  window.location.pathname + window.location.search + '#/'
			);
			dispatch(actions.setAdminError("No access"));
		}
		else{
			dispatch(actions.asyncFetchSchoolById(this.props.params.id));
			dispatch(actions.asyncFetchSiteCoordinators());
			dispatch(actions.asyncFetchTherapists());
			this.setState({
				_id: this.props.params
			});
		}

	},

	render(){
		return (
			<div>
				<div class="container">
					<p class="line-breaker" />
					<BreadCrumb routes={this.props.routes} separator =" >> "/>
					<p class="line-breaker" />
			        <div class="row row-header report-form">
						<div class="well">
							<div>
								<p class="school-header">School Details: {this.props.selectedSchool.school_name}</p>
								<br />
							</div>
							<div>
								<SiteCoordinator></SiteCoordinator>
		            			<SchoolTherapists></SchoolTherapists>
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
			selectedSchool: store.selectedSchool,
			schools: store.schools,
			staff: store.staff,
			addSchool: store.addSchoolState,
			editSchoolErr: store.editSchoolErrorState,
			editSchoolErrMsg: store.editSchoolErrorMessage
		};
	}
)(SchoolDetails);
