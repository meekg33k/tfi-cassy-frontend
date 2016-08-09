"use strict";

import React from "react";
import ReactDOM from "react-dom";
import StudentTag from "../components/StudentTag"


export default React.createClass({

	getInitialState(){
		return {
			error: false,
			errorMessage: "",
      event: this.props.event
		};
	},

	ensureInputEntered(){

		var eventName = this.refs.eventName.value;
		var eventDescription = this.refs.eventDescription.value;

		if (eventName.length == 0 && eventDescription.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter event details"
			});

			this.refs.eventName.focus();
			return false
		}
		else if (eventName.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter name of event"
			});

			this.refs.eventName.focus();
			return false;
		}
		else if (eventDescription.length == 0){
			this.setState({
				error: true,
				errorMessage: "Kindly enter a description for the event"
			});

			this.refs.eventDescription.focus();
			return false;
		}
		return true;
	},

	saveEdit(e){
		e.preventDefault();

		if (this.ensureInputEntered()){
			this.props.onSaveEditEvent({
				id: this.state.event.id,
				name: this.refs.eventName.value,
				type: this.refs.eventType.value,
				school: this.refs.school.value,
        other: this.refs.other.value,
				description: this.refs.eventDescription.value,
				date: this.refs.eventDate.value
			});

			this.refs.eventName.value = '';
			this.refs.other.value = '';
      this.refs.eventDescription.value = '';
		}

	},

	cancelEdit(e){
		e.preventDefault();
		this.props.onExitEditEvent();
	},


	render(){
		var displayError = () =>{
			if (this.state.error){
				return(
					<div>
						<p>{this.state.errorMessage}</p>
					</div>
				);
			}

		};

		return(
			<div class="well">
				<div class="row row-header">
						<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
								<p class="event-header">Edit Event</p>
						</div>
				</div>
				<br />
				{displayError()}
				<br />
        <div class="row row-header">
            <br />
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <label for="eventName" class="col-sm-2 control-label">Event Name</label>
                    <div class="col-sm-5">
                      <input type="text" class="form-control" ref="eventName" placeholder="" defaultValue={this.state.event.name}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="eventType" class="col-sm-2 control-label">Event Type</label>
                    <div class="col-sm-5">
                        <select class="form-control" ref="eventType">
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
                      <input type="text" class="form-control" ref="other" placeholder="If other, please specify details" defaultValue={this.state.event.other}/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="school" class="col-sm-2 control-label">School</label>
                    <div class="col-sm-5">
                        <select class="form-control" ref="school">
                            <option>Ranswood Elementary</option>
                            <option>ABC HighSchool</option>
                            <option>XYZ College</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="eventDescription" class="col-sm-2 control-label">Description</label>
                    <div class="col-sm-5">
                        <textarea class="form-control" ref="eventDescription" rows="5" placeholder="Enter details of event here"
                        defaultValue={this.state.event.description}>
                        </textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="eventDate" class="col-sm-2 control-label">Event Date</label>
                    <div class="col-sm-5">
                      <input type="date" class="form-control" ref="eventDate" required/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="attendingStudents" class="col-sm-2 control-label">Attending Students</label>
                    <div class="col-sm-10">
                        <StudentTag tags={this.state.event.students}></StudentTag>
                    </div>
                </div>
                <p class="line-breaker"></p>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-warning" onClick={this.saveEdit}>
                          <span class="glyphicon glyphicon-floppy-save" aria-hidden="true"> </span>
                        &nbsp; Save Changes
                      </button>&nbsp; &nbsp; &nbsp;
                      <button type="submit" class="btn btn-danger" onClick={this.cancelEdit}>
                        <span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
                      &nbsp; Discard Changes
                    </button>
                  </div>
                </div>
            </form>
        </div>
			</div>
		);
	}

});
