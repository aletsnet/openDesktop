import {
	CLEAR_SESSION,
	SET_SESSION_DATA
} from './SessionActions';

const initialState = {
	id: null,
	user: [],
	date: null
};

export default function SessionReducer (state = initialState, action) {
	switch (action.type) {
		case SET_SESSION_DATA:
			return {
				...state,
				...action.sessionData
			}
		case CLEAR_SESSION:
			return {
				...initialState
			}
		default:
			return state;
	}
};