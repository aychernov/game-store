import {combineReducers, legacy_createStore as createStore} from 'redux'
import {ShoppingReducer} from "./cart/reducer";
import {AuthorizationReducer, GameReducer} from "./games/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

// Combine our reducers
const rootReducer = combineReducers({
	shoppingReducer: ShoppingReducer,
	GameItemsReducer: GameReducer,
	AuthReducer: AuthorizationReducer
})

export type RootState = ReturnType<typeof rootReducer>

// Store with two Reducers and devTools
export const store = createStore(rootReducer, composeWithDevTools())
