"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";


export default React.createClass({
	render(){
		return(
			<div>
				<div class="content-layout">
				    <p class="line-breaker"></p>

				    <div class="container">
				        <div class="row row-header">
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/forms/edit">
						            <div class="well">
							            <p><i class = "fa fa-edit"></i></p>
							            <p class="btn-text"><b> Add/Edit Form Field </b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/districts/add">
						            <div class="well">
							            <p><i class = "fa fa-building"></i></p>
							            <p class="btn-text"><b> Add District </b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/schools/add">
						            <div class="well">
							            <p><i class = "fa fa-institution"></i></p>
							            <p class="btn-text"><b> Add School </b></p>
					                </div>
				                </Link>
				            </div>
		                </div>
		                <p class="line-breaker"></p>
		                <div class="row row-header">
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/staff/add">
						            <div class="well">
							            <p><i class = "fa fa-user-plus"></i></p>
							            <p class="btn-text"><b> Add/Edit Staff </b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/students/add">
						            <div class="well">
							            <p><i class = "fa fa-graduation-cap"></i></p>
							            <p class="btn-text"><b> Add Student </b></p>
					                </div>
				                </Link>
				            </div>
				            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
					            <Link to="/admin/schools/edit">
						            <div class="well">
							            <p><i class = "fa fa-search"></i></p>
							            <p class="btn-text"><b> Search School </b></p>
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