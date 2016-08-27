"use strict";

export var adminErrorReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_ADMIN_ERROR':
			return action.payload;
		default:
			return state;
	}
};


export var loginErrorReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_LOGIN_ERROR':
			return action.payload;
		default:
			return state;
	}
};

export var userErrorReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_USER_ERROR':
			return action.payload;
		default:
			return state;
	}
};