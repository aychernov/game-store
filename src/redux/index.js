import { legacy_createStore as createStore} from 'redux'
import {ShoppinReducer} from "./cart/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'


export const store = createStore(ShoppinReducer,  composeWithDevTools())
