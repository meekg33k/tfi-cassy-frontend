"use strict";

import ApiRequester from "../apis/ApiRequester.js";


/** Async Server Actions **/

export var asyncAddValueToField = (fieldID, fieldValue) => {
	return (dispatch, getState) => {

		ApiRequester.addFieldValue(fieldID, fieldValue).then(function(res){
			dispatch(asyncFetchFormFieldValues(fieldID));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchFormFields = () => {
	return (dispatch, getState) => {

		ApiRequester.getFormFieldNames().then(function(res){
			dispatch(setFormFields(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchFormFieldValues = (fieldID) => {
	var field_id = fieldID;
	return (dispatch, getState) => {

		ApiRequester.getFormFieldValues(field_id).then(function(res){
			dispatch(setFormFieldValues(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncFetchFormFieldValuesByName = (fieldName) => {
	var field_name = fieldName;
	return (dispatch, getState) => {

		ApiRequester.getFormFieldValuesByName(field_name).then(function(res){
			dispatch(setFormFieldValues(res));
		}, function(err){
			console.log(err);
		});

	};
}

export var asyncDeleteFieldValue = (fieldValueID, fieldID) => {
	return (dispatch, getState) => {

		ApiRequester.deleteFieldValue(fieldValueID).then(function(res){
			dispatch(asyncFetchFormFieldValues(fieldID));

		}, function(err){
			console.log(err);
		});

	};
}

export var asyncEditFieldValue = (fieldValueID, fieldID, fieldValue) => {
	return (dispatch, getState) => {

		ApiRequester.editFieldValue(fieldValueID, fieldID, fieldValue).then(function(res){
			alert("Changes saved successfully");
			dispatch(asyncFetchFormFieldValues(fieldID));

		}, function(err){
			console.log(err);
		});

	};
}



/** User Interface Actions **/

export var addNewValueToField = (fieldId, value) => {
	return {
		type: 'ADD_FIELD_VALUE',
		fieldId: fieldId,
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

export var setFormFieldValues = (fieldValues) => {
	return {
		type: 'SET_FIELD_VALUES',
		payload: fieldValues
	};
}

export var setSelectedField = (value) => {
	return {
		type: 'SET_FIELD',
		payload: value
	};
}

export var setSelectedFieldID = (value) => {
	return {
		type: 'SET_FIELD_ID',
		payload: value
	};
}

export var toggleAddFieldButton = (value) => {
	return {
		type: 'TOGGLE_ADD_FIELD_BTN',
		payload: value
	};
}
