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


var defaultFormState = [
	{
		id: 123455,
		name: "--None--",
		fieldValues: []
	},
	{
		id: 898091,
		name: "Assessment Type",
		fieldValues: []
	}, {
		id: 189801,
		name: "Event Type",
		fieldValues: []
	}, {
		id: 777118,
		name: "Grade",
		fieldValues: [
			  {
			    "id": 1,
			    "name": "1st",
			  },
			  {
			    "id": 2,
			    "name": "2nd"
			  },
			  {
			    "id": 3,
			    "name": "3rd"
			  },
				{
					"id": 4,
					"name": "4th"
				},
				{
					"id": 5,
					"name": "12th"
				}
			]
	},
	{
		id: 442219,
		name: "Ethnicity",
		fieldValues: [
			  {
			    "id": 1,
			    "name": "Caucasian",
			  },
			  {
			    "id": 2,
			    "name": "Hispanic/Latino"
			  },
			  {
			    "id": 3,
			    "name": "Asian"
			  },
				{
					"id": 4,
					"name": "African American"
				}
			]
	},
	{
		id: 798981,
		name: "Presenting Issue",
		fieldValues: [
			  {
			    "id": 1,
			    "name": "Academic Stress",
			  },
			  {
			    "id": 2,
			    "name": "Cyber Issues"
			  },
			  {
			    "id": 3,
			    "name": "Domestic Violence"
			  },
				{
					"id": 4,
					"name": "Impulsivity"
				}
			]
	},
	{
		id: 99988,
		name: "Sex",
		fieldValues: [
				{
					"id": 1,
					"name": "Male",
				},
				{
					"id": 2,
					"name": "Female"
				}
			]
	}
];



/** Form Reducers **/
export var addFieldButtonReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_ADD_FIELD_BTN':
			return action.payload;
		default:
			return state;
	}
};

export var formFieldReducer = (state = defaultFormState, action) => {
	switch(action.type){
		case 'ADD_FIELD_VALUE':
			var fieldId;
			var mutatedField;

			for(var i = 0;  i < state.length; i++) {
			    if (state[i].name === action.field) {
							mutatedField = state[i];
							mutatedField.fieldValues.push({
								id: Date.now(),
								name: action.value
							})
			        fieldId = i;
			        break;
			    }
			}

			return [
			    ...state.slice(0, fieldId),
			    ...state.slice(fieldId + 1),
			    mutatedField
			];

		case 'DELETE_FIELD_VALUE':
			console.log("Reducer: Value to be deleted", action.value);
			console.log("Reducer: Field object", action.field);

			var fieldName;
			var victimFieldId;
			var mutatedField;
			var victimValueId;

			for(var i = 0;  i < state.length; i++) {
				if (state[i].name === action.field) {
						fieldName = state[i].name;
						mutatedField = state[i];
						for (var j = 0; j < mutatedField.fieldValues.length; j++){
							if (mutatedField.fieldValues[0].name == action.value){
									victimValueId = j;
									mutatedField.splice(victimValueId, 1);
							}
						}
						victimFieldId = i;
				}
				break;
			}

			return [
				    ...state.slice(0, victimFieldId),
				    ...state.slice(victimFieldId + 1),
						mutatedField
				];

		case 'EDIT_FIELD_VALUE':
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
		default:
			return state;
	}
};

export var setSelectedFieldReducer = (state = {}, action) => {
	switch(action.type){
		case 'SET_FIELD':
			return action.payload;
		default:
			return state;
	}
};

export var setFieldValuesReducer = (state = [], action) => {
	switch(action.type){
		case 'SET_FIELD_VALUES':
			return action.payload;
		default:
			return state;
	}
};



/** School Reducers **/
export var enableAddSchoolReducer = (state = false, action) => {
	switch(action.type){
		case 'ENABLE_ADD_SCHOOL':
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

export var schoolReducer = (state = schoolState, action) => {
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
