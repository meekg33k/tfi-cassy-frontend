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
											<Link to="/admin/districts">
						            <div class="well">
							            <p><i class = "fa fa-building"></i></p>
							            <p class="btn-text"><b> Add/Edit District </b></p>
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
