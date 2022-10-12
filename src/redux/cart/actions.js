import {ADD_TO_CART, INCREASE_BUCKET_PRICE, REMOVE_FROM_CART} from "./actionsTypes";

export const addToCart = payload => {
	return {
		type: ADD_TO_CART,
		payload
	};
};
export const removeFromCart = payload => {
	return {
		type: REMOVE_FROM_CART,
		payload
	};
};
export const increaseBucketPrice = payload => {
	return {
		type: INCREASE_BUCKET_PRICE,
		payload
	};
}
