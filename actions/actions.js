"use strict";

import * as ErrorActions from "./errorActions.js"
import * as EventActions from "./eventActions.js"
import * as FormActions from "./formActions.js"
import * as SchoolActions from "./schoolActions.js"
import * as StaffActions from "./staffActions.js"
import * as StudentActions from "./studentActions.js"
import * as ProblemActions from "./problemActions.js"


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
export var asyncAddValueToField = FormActions.asyncAddValueToField;
export var asyncDeleteFieldValue = FormActions.asyncDeleteFieldValue;
export var asyncEditFieldValue = FormActions.asyncEditFieldValue;
export var asyncFetchFormFields = FormActions.asyncFetchFormFields;
export var asyncFetchFormFieldValues = FormActions.asyncFetchFormFieldValues;
export var asyncFetchFormFieldValuesByName = FormActions.asyncFetchFormFieldValuesByName;
export var deleteValueFromField = FormActions.deleteValueFromField;
export var toggleAddFieldButton = FormActions.toggleAddFieldButton;
export var setSelectedField = FormActions.setSelectedField;
export var setSelectedFieldID = FormActions.setSelectedFieldID;
export var setFieldValues = FormActions.setFieldValues;


/** Form-Problem Actions **/
export var asyncFetchPresentingIssueFormValues = FormActions.asyncFetchPresentingIssueFormValues;
export var asyncFetchTreatmentConcernFormValues = FormActions.asyncFetchTreatmentConcernFormValues;


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


/** Staff-Student Actions **/
export var asyncFetchStudentsByUser = StudentActions.asyncFetchStudentsByStaff;


/** Student Actions **/
export var asyncAddStudent = StudentActions.asyncAddStudent;
export var asyncDeleteStudent = StudentActions.asyncDeleteStudent;
export var asyncEditStudent = StudentActions.asyncEditStudent;
export var asyncFetchStudentById = StudentActions.asyncFetchStudentById;
export var asyncFetchStudents = StudentActions.asyncFetchStudents;
export var enableAddStudent = StudentActions.enableAddStudent;


/** Student-Problem Actions **/
export var asyncAddStudentProblem = ProblemActions.asyncAddStudentProblem;
export var asyncFetchStudentProblems = ProblemActions.asyncFetchStudentProblems;
export var asyncUpdateStudentProblem = ProblemActions.asyncUpdateStudentProblem;


/** TimeLine Actions **/
export var addToTimeLine = (timelineObject) => {
	return {
		type: 'ADD_TO_TIMELINE',
		payload: timelineObject
	};
}
