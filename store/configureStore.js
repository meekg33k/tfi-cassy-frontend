import { applyMiddleware, createStore, combineReducers } from "redux";
import redux from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducer from "../reducers/reducer"

export var configure = () => {

	//const middleware = applyMiddleware(thunk, logger());

	var appReducer = combineReducers({
		addEventState: reducer.enableAddEventReducer,
		addFieldButtonState: reducer.addFieldButtonReducer,
		addSchoolState: reducer.enableAddSchoolReducer,
		addStaffState: reducer.enableAddStaffReducer,
		adminError: reducer.adminErrorReducer,
		editButtonState: reducer.editButtonEventReducer,
		editEventState: reducer.enableEditEventReducer,
		events: reducer.eventReducer,
		formFieldValues:reducer.setFieldValuesReducer,
		formFields: reducer.formFieldReducer,
		loginError: reducer.loginErrorReducer,
		searchText: reducer.searchReducer,
		selectedField: reducer.setSelectedFieldReducer,
		schools: reducer.schoolReducer,
		staff: reducer.staffReducer,
		timelineState: reducer.timelineReducer
	});

	var store = createStore(appReducer,applyMiddleware(thunk));

	return store;
}
