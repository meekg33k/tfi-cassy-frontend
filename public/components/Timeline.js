"use strict";

import React from "react";
import ReactDOM from "react-dom";



export default React.createClass({

	getInitialState(){
		return {
			isEditing: false,
			id: this.props.id,
			date: this.props.date,
			activity: this.props.activity,
			description: this.props.description,
			comments: this.props.comments,
		};
	},

	render(){
		var renderTimeline = () =>{
			return(
				<div>
					<p></p>
					<div class="row">
						<div class="col-sm-1 col-lg-1 col-md-1">
							{this.state.date}
						</div>
						<div class="col-sm-2 col-lg-2 col-md-2">
							{this.state.activity}
						</div>
						<div class="col-sm-3 col-lg-3 col-md-3">
							{this.state.description}
						</div>
						<div class="col-sm-6 col-lg-6 col-md-6">
							<p class="nowrap">{this.state.comments}</p>
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
