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