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
						<div class="container">
								<br />
								<br />
								<br />
				        <div class="row row-header">
									<div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
										<Link to="/students">
											<div class="well wid-well">
												<p><i class = "fa fa-graduation-cap"></i></p>
												<p class="btn-text"><b> My Students </b></p>
											</div>
										</Link>
									</div>
			            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
				            <Link to="/events">
					            <div class="well wid-well">
						            <p><i class = "fa fa-calendar"></i></p>
						            <p class="btn-text"><b> My Events </b></p>
			                </div>
		                </Link>
			            </div>
			            <div class="col-xs-12 col-sm-4 col-lg-4 col md-4">
				            <Link to="/reports">
					            <div class="well wid-well">
						            <p><i class = "fa fa-pencil"></i></p>
						            <p class="btn-text"><b> My Reports </b></p>
			                </div>
		                </Link>
			            </div>
								</div>
				    </div>
						<br />
			    </div>
		    </div>
		);
	}
});
