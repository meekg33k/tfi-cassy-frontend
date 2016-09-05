"use strict";

import * as ErrorActions from "./errorActions.js"
import * as EventActions from "./eventActions.js"
import * as FormActions from "./formActions.js"
import * as SchoolActions from "./schoolActions.js"
import * as StaffActions from "./staffActions.js"
import * as StudentActions from "./studentActions.js"


/** Error Actions **/
export var setAdminError = ErrorActions.setAdminError;
export var setLoginError = ErrorActions.setLoginError;
export var setUserError = ErrorActions.setUserError;


/** Event Actions **/
export var asyncAddEvent = EventActions.asyncAddEvent;
export var asyncDeleteEvent = EventActions.asyncDeletevent;
export var asyncEditEvent = EventActions.asyncEditEvent;
export var asyncFetchEvents = EventActions.asyncFetchEvents;
export var addEvent = EventActions.addEvent;
export var deleteEvent = EventActions.deleteEvent;
export var disableEditButton = EventActions.disableEditButton;
export var exitEditEvent = EventActions.exitEditEvent;
export var saveEditedEvent = EventActions.saveEditedEvent;
export var enableAddEvent = EventActions.enableAddEvent;
export var enableEditEvent = EventActions.enableEditEvent;


/** Form Actions **/
export var addNewValueToField = FormActions.addNewValueToField;
export var asyncFetchFormFields = FormActions.asyncFetchFormFields;
export var deleteValueFromField = FormActions.deleteValueFromField;
export var toggleAddFieldButton = FormActions.toggleAddFieldButton;
export var setSelectedField = FormActions.setSelectedField;
export var setFieldValues = FormActions.setFieldValues;


/** School Actions **/
export var asyncAddSchool = SchoolActions.asyncAddSchool;
export var asyncDeleteSchool = SchoolActions.asyncDeleteSchool;
export var asyncEditSchool = SchoolActions.asyncEditSchool;
export var asyncFetchSchoolById = SchoolActions.asyncFetchSchoolById;
export var asyncFetchSchools = SchoolActions.asyncFetchSchools;
export var addSchool = SchoolActions.addSchool;
export var deleteSchool = SchoolActions.deleteSchool;
export var editSchool = SchoolActions.editSchool;
export var enableAddSchool = SchoolActions.enableAddSchool;


/** Staff Actions **/
export var asyncAddStaff = StaffActions.asyncAddStaff;
export var asyncDeleteStaff = StaffActions.asyncDeleteStaff;
export var asyncEditStaff = StaffActions.asyncEditStaff;
export var asyncFetchStaff = StaffActions.asyncFetchStaff;
export var addStaff = StaffActions.addStaff;
export var deleteStaff = StaffActions.deleteStaff;
export var editStaff = StaffActions.editStaff;
export var enableAddStaff = StaffActions.enableAddStaff;


/** Student Actions **/
export var asyncAddStudent = StudentActions.asyncAddStudent;
export var asyncDeleteStudent = StudentActions.asyncDeleteStudent;
export var asyncEditStudent = StudentActions.asyncEditStudent;
export var asyncFetchStudents = StudentActions.asyncFetchStudents;
export var enableAddStudent = StudentActions.enableAddStudent;


/** TimeLine Actions **/
export var addToTimeLine = (timelineObject) => {
	return {
		type: 'ADD_TO_TIMELINE',
		payload: timelineObject
	};
}
