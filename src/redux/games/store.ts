import {IAuthorizationInitState} from "./interfaces";
import {IGameInfo} from "../cart/interfaces";

export const authorizationInitState : IAuthorizationInitState = {
	userAuth: false,
	userLogin: '',
	userPassword: '',
	isAdmin: false
}


export const gameReducerState = {
currentGame: {} as IGameInfo
}
