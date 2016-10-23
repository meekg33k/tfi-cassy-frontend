"use strict";

import * as ErrorReducer from "./errorReducer.js"
import * as EventsReducer from "./eventReducer.js"
import * as FormReducer from "./formReducer.js"
import * as SchoolsReducer from "./schoolReducer.js"
import * as StaffsReducer from "./staffReducer.js"
import * as TimelinesReducer from "./timelineReducer.js"
import * as StudentsReducer from "./studentReducer.js"


/** Error Reducers **/
export var adminErrorReducer = ErrorReducer.adminErrorReducer;
export var loginErrorReducer = ErrorReducer.loginErrorReducer;
export var userErrorReducer = ErrorReducer.userErrorReducer;


/** Event Reducers **/
export var enableAddEventReducer = EventsReducer.enableAddEventReducer;
export var enableEditEventReducer = EventsReducer.enableEditEventReducer;
export var editEventButtonReducer = EventsReducer.editEventButtonReducer;
export var eventReducer = EventsReducer.mainEventReducer;


/** Form Reducers **/
export var addFieldButtonReducer = FormReducer.addFieldButtonReducer;
export var formFieldReducer = FormReducer.formFieldReducer;
export var formFieldValuesReducer = FormReducer.setFieldValuesReducer;
export var problemValuesReducer = FormReducer.setProblemValuesReducer;
export var setSelectedFieldReducer = FormReducer.setSelectedFieldReducer; 
export var setSelectedFieldIDReducer = FormReducer.setSelectedFieldIDReducer; 
export var treatmentConcernValuesReducer = FormReducer.setTreatmentConcernValuesReducer;


/** School Reducers **/
export var enableAddSchoolReducer = SchoolsReducer.enableAddSchoolReducer;
export var selectedSchoolReducer = SchoolsReducer.selectedSchoolReducer;
export var schoolReducer = SchoolsReducer.schoolReducer;


/** Staff Reducers **/
export var enableAddStaffReducer = StaffsReducer.enableAddStaffReducer;
export var staffReducer = StaffsReducer.staffReducer;


/** Student Reducers **/
export var enableAddStudentReducer = StudentsReducer.enableAddStudentReducer;
export var selectedStudentReducer = StudentsReducer.selectedStudentReducer;
export var studentReducer = StudentsReducer.studentReducer;


/** Student-Problem Reducers **/
export var studentProblemsReducer = StudentsReducer.studentProblemsReducer;


/** Treatment Reducer **/
//export var formFieldValuesReducer = FormReducer.setFieldValuesReducer;


/** Timeline Reducer **/
export var timelineReducer = TimelinesReducer.timelineReducer;
