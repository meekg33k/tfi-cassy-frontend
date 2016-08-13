"use strict";

import React from "react";
import { Link } from "react-router";
import TherapistList from "../components/TherapistList";
import SiteCoordinator from "../components/SiteCoordinator";
import BreadCrumb from "react-breadcrumbs";


export default React.createClass({

	getInitialState(){
		return {
			name: "Ravenswood Elementary"
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
										<p class="school-header">School Details: {this.state.name}</p>
										<br />
								</div>
								<div>
									<SiteCoordinator></SiteCoordinator>
			            <TherapistList></TherapistList>
								</div>
							</div>
		        </div>
			    </div>
			</div>
		);
	}

});
