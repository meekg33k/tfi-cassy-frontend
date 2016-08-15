import { applyMiddleware, createStore, combineReducers } from "redux";
import redux from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducer from "../reducers/reducer"

export var configure = () => {

	const middleware = applyMiddleware(logger());

	var appReducer = combineReducers({
		addEventState: reducer.enableAddEventReducer,
		addFieldButtonState: reducer.addFieldButtonReducer,
		addSchoolState: reducer.enableAddSchoolReducer,
		addStaffState: reducer.enableAddStaffReducer,
		editButtonState: reducer.editButtonEventReducer,
		editEventState: reducer.enableEditEventReducer,
		formFieldValues:reducer.setFieldValuesReducer,
		formFields: reducer.formFieldReducer,
		events: reducer.eventReducer,
		searchText: reducer.searchReducer,
		selectedFieldObject: reducer.setSelectedFieldReducer,
		schools: reducer.schoolReducer,
		staff: reducer.staffReducer
	});

	var store = createStore(appReducer);

	return store;
}
