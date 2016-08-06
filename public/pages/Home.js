"use strict"

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";


export default React.createClass({
	render(){
		return(
			<div>
				<div class="content-layout">
				    <div class="welcome-banner well">
				            Welcome Christy, what would you want to do today?
			      </div>
						<br />

						<div class="container">
				        <div class="row row-header">
									<div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
										<Link to="/students/add">
											<div class="well wid-well">
												<p><i class = "fa fa-graduation-cap"></i></p>
												<p class="btn-text"><b> My Students </b></p>
											</div>
										</Link>
									</div>
			            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
				            <Link to="/events/add">
					            <div class="well wid-well">
						            <p><i class = "fa fa-calendar"></i></p>
						            <p class="btn-text"><b> My Events </b></p>
			                </div>
		                </Link>
			            </div>
			            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
				            <Link to="./reports.html">
					            <div class="well wid-well">
						            <p><i class = "fa fa-pencil"></i></p>
						            <p class="btn-text"><b> My Reports </b></p>
			                </div>
		                </Link>
			            </div>
								</div>
				    </div>
						<br />

				    <div class="container">
				        <div class="row row-header">
				            <div class="col-xs-12 col-sm-9 col-lg-9 col md-9 right-padding">
					            <p class="line-breaker" />
				                <p>Here is a summary of your last activity</p>
				                <img src="../assets/images/dashboardSample.png" class="img-responsive" />
				            </div>
				            <div class="col-xs-12 col-sm-3 col-lg-3 col-md-3">
				                <p class="line-breaker" />
				                <p class="line-breaker" />
				                <Link to="/events/add">
				                	<button type="button" class="btn btn-md btn-warning" id ="record-event-btn">
					                	<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
					                 &nbsp;Record Event
				                 	</button>
			                 	</Link>
 				               	<p class="line-breaker" />
 				               	<Link to="/students/add">
					                <button class="btn btn-success btn-md" type="button" id ="add-student-btn">
					                	+<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
				                	 &nbsp;Add Student
			                	 	</button>
		                	 	</Link>
				                <p class="line-breaker" />
				                <a class="btn btn-primary btn-nd" href="./reports.html">
				                	<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
				                 &nbsp;Generate Report</a>
				                <p class="line-breaker" />
				            </div>
				        </div>
				    </div>
			    </div>
		    </div>
		);
	}
});
