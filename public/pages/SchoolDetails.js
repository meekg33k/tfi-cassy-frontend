"use strict";

import React from "react";
import { Link } from "react-router";
import Therapist from "../components/Therapist";
import SiteCoordinator from "../components/SiteCoordinator";
import BreadCrumb from "react-breadcrumbs";


export default React.createClass({

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
										<p class="school-header">School Details</p>
								</div>
								<div>
									<SiteCoordinator></SiteCoordinator>
			            <Therapist></Therapist>
								</div>
							</div>
		        </div>
			    </div>
			</div>
		);
	}

});
