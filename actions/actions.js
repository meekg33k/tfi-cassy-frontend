"use strict";

import * as ErrorActions from "./errorActions.js"
import * as EventActions from "./eventActions.js"
import * as SchoolActions from "./schoolActions.js"
import * as StaffActions from "./staffActions.js"
//import * as StudentActions from "./studentActions.js"


/** Error Actions **/
export var setAdminError = ErrorActions.setAdminError;
export var setLoginError = ErrorActions.setLoginError;
export var setUserError = ErrorActions.setUserError;


/** Event Actions **/
export var addEvent = EventActions.addEvent;
export var deleteEvent = EventActions.deleteEvent;
export var disableEditButton = EventActions.disableEditButton;
export var exitEditEvent = EventActions.exitEditEvent;
export var saveEditedEvent = EventActions.saveEditedEvent;
export var enableAddEvent = EventActions.enableAddEvent;
export var enableEditEvent = EventActions.enableEditEvent;


/** Form Actions **/
export var addNewValueToField = FormActions.addNewValueToField;
export var deleteValueFromField = FormActions.deleteValueFromField;
export var toggleAddFieldButton = FormActions.toggleAddFieldButton;
export var setSelectedField = FormActions.setSelectedField;
export var setFieldValues = FormActions.setFieldValues;


/** School Actions **/
export var addSchool = SchoolActions.addSchool;
export var deleteSchool = SchoolActions.deleteSchool;
export var editSchool = SchoolActions.editSchool;
export var enableAddSchool = SchoolActions.enableAddSchool;


/** Staff Actions **/
export var addStaff = StaffActions.addStaff;
export var deleteStaff = StaffActions.deleteStaff;
export var editStaff = StaffActions.editStaff;
export var enableAddStaff = StaffActions.enableAddStaff;


/** TimeLine Actions **/
export var addToTimeLine = (timelineObject) => {
	return {
		type: 'ADD_TO_TIMELINE',
		payload: timelineObject
	};
}
