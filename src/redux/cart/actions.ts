import {ShoppingReducerTypes} from "./actionsTypes";
import {IGameInfo} from "./interfaces";

export const addToCart = (payload: IGameInfo) => {
	return {
		type: ShoppingReducerTypes.ADD_TO_CART,
		payload
	};
};
export const removeFromCart = (payload: IGameInfo) => {
	return {
		type: ShoppingReducerTypes.REMOVE_FROM_CART,
		payload
	};
};
export const increaseBucketPrice = (payload: [] | number) => {
	return {
		type: ShoppingReducerTypes.INCREASE_BUCKET_PRICE,
		payload
	};
}
export const clearCart = () => {
	return {
		type: ShoppingReducerTypes.CLEAR_CART,
	};
}

