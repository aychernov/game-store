import {initialState} from "./store";
import {ShoppingReducerAction, ShoppingReducerTypes} from "./actionsTypes";
import {IInitialState} from "./interfaces";


const ShoppingReducer = (state = initialState, action: ShoppingReducerAction): IInitialState => {
	switch (action.type) {
		case ShoppingReducerTypes.ADD_TO_CART:
			return {...state, busket: action.payload};
		case ShoppingReducerTypes.REMOVE_FROM_CART:
			return {...state, busket: [...state.busket.filter(game => game.id !== action.payload.id)], priceBusket: state.priceBusket - action.payload.price};
		case ShoppingReducerTypes.INCREASE_BUCKET_PRICE:
			return {...state, priceBusket: state.priceBusket + action.payload}
		case ShoppingReducerTypes.CLEAR_CART:
			return {...state, busket: [], priceBusket: 0}
		default:
			return state;
	}
};

export {ShoppingReducer};
