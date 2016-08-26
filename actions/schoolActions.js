"use strict";

export var addSchool = (newSchool) => {
	return {
		type: 'ADD_SCHOOL',
		payload: newSchool
	};
}

export var deleteSchool = (victimSchool) => {
	return {
		type: 'DELETE_SCHOOL',
		payload: victimSchool
	};
}

export var editSchool = (school) => {
	return {
		type: 'EDIT_SCHOOL',
		payload: school
	};
}

export var enableAddSchool = (value) => {
	return {
		type: 'ENABLE_ADD_SCHOOL',
		payload: value
	};
}
