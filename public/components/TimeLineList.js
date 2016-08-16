"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import Timeline from "../components/Timeline"
import Util from "../../apis/Helper"


var TimeLineList = React.createClass({

	render(){
		var {timelines} = this.props;

		console.log(timelines);

		var renderTimelines = () => {
      var filteredTimelines = Util.genericSort(timelines);
			return filteredTimelines.map((timeline) => {
				return (
					<Timeline key={timeline.id} {...timeline}></Timeline>
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
							<div class="col-sm-2 col-lg-2 col-md-2">
								<b>Activity</b>
							</div>
							<div class="col-sm-3 col-lg-3 col-md-3">
								<b>Description</b>
							</div>
							<div class="col-sm-6 col-lg-6 col-md-6">
								<b>Comments</b>
							</div>
						</div>
						<br />
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
