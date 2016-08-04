"use strict"

import React from "react";
import ReactDOM from "react-dom";
import Search from "../components/Search"


export default React.createClass({

	onAddEventButton: function (e){
		e.preventDefault();

		var name = this.refs.name.value;
		this.refs.name.value = '';

		if (typeof name === "string" && name.length > 0){
			this.setState({
				name: this.props.name
			});
		}
	},

	getInitialState: function(){
		return {
			name: this.props.name
		};
	},

  	render: function() {
	    return (
	    	<div>
				<div class="container">
			        <p class="line-breaker" />
			        <div class="row row-header">
			            <div class="col-xs-12 col-sm-12 col-lg-12 ccol md-12">
			                <p class="event-header">Add Event</p>
			            </div>
			        </div>
			        <div class="row row-header report-form">
			            <p>Use this form to add details about each event you facilitated or were involved in</p>
			            <p class="line-breaker" />
			            <form class="form-horizontal" role="form" onSubmit={this.onAddEventButton}>
			                <div class="form-group">
			                    <label for="eventName" class="col-sm-2 control-label">Event Name</label>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="eventName" placeholder="" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="eventType" class="col-sm-2 control-label">Event Type</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="eventType">
			                            <option>Individual Session</option>
			                            <option>Group Session</option>
			                            <option>Crisis Hours</option>
			                            <option>Parent Consultations</option>
			                            <option>Staff Consultations</option>
			                            <option>Classroom Presentations/Lessons</option>
			                            <option>Other (Please specify)</option>
			                        </select>
			                    </div>
			                    <div class="col-sm-5">
			                      <input type="text" class="form-control" id="" placeholder="If other, please specify details" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="school" class="col-sm-2 control-label">School</label>
			                    <div class="col-sm-5">
			                        <select class="form-control" id="eventType">
			                            <option>Ranswood Elementary</option>
			                            <option>ABC HighSchool</option>
			                            <option>XYZ College</option>
			                        </select>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="eventDescription" class="col-sm-2 control-label">Event Description</label>
			                    <div class="col-sm-5">
			                        <textarea class="form-control" id="eventDescription" rows="10" placeholder="Enter details of event here">
			                        </textarea>
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="eventDate" class="col-sm-2 control-label">Event Date</label>
			                    <div class="col-sm-5">
			                      <input type="date" class="form-control" id="eventDate" />
			                    </div>
			                </div>
			                <div class="form-group">
			                    <label for="attendingStudents" class="col-sm-2 control-label">Attending Students</label>
			                    <div class="col-sm-10">
			                        <Search></Search>
			                    </div>
			                </div>
			                <p class="line-breaker"></p>
			                <div class="form-group">
			                    <div class="col-sm-offset-2 col-sm-10">
			                        <button type="submit" class="btn btn-warning">Record Event</button>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
			</div>
		);
  }
});

	