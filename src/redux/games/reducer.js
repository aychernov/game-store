import {SET_CURRENT_GAME} from "./actionsTypes";


const initialState = {
	currentGame: null
}

const GameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_GAME:
			return {
				...state,
				currentGame: state.currentGame = action.payload
			};
		default:
			return state;
	}
};
export {GameReducer};
