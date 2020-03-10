export const CLEAR_SESSION = 'CLEAR_SESSION';
export const SET_SESSION_DATA = 'SET_SESSION_DATA';

export const setSessionData = sessionData => ({
	type: SET_SESSION_DATA,
	sessionData
});

export const clearSession = () => ({
	type: CLEAR_SESSION
});