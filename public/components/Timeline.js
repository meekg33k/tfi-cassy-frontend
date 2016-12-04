"use strict";

import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";


export default React.createClass({


	render(){
		var date = moment(this.props.event_date).format("MM/DD/YYYY");
		var renderTimeline = () =>{
			return(
				<div>
					<p></p>
					<div class="row">
						<div class="col-sm-1 col-lg-1 col-md-1">
							{date}
						</div>
						<div class="col-sm-3 col-lg-3 col-md-3">
							{this.props.Activity}
						</div>
						<div class="col-sm-3 col-lg-3 col-md-3">
							{this.props.Description}
						</div>
						<div class="col-sm-5 col-lg-5 col-md-5">
							<p class="nowrap">{this.props.Comments}</p>
						</div>
	          		</div>
				</div>
			);
		};

		return(
			<div>
				{renderTimeline()}
			</div>
		);
	}
});
