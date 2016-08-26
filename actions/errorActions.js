"use strict";

export var setAdminError = (error) => {
	return {
		type: 'SET_ADMIN_ERROR',
		payload: error
	};
}

export var setLoginError = (errorMessage) => {
	return {
		type: 'SET_LOGIN_ERROR',
		payload: errorMessage
	};
}

export var setUserError = (errorMessage) => {
	return {
		type: 'SET_USER_ERROR',
		payload: errorMessage
	};
}
