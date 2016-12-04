"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import Timeline from "../components/Timeline"
import Util from "../../apis/Helper"


var TimeLineList = React.createClass({

	render(){
		var {timelines} = this.props;

		var renderTimelines = () => {
      		var filteredTimelines = Util.genericSort(timelines);
			return filteredTimelines.map((timeline) => {
				return (
					<Timeline key={timeline.timeline_id} {...timeline}></Timeline>
				);
			});
		};

		var renderMessage = () => {
			if (timelines.length == 0){
				return(
					<div>
						<p>No activity found on this student</p>
					</div>
				);
			}
			else {
				return(
					<div>
				        <div class="row">
							<div class="col-sm-1 col-lg-1 col-md-1">
								<b>Date</b>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								<b>Activity</b>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								<b>Description</b>
							</div>
							<div class="col-sm-5 col-lg-5 col-md-5">
								<b>Comments</b>
							</div>
						</div>
		            {renderTimelines()}
		        </div>
        		);
			}
		};
		return(
			<div>
				<div class="container">
		        <br />
		        <div class="row row-header">
			        <div>
			        	{renderMessage()}
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
			timelines: store.timelineState
		};
	}
)(TimeLineList);
