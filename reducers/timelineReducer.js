"use strict";

export var timelineReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_STUDENT_TIMELINE':
			return action.payload;
		default:
			return state;
	}
};