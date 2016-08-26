"use strict";

export var addStaff = (newStaff) => {
	return {
		type: 'ADD_STAFF',
		payload: newStaff
	};
}

export var deleteStaff = (victimStaff) => {
	return {
		type: 'DELETE_STAFF',
		payload: victimStaff
	};
}

export var editStaff = (staff) => {
	return {
		type: 'EDIT_STAFF',
		payload: staff
	};
}

export var enableAddStaff = (value) => {
	return {
		type: 'ENABLE_ADD_STAFF',
		payload: value
	};
}
