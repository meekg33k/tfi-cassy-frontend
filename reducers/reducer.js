export var searchReducer = (state = '', action) => {
	switch(action.type){
		case 'SET_SEARCH_TEXT': 
			return action.payload;
		default:
			return state;
	}
};


/** Event Reducers **/
export var enableAddEventReducer = (state = false, action) => {
	switch(action.type){
		case 'ENABLE_ADD_EVENT': 
			return action.payload;
		default:
			return state;
	}
};


//Set to true when EditEvent has started
export var enableEditEventReducer = (state = false, action) => {
	switch(action.type){
		case 'ENABLE_EDIT_EVENT': 
			return action.payload;
		default:
			return state;
	}
};


//Set to true when EditEvent has started
export var editEventButtonReducer = (state = false, action) => {
	switch(action.type){
		case 'DISABLE_EDIT_BTN': 
			return action.payload;
		default:
			return state;
	}
};



var defaultEventState = [
	{
		id: 898091,
		name: "Ranswood Event",
		type: "Individual Session",
		school: "Ranswood Elementary",
		other:"",
		description:"A wonderful event",
		date: "03/18/2012",
		students: [
			"Marlon Jameson", "Cut Carr", "Yanzhang Yui"
		]
	}, {
		id: 777118,
		name: "Dopest Event",
		type: "Individual Session",
		school: "Loyola College",
		other: "",
		description:"A wonderful event",
		date: "03/25/2016",
		students: [
			  {
			    "id": 1,
			    "name": "Vinod Ep",
			  },
			  {
			    "id": 2,
			    "name": "Kay Jay"
			  },
			  {
			    "id": 3,
			    "name": "user"
			  }
			]
	},
];


export var eventReducer = (state = defaultEventState, action) => {
	switch(action.type){
		case 'ADD_EVENT': 
			return 	[
				...state,
				action.payload
			];

		case 'DELETE_EVENT': 
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

		case 'EDIT_EVENT':
			var eventId;
			
			for(var i = 0;  i < state.length; i++) {
			    if (state[i].id === action.payload.id) {
			        eventId = i;
			        break;
			    }
			}
			return [
			    ...state.slice(0, eventId),
			    ...state.slice(eventId + 1),
			    {
			    	id: Date.now(),
			    	name: action.payload.name,
					type: action.payload.type,
					school: action.payload.school,
	        		other: action.payload.other,
					description: action.payload.description,
					date: action.payload.date,
	        		students: action.payload.attendingStudents,
				}		
			];

		case 'EXIT_EDIT_EVENT':
			var eventId;

			console.log("Almost Edited Event", action.payload);
			for(var i = 0;  i < state.length; i++) {
			    if (state[i].id === action.payload.id) {
			        eventId = i;
			        break;
			    }
			}
			return [
			    ...state.slice(0, eventId),
			    ...state.slice(eventId + 1),
			    {
			    	id: Date.now(),
			    	name: action.payload.name,
					type: action.payload.type,
					school: action.payload.school,
	        		other: action.payload.other,
					description: action.payload.description,
					date: action.payload.date,
	        		students: action.payload.attendingStudents,
				}		
			];
		default:
			return state;
	}
};


/** Staff Reducers **/
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
					manager: "Christy Hayes"

				}, {
					id: 456,
					firstName: "Eve",
					lastName: "Jackson",
					role: "Administrator",
					manager: "Christy Hayes"

				}, {
					id: 789,
					firstName: "John",
					lastName: "Doe",
					role: "Program Manager",
					manager: "Eve Jackson"

				},
			];


export var staffReducer = (state = staffState, action) => {
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
			    	manager: action.payload.manager
			    }			
			];

		default:
			return state;
	}
};	