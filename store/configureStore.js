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
		addStudentState: reducer.enableAddStudentReducer,
		addStaffState: reducer.enableAddStaffReducer,
		adminError: reducer.adminErrorReducer,
		editButtonState: reducer.editButtonEventReducer,
		editEventState: reducer.enableEditEventReducer,
		events: reducer.eventReducer,
		formFields: reducer.formFieldReducer,
		formFieldValues:reducer.formFieldValuesReducer,
		loginError: reducer.loginErrorReducer,
		problemFieldValues: reducer.problemValuesReducer,
		searchText: reducer.searchReducer,
		selectedField: reducer.setSelectedFieldReducer,
		selectedFieldID: reducer.setSelectedFieldIDReducer,
		selectedSchool: reducer.selectedSchoolReducer,
		selectedStudent: reducer.selectedStudentReducer,
		schools: reducer.schoolReducer,
		students: reducer.studentReducer,
		studentProblems: reducer.studentProblemsReducer,
		staff: reducer.staffReducer,
		timelineState: reducer.timelineReducer,
		treatmentConcernValues: reducer.treatmentConcernValuesReducer
	});

	var store = createStore(appReducer,applyMiddleware(thunk));

	return store;
}
