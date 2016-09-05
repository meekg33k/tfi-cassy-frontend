"use strict";

export var enableAddSchoolReducer = (state = false, action) => {
	switch(action.type){
		case 'ENABLE_ADD_SCHOOL':
			return action.payload;
		default:
			return state;
	}
};

export var selectedSchoolReducer = (state = {}, action) => {
	switch(action.type){
		case 'SET_SCHOOL':
			return action.payload;
		default:
			return state;
	}
};

var schoolState = [
				{
					id: 123,
					name: "Ranswood Elementary",
					address: "123 Phelan Road, San Jose CA 95122",
					principal: "Laura Fookes",
					contact: "Laura Fookes",
					contactEmail: "laura@ranswood.edu",
					district: "Milpitas",
					siteCoordinator: "Eve Jackson"
				}, {
					id: 456,
					name: "Durmoint College",
					address: "1240 Gibbs Road, Palo Alto CA 90123",
					principal: "William Jackson",
					contact: "Bill Rolland",
					contactEmail: "brolland@durmoint.edu",
					district: "Palo Alto",
					siteCoordinator: "John Doe"

				}, {
					id: 789,
					name: "Buena High School",
					address: "89B Jinal Road, Cupertino CA 95225",
					principal: "Vinod Piyush",
					contact: "Sonia Kimberly",
					contactEmail: "sonia@buena.edu",
					district: "Cupertino",
					siteCoordinator: "Adam Johnson"
				},
			];

export var schoolReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_SCHOOL':
			console.log(action.payload);
			return 	[
				...state,
				action.payload
			];

		case 'DELETE_SCHOOL':
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

		case 'EDIT_SCHOOL':
			var schoolId;

			console.log("Edited School", action.payload);
			for(var i = 0;  i < state.length; i++) {
			    if (state[i].id === action.payload.id) {
			        schoolId = i;
			        break;
			    }
			}
			return [
			    ...state.slice(0, schoolId),
			    ...state.slice(schoolId + 1),
			    {
			    	id: Date.now(),
			    	name: action.payload.name,
			    	address: action.payload.address,
			    	principal: action.payload.principal,
			    	contact: action.payload.contact,
			    	contactEmail: action.payload.contactEmail,
			    	district: action.payload.district,
			    	siteCoordinator: action.payload.siteCoordinator
			    }
			];

		case 'SET_SCHOOL_LIST':
			return action.payload;

		default:
			return state;
	}
};