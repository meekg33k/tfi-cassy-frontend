"use strict";

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
