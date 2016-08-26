"use strict";

export var addNewValueToField = (field, value) => {
	return {
		type: 'ADD_FIELD_VALUE',
		field: field,
		value: value
	};
}

export var deleteValueFromField = (field, value) => {
	return {
		type: 'DELETE_FIELD_VALUE',
		field: field,
		value: value
	};
}

export var toggleAddFieldButton = (value) => {
	return {
		type: 'TOGGLE_ADD_FIELD_BTN',
		payload: value
	};
}

export var setSelectedField = (value) => {
	return {
		type: 'SET_FIELD',
		payload: value
	};
}

export var setFieldValues = (field) => {
	return {
		type: 'SET_FIELD_VALUES',
		payload: field
	};
}
