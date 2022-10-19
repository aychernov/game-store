import {AuthorizationReducerTypes, GameReducerTypes} from "./actionsTypes";
import {IGameInfo} from "../cart/interfaces";

export const setCurrentGame = (payload: IGameInfo) => {
	return {
		type: GameReducerTypes.SET_CURRENT_GAME,
		payload
	};
};

export const authUser = (payload: boolean) => {
	return {
		type: AuthorizationReducerTypes.SET_USER_LOGGED,
		payload
	};
};

export const authAdmin = (payload: boolean) => {
	return {
		type: AuthorizationReducerTypes.SET_ADMIN_LOGGED,
		payload
	};
};

export const userLoginAction = (payload: string) => {
	return {
		type: AuthorizationReducerTypes.SET_USER_LOGIN,
		payload
	};
};

export const userPass = (payload: string) => {
	return {
		type: AuthorizationReducerTypes.SET_USER_PASSWORD,
		payload
	};
};
