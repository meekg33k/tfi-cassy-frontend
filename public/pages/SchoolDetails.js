"use strict";

import React from "react";
import { Link } from "react-router";
import SchoolDetails from "../components/SchoolDetails"


export default React.createClass({

	render(){
		return (
			<div>
				<div class="container">
			        <p class="line-breaker" />
							<BreadCrumb routes={this.props.routes} separator =" >> "/>
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-7 col-lg-7 ccol md-7">
			                <p class="section-header">School Details</p>
			            </div>
			            <div class="col-xs-12 col-sm-5 col-lg-5 ccol md-5 ">
			                <div class="form-group has-feedback">
							    <input type="text" class="form-control" placeholder="Search for school here" />
							    <i class="glyphicon glyphicon-search form-control-feedback"></i>
							</div>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <SchoolDetails></SchoolDetails>
			        </div>
			    </div>
			</div>
		);
	}

});
