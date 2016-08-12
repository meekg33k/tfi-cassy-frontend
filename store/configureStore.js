import { applyMiddleware, createStore, combineReducers } from "redux";
import redux from "redux";
import axios from "axios";
import thunk from "redux-thunk";

import * as reducer from "../reducers/reducer"

export var configure = () => {
	var appReducer = combineReducers({
		addEventState: reducer.enableAddEventReducer,
		//addStudentState: reducer.enableAddStudentReducer,
		addStaffState: reducer.enableAddStaffReducer,
		editButtonState: reducer.editButtonEventReducer,
		editEventState: reducer.enableEditEventReducer,
		events: reducer.eventReducer,
		searchText: reducer.searchReducer,
		staff: reducer.staffReducer
	});

	var store = createStore(appReducer);

	return store;
}