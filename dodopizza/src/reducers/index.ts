import {combineReducers} from 'redux';
import {entity} from "./entity";
import {cart} from "./cart";


export const rootReducer = combineReducers({
  entity,
  cart
})

export type RootState = ReturnType<typeof rootReducer>
