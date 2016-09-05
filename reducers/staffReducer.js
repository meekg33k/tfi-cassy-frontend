"use strict";

export var enableAddStaffReducer = (state = false, action) => {
	switch(action.type){
		case 'ENABLE_ADD_STAFF':
			return action.payload;
		default:
			return state;
	}
};


var staffState = [
				{
					id: 123,
					firstName: "Christy",
					lastName: "Hayes",
					role: "Executive",
					email: "christy@cassybayarea.org"

				}, {
					id: 456,
					firstName: "Eve",
					lastName: "Jackson",
					role: "Administrator",
					email: "evejackson@gmail.com"

				}, {
					id: 789,
					firstName: "John",
					lastName: "Doe",
					role: "Program Manager",
					email: "jdoe@live.com"

				},
			];


export var staffReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_STAFF':
			console.log(action.payload);
			return 	[
				...state,
				action.payload
			];

		case 'DELETE_STAFF':
			var victimId;

			for(var i = 0;  i < state.length; i++) {
			    if (state[i].id === action.payload.id) {
			        victimId = i;
			        break;
			    }
			}
			return [
			    ...state.slice(0, victimId),
			    ...state.slice(victimId + 1)
			];

		case 'EDIT_STAFF':
			var staffId;

			console.log("Edited Staff", action.payload);
			for(var i = 0;  i < state.length; i++) {
			    if (state[i].id === action.payload.id) {
			        staffId = i;
			        break;
			    }
			}
			return [
			    ...state.slice(0, staffId),
			    ...state.slice(staffId + 1),
			    {
			    	id: Date.now(),
			    	firstName: action.payload.firstName,
			    	lastName: action.payload.lastName,
			    	role: action.payload.role,
			    	email: action.payload.email
			    }
			];

		case 'SET_STAFF_LIST':
			return action.payload;

		default:
			return state;
	}
};


