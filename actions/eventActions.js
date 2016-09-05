"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddEvent = (theEvent) => {
	return (dispatch, getState) => {

		ApiRequester.createEvent(theEvent).then(function(res){
			alert("New event created successfully");  //<============ Change all alerts to modals
			dispatch(asyncFetchEvents());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncDeleteEvent = (theEvent) => {
	return (dispatch, getState) => {

		ApiRequester.deleteEvent(theEvent).then(function(res){
			alert("Event deleted successfully"); //<============ Change all alerts to modals
			//Update changes in Staff view
			dispatch(asyncFetchEvents());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncEditEvent = (theEvent) => {
	return (dispatch, getState) => {

		ApiRequester.editEvent(theEvent).then(function(res){
			alert("Changes saved successfully"); //<============ Change all alerts to modals
			dispatch(asyncFetchEvents());

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchEvents = () => {
	return (dispatch, getState) => {

		ApiRequester.getAllEvents().then(function(res){
			dispatch(setEventList(res));
		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/
export var addEvent = (event) => {
	return {
		type: 'ADD_EVENT',
		payload: event
	};
}

export var deleteEvent = (victimEvent) => {
	return {
		type: 'DELETE_EVENT',
		payload: victimEvent
	};
}

export var disableEditButton = (value) => {
	return {
		type: 'DISABLE_EDIT_BTN',
		payload: value
	};
}

export var exitEditEvent = (notEditedEvent) => {
	return {
		type: 'EXIT_EDIT_EVENT',
		payload: notEditedEvent
	};
}

export var saveEditedEvent = (editedEvent) => {
	return {
		type: 'EDIT_EVENT',
		payload: editedEvent
	};
}

export var enableAddEvent = (value) => {
	return {
		type: 'ENABLE_ADD_EVENT',
		payload: value
	};
}

export var enableEditEvent = (value) => {
	return {
		type: 'ENABLE_EDIT_EVENT',
		payload: value
	};
}

export var setEventList = (events) => {
	return {
		type: 'SET_EVENT_LIST',
		payload: students
	};
}

export var setSelectedEvent = (event) => {
	return {
		type: 'SET_EVENT',
		payload: event
	};
}