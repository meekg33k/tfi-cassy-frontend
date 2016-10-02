"use strict"

import uuid from "node-uuid";
import React from "react";
import ReactDOM from "react-dom";
import BreadCrumb from "react-breadcrumbs"
import {connect} from "react-redux"

import AddEventForm from "../components/AddEventForm"
import EditEventForm from "../components/EditEventForm"
import EventList from "../components/EventList"
import Search from "../components/Searcher"
import SearchProcessor from "../../apis/Helper"

import * as actions from "../../actions/actions"



var Event = React.createClass({

	componentWillMount(){
		var user = JSON.parse(localStorage.getItem('user'));
		var {dispatch} = this.props;

		if (user){
			//User is logged in
			dispatch(actions.asyncFetchEvents(user.user_id));
			dispatch(actions.asyncFetchStudentsByUser());
			dispatch(actions.asyncFetchSchools()); //change to asynFetchSchoolsByUser
			dispatch(actions.asyncFetchFormFieldValuesByName("Event Type"));
		}
		else {
			//User needs to login
			window.location.replace(
			  window.location.pathname + window.location.search + '#/'
			);
			//dispatch(actions.setUserError());
		}
	},

	getInitialState(){
		return {
  			addEvent: this.props,
			isEditing: this.props, //app-wide state of editing
			showEditForm: false, //component state to determine if form should be displayed
			searchString: "",
			eventBeingEdited: {}, //object being edited
			events: this.props
		};
	},

	//This is the method that actually adds a new event..will make API calls
	handleAddEvent(event){
		var { dispatch } = this.props;
		if (!this.props.showEditForm){
			dispatch(actions.asyncAddEvent(event));
			this.handleExitAddEvent();
		}
	},

	//This method that actually deletes an event..will make API calls
	handleDeleteEvent(event){

    	if (confirm("Do you want to proceed to delete the event?") == true) {
    		var { dispatch } = this.props;
			dispatch(actions.asyncDeleteEvent(event));
    	}

	},

	//Handles initial call to edit event from EventList... no API calls
	handleEditEvent(eventToBeEdited){
		if (!this.props.addEvent){
			this.setState({
				showEditForm: true,
				eventBeingEdited: eventToBeEdited
			});
			return true;
		}
		return false;
	},


  	handleExitAddEvent(){
	    var { dispatch } = this.props;
	    dispatch(actions.enableAddEvent(false));
	},


  	handleExitEditEvent(){
	    var { dispatch } = this.props;
	    dispatch(actions.exitEditEvent(this.state.eventBeingEdited));
	    dispatch(actions.enableEditEvent(false));
	},


	handleSaveEditEvent(eventEdited){
		var victimId;
		var { dispatch } = this.props;

		//Does actual editing.. makes API calls
		//dispatch(actions.saveEditedEvent(eventEdited));
		dispatch(actions.asyncEditEvent(eventEdited));
		dispatch(actions.enableEditEvent(false));

		this.setState({
			showEditForm: false
		});
	},


	initiateAddEvent(){
		var { dispatch } = this.props;
	    if (!this.props.isEditing){
	    	dispatch(actions.enableAddEvent(true));
    	}
	},


	handleSearch(searchString){
		this.setState({
			searchString: searchString.toLowerCase()
		});
	},

  	render() {

  		var {events, dispatch} = this.props;
  		var searchString= this.state.searchString;
  		var filteredEvents = SearchProcessor.filterEvents(events, searchString);
	    console.log("event state after exiting", this.props);

      	var renderAddEditEvent = () =>{
  			if (this.props.addEvent){
				if (this.props.isEditing){
					dispatch(actions.enableAddEvent(false));
				}
				else{
					return(
						<div>
							<AddEventForm onAddEvent={this.handleAddEvent} onExitAddEvent={this.handleExitAddEvent}/>
						</div>
					);
				}

  			}
			if (this.props.isEditing){
				if (this.props.addEvent){
					dispatch(actions.enableEditEvent(false));
					if (this.state.addEvent){
						this.setState({
							showEditForm: false
						});
					}
				}
				else{
					return(
						<div>
							<EditEventForm onSaveEditEvent={this.handleSaveEditEvent}
								onExitEditEvent={this.handleExitEditEvent} event={this.state.eventBeingEdited}/>
						</div>
					);
				}
			}

  		};

	    return (
	    	<div>
				<div class="container">
		            <p class="line-breaker" />
		            <BreadCrumb routes={this.props.routes} separator =" >> "/>
		            <br />
		            <br />
			        <div class="row row-header report-form">
          				{renderAddEditEvent()}
			            <br />
                  	<div class="row row-header">
	                    <div class="col-xs-12 col-sm-6 col-lg-6 col-md-6">
	                        <p class="event-header">My Events List</p>
	                    </div>
	                    <div class="col-xs-12 col-sm-2 col-lg-2 col-md-2">
	                      	<div class="form-group">
	                            <button type="submit" class="btn btn-warning" onClick={this.initiateAddEvent}>
	                              <span class="glyphicon glyphicon-plus" aria-hidden="true">  </span>
	                            &nbsp; Add Event
	                          	</button>
	                      	</div>
	                    </div>
  			            <div class="col-xs-12 col-sm-4 col-lg-4 col-md-4">
  			            	<Search onSearch={this.handleSearch} placeholder = "Search by event name here"/>
  			            </div>
                  	</div>
							<EventList events={filteredEvents} onEditEvent={this.handleEditEvent} onDeleteEvent={this.handleDeleteEvent}/>
			        </div>
			    </div>
			</div>
		);
  	}
});

module.exports = connect(
	(store) => {
		return {
			addEvent: store.addEventState,
			events: store.events,
			formFieldValues: store.formFieldValues,
			isEditing: store.editEventState
		};
	}
)(Event);
