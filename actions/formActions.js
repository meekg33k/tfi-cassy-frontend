"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncFetchFormFields = () => {
	return (dispatch, getState) => {

		ApiRequester.getFormFieldNames().then(function(res){
			console.log("Form Fields in Form Actions", res);
			dispatch(setFormFields(res));
		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/

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

export var setFormFields = (value) => {
	return {
		type: 'SET_FORMFIELDS_LIST',
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

export var toggleAddFieldButton = (value) => {
	return {
		type: 'TOGGLE_ADD_FIELD_BTN',
		payload: value
	};
}
