import {IGameInfo} from "../cart/interfaces";

export enum AuthorizationReducerTypes{
	SET_ADMIN_LOGGED = 'SET_ADMIN_LOGGED',
	SET_USER_LOGGED = 'SET_USER_LOGGED',
	SET_USER_LOGIN = 'SET_USER_LOGIN',
	SET_USER_PASSWORD = 'SET_USER_PASSWORD'
}

export enum GameReducerTypes{
	SET_CURRENT_GAME = 'SET_CURRENT_GAME'
}
interface  SET_CURRENT_GAME{
	type: GameReducerTypes.SET_CURRENT_GAME,
	payload: IGameInfo
}

interface  SET_ADMIN_LOGGED{
	type: AuthorizationReducerTypes.SET_ADMIN_LOGGED,
	payload: boolean
}
interface  SET_USER_LOGGED{
	type: AuthorizationReducerTypes.SET_USER_LOGGED,
	payload: boolean
}
interface  SET_USER_LOGIN{
	type: AuthorizationReducerTypes.SET_USER_LOGIN,
	payload: string
}
interface  SET_USER_PASSWORD{
	type: AuthorizationReducerTypes.SET_USER_PASSWORD,
	payload: string
}

export type AuthReducerActions = SET_ADMIN_LOGGED | SET_USER_LOGGED | SET_USER_LOGIN | SET_USER_PASSWORD
export type GameReducerActions = SET_CURRENT_GAME
