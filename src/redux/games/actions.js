import {SET_CURRENT_GAME, SET_USER_LOGGED, SET_USER_LOGIN, SET_USER_PASSWORD} from "./actionsTypes";

export const setCurrentGame = payload => {
	return {
		type: SET_CURRENT_GAME,
		payload
	};
};

export const authUser = payload => {
	return {
		type: SET_USER_LOGGED,
		payload
	};
};

export const userLoginAction = payload => {
	return {
		type: SET_USER_LOGIN,
		payload
	};
};

export const userPass = payload => {
	return {
		type: SET_USER_PASSWORD,
		payload
	};
};
