"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Event from "../components/Event"


export default React.createClass({

	getInitialState(){
		return {
			events: this.props
		};
	},


	render(){

		var {events} = this.props;
		var renderMessage = () => {

			if (events.length == 0){
				return(
					<div>
						<p>No events found. Click on the Add Event button to add a new event</p>
					</div>
				);

			}
			else {
				return(
					<div>
		        <div class="row">
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Event Name</b>
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Event Type</b>
							</div>
							<div class="col-sm-2 col-lg-2 col md-2">
								<b>Description</b>
							</div>
              <div class="col-sm-2 col-lg-2 col md-2">
                <b>School</b>
              </div>
							<div class="col-sm-4 col-lg-4 col md-4">
								<b>Date</b>
							</div>
						</div>
						<br />
	            {renderEvents()}
            </div>
	            );
			}
		};

		var renderEvents = () => {
			return events.map((event) => {
				return (
					<Event key={event.id} onEdit={this.props.onEditEvent} onDelete={this.props.onDeleteEvent}
					{...event}/>
				);
			});
		};

		return(
			<div>
				<div class="container">
			        <br />
			        <div class="row row-header">
				        <div class="well width-well">
				        	{renderMessage()}
				        </div>
			        </div>
			    </div>
			</div>
		);
	}

});
