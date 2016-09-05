"use strict";

export var enableAddStudentReducer = (state = false, action) => {
	switch(action.type){
		case 'ENABLE_ADD_STUDENT':
			return action.payload;
		default:
			return state;
	}
};


export var selectedStudentReducer = (state = {}, action) => {
	switch(action.type){
		case 'SET_STUDENT':
			return action.payload;
		default:
			return state;
	}
};


export var studentReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_STUDENT_LIST':
			return action.payload;

		default:
			return state;
	}
};