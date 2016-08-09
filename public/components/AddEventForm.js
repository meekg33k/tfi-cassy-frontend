"use strict";

import React from "react";
import ReactDOM from "react-dom";
import StudentTag from "../components/StudentTag"


export default React.createClass({

	getInitialState(){
		return {
			error: false,
			errorMessage: "",
      attendingStudents:[],
      students: [
        {
					id: 898091,
					firstName: "Jermain",
					lastName: "Dupril",
					gender: "Male",
					grade: "5th",
					school: "Loyola College",
					ethnicity: "African American"
				}, {
					id: 777118,
					firstName: "Priyanka",
					lastName: "Miya",
					gender: "Female",
					grade: "12th",
					school: "Ranswood School",
					ethnicity: "Asian Indian"
				}
      ]
		};
	},

  retrieveSuggestions(){
    var suggestions = [];

    this.state.students.map((student) =>{
      suggestions.push(student.firstName+ " "+student.lastName);
    })
    return suggestions;
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

	addEvent(e){

		e.preventDefault();

		if (this.ensureInputEntered()){

      this.updateStudentList();
			this.props.onAddEvent({
				id: Date.now(),
				name: this.refs.eventName.value,
				type: this.refs.eventType.value,
				school: this.refs.school.value,
        other: this.refs.other.value,
				description: this.refs.eventDescription.value,
				date: this.refs.eventDate.value,
        students: this.state.attendingStudents,
			}, false);

			this.refs.eventName.value = '';
			this.refs.other.value = '';
      this.refs.description.value = '';
		}

	},

	exitAddEvent(e){

		e.preventDefault();
		this.props.onExitAddEvent();

	},

  handleAddStudent(studentName){
    var studentList = this.state.attendingStudents;
    studentList.push({
        id: studentList.length + 1,
        text: studentName
    });

    this.setState(studentList);

    this.state.attendingStudents.map((student) => {
      console.log("====!"+student.text);
    })
  },

  handleDeleteStudent(id){
    var studentList = this.state.attendingStudents;
    studentList.splice(id,1);
    this.setState(studentList);

    this.state.attendingStudents.map((student) => {
      console.log("=>>>>>>=!"+student.text);
    })
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
								<p class="event-header">Add Event</p>
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
                      <input type="text" class="form-control" ref="eventName" placeholder="" />
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
                      <input type="text" class="form-control" ref="other" placeholder="If other, please specify details" />
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
                        <textarea class="form-control" ref="eventDescription" rows="5" placeholder="Enter details of event here">
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
                        <StudentTag onAddStudent={this.handleAddStudent} onDeleteStudent={this.handleDeleteStudent} suggestions={this.retrieveSuggestions()}></StudentTag>
                    </div>
                </div>
                <p class="line-breaker"></p>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-warning" onClick={this.addEvent}>
                          <span class="glyphicon glyphicon-record" aria-hidden="true">  </span>
                        &nbsp; Record Event
                      </button>&nbsp; &nbsp; &nbsp;
                      <button type="submit" class="btn btn-danger" onClick={this.exitAddEvent}>
                        <span class="glyphicon glyphicon-remove" aria-hidden="true">  </span>
                      &nbsp; Cancel
                    </button>
                  </div>
                </div>
            </form>
        </div>
			</div>
		);
	}

});
