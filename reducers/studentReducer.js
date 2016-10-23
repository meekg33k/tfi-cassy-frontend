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
			if (action.payload)
				return action.payload;
			else
				return state;
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


export var studentProblemsReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_PROBLEM_LIST':
			console.log("Student problemss", action.payload);
			return action.payload;

		default:
			return state;
	}
};