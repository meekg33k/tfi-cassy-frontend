"use strict";

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
	},
	{
		id: 551234,
		name: "District",
		fieldValues: []
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

var formState = [
	{
		field_name_id: 8989819898989898,
		field_name: "--None--"
	},
];



//export var formFieldReducer = (state = defaultFormState, action) => {
export var formFieldReducer = (state = formState, action) => {
	switch(action.type){

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

		case 'SET_FORMFIELDS_LIST':
			var previousState = state;
			var newState = action.payload;
			newState.push(previousState[0]);

			console.log("Form Fields from server", newState);
			//return action.payload;
			return newState;

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

export var setSelectedFieldIDReducer = (state = "", action) => {
	switch(action.type){
		case 'SET_FIELD_ID':
			return action.payload;
		default:
			return state;
	}
};

export var setFieldValuesReducer = (state = [], action) => {
	switch(action.type){

		case 'ADD_FIELD_VALUE':
			return 	[
				...state,
				action.payload
			];

		case 'SET_FIELD_VALUES':
			return action.payload;
			
		default:
			return state;
	}
};


export var setProblemValuesReducer = (state = [], action) => {
	switch(action.type){

		case 'SET_PROBLEM_VALUES':
			if (state.length > 0){
				return state;
			}
			else{
				return action.payload;
			}
			
		default:
			return state;
	}
};

export var setTreatmentConcernValuesReducer = (state = [], action) => {
	switch(action.type){

		case 'SET_TREATMENT_VALUES':
			if (state.length > 0){
				return state;
			}
			else{
				return action.payload;
			}
			
		default:
			return state;
	}
};

