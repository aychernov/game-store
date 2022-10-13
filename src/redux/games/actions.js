import {SET_CURRENT_GAME} from "./actionsTypes";

export const setCurrentGame = payload => {
	return {
		type: SET_CURRENT_GAME,
		payload
	};
};

