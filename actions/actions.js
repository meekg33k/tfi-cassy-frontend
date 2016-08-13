/** Search Actions **/

export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		payload: searchText
	};
}

export var setSearchEventString = (searchString) => {
	return {
		type: 'SET_SEARCH_EVENT',
		payload: searchString
	};
}



/** Event Actions **/

export var addEvent = (event) => {
	return {
		type: 'ADD_EVENT',
		payload: event
	};
}

export var deleteEvent = (victimEvent) => {
	return {
		type: 'DELETE_EVENT',
		payload: victimEvent
	};
}

export var disableEditButton = (value) => {
	return {
		type: 'DISABLE_EDIT_BTN',
		payload: value
	};
}

export var exitEditEvent = (notEditedEvent) => {
	return {
		type: 'EXIT_EDIT_EVENT',
		payload: notEditedEvent
	};
}

export var saveEditedEvent = (editedEvent) => {
	return {
		type: 'EDIT_EVENT',
		payload: editedEvent
	};
}

export var enableAddEvent = (value) => {
	return {
		type: 'ENABLE_ADD_EVENT',
		payload: value
	};
}

export var enableEditEvent = (value) => {
	return {
		type: 'ENABLE_EDIT_EVENT',
		payload: value
	};
}


/** Form Actions **/

export var setSelectField = (value) => {
	return {
		type: 'SET_FIELD',
		payload: value
	};
}


/** School Actions **/

export var addSchool = (newSchool) => {
	return {
		type: 'ADD_SCHOOL',
		payload: newSchool
	};
}

export var deleteSchool = (victimSchool) => {
	return {
		type: 'DELETE_SCHOOL',
		payload: victimSchool
	};
}

export var editSchool = (school) => {
	return {
		type: 'EDIT_SCHOOL',
		payload: school
	};
}

export var enableAddSchool = (value) => {
	return {
		type: 'ENABLE_ADD_SCHOOL',
		payload: value
	};
}




/** Staff Actions **/

export var addStaff = (newStaff) => {
	return {
		type: 'ADD_STAFF',
		payload: newStaff
	};
}

export var deleteStaff = (victimStaff) => {
	return {
		type: 'DELETE_STAFF',
		payload: victimStaff
	};
}

export var editStaff = (staff) => {
	return {
		type: 'EDIT_STAFF',
		payload: staff
	};
}

export var enableAddStaff = (value) => {
	return {
		type: 'ENABLE_ADD_STAFF',
		payload: value
	};
}
