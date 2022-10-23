export enum ShoppingReducerTypes{
	ADD_TO_CART = 'ADD_TO_CART',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
	INCREASE_BUCKET_PRICE = 'INCREASE_BUCKET_PRICE',
	CLEAR_CART = 'CLEAR_CART',
}

interface ADD_TO_CART {
	type: ShoppingReducerTypes.ADD_TO_CART,
	payload: []

}
interface REMOVE_FROM_CART {
	type: ShoppingReducerTypes.REMOVE_FROM_CART,
	payload: [] | number | any
}
interface INCREASE_BUCKET_PRICE {
	type: ShoppingReducerTypes.INCREASE_BUCKET_PRICE,
	payload: number
}
interface CLEAR_CART {
	type: ShoppingReducerTypes.CLEAR_CART,
	payload: []
}


export type ShoppingReducerAction = ADD_TO_CART | REMOVE_FROM_CART | INCREASE_BUCKET_PRICE | CLEAR_CART
