import {IGameInfo} from "../cart/interfaces";

export interface IAuthorizationInitState{
	userAuth: boolean,
	userLogin: string,
	userPassword: string,
	isAdmin: boolean
}


export interface IGameReducerState{
	currentGame: IGameInfo
}




