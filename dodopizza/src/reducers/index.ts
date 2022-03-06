import {combineReducers} from 'redux';
import {entity} from "./entity";


export const rootReducer = combineReducers({
  entity
})

export type RootState = ReturnType<typeof rootReducer>
