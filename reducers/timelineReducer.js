"use strict";

var defaultTimelineState = [
	{
		id: 123455,
		date: "12/12/15",
		activity: "Individual Session",
		description: "",
		comments: "Student is identified to be having anxiety issues"
	},
	{
		id: 398091,
		date: "03/08/16",
		activity: "New Issue",
		description: "Academic Stress",
		comments: "Student is not able to cope with homework without assistance"
	},
	{
		id: 551234,
		date: "07/21/16",
		activity: "Group Session",
		description: "Session with five other students",
		comments: "Student health is improving"
	}
];

export var timelineReducer = (state = defaultTimelineState, action) => {
	switch(action.type){
		case 'ADD_TO_TIMELINE':
			return 	[
				...state,
				action.payload
			];
		default:
			return state;
	}
};