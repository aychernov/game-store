import {SET_CURRENT_GAME, SET_USER_LOGGED, SET_USER_LOGIN, SET_USER_PASSWORD} from "./actionsTypes";


const gameReducerState = {
	currentGame: null,
}


const authorizationInitState = {
	userAuth: false,
	userLogin: '',
	userPassword: '',
}


export const GameReducer = (state = gameReducerState, action) => {
	switch (action.type) {
		case SET_CURRENT_GAME:
			return {
				...state,
				currentGame: state.currentGame = action.payload
			};
		default:
			return {...state}
	}
};

 export const AuthorizationReducer  = (state = authorizationInitState,action) => {
	switch(action.type){
		case SET_USER_LOGGED:
			return {...state, userAuth: action.payload}
		case SET_USER_LOGIN:
			return { ...state, userLogin: action.payload}
		case SET_USER_PASSWORD:
			return {...state, userPassword: action.payload}
		default:
			return {...state}
	}
}


