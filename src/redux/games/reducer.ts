import {authorizationInitState, gameReducerState} from "./store";
import {AuthorizationReducerTypes, AuthReducerActions, GameReducerActions, GameReducerTypes} from "./actionsTypes";
import {IAuthorizationInitState} from "./interfaces";


export const GameReducer = (state = gameReducerState, action: GameReducerActions) => {
	switch (action.type) {
		case GameReducerTypes.SET_CURRENT_GAME:
			return {...state, currentGame: action.payload};
		default:
			return {...state}
	}
};


 export const AuthorizationReducer  = (state = authorizationInitState, action: AuthReducerActions) :IAuthorizationInitState => {
	switch(action.type){
		case AuthorizationReducerTypes.SET_ADMIN_LOGGED:
			return {...state, isAdmin: action.payload}
		case AuthorizationReducerTypes.SET_USER_LOGGED:
			return {...state, userAuth: action.payload}
		case AuthorizationReducerTypes.SET_USER_LOGIN:
			return { ...state, userLogin: action.payload}
		case AuthorizationReducerTypes.SET_USER_PASSWORD:
			return {...state, userPassword: action.payload}
		default:
			return {...state}
	}
}


