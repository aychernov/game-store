import {GameReducer} from "../games/reducer";
import {GameReducerTypes} from "../games/actionsTypes";
import {ShoppingReducer} from "../cart/reducer";
import {initialState} from "../cart/store";
import {ShoppingReducerTypes} from "../cart/actionsTypes";

const IGameInfo = {
	currentGame: {
		image: 'string',
		title: 'string',
		genres: ['string', 'string'],
		price: 1,
		video: 'string',
		id: 1,
		description: 'string',
		quantity: 1
	}
}
const obj = {
	currentGame: {}
}

describe('gameReducer', () => {
	it('should return state when pass emty', () => {
		const res = GameReducer(undefined, {type: ''})
		expect(res).toEqual(obj.currentGame = {currentGame: {}})
	});

	it('should add game in store', () => {
		const action = {type: GameReducerTypes.SET_CURRENT_GAME, payload: IGameInfo}

		const res = GameReducer(obj, action)
		expect(res[IGameInfo])
		console.log(res[IGameInfo])
	});
})
const obj1 = {
	gameInfo: [],
	busket: [],
	priceBusket: 0,
}

describe('cartReducer', () => {
	it('should return state', function () {
		const res = ShoppingReducer(undefined, {type: ''})
		expect(res).toEqual(initialState)
	});

	it('should add game in cart', () => {
		const action = {type: ShoppingReducerTypes.ADD_TO_CART, payload: []}
		const res = ShoppingReducer(obj1, action)
		expect(res.busket[IGameInfo])
	});

	it('should clear cart', () => {
		const action = {type: ShoppingReducerTypes.CLEAR_CART, payload: []}
		const res = ShoppingReducer(obj1, action)
		expect(res).toEqual({
			"busket": [],
			"gameInfo": [],
			"priceBusket": 0
		})
	});

})
