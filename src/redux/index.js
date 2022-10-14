import {combineReducers, legacy_createStore as createStore} from 'redux'
import {ShoppinReducer} from "./cart/reducer";
import {AuthorizationReducer, GameReducer} from "./games/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

// Combine our reducers
const rootReducer = combineReducers({
	shoppingReducer: ShoppinReducer,
	GameItemsReducer: GameReducer,
	AuthReducer: AuthorizationReducer
})

// Store with two Reducers and devTools
export const store = createStore(rootReducer, composeWithDevTools())
