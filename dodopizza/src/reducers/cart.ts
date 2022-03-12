import {CartAction, IStateEntityInCart} from "../types/reducers/typesCart";
import {CartActionType} from "../constants/actionTypes";


const initialState:IStateEntityInCart = {
  visibility: false,
  data: []
}

export const cart = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.CHANGE_VISIBILITY_CART:
      return {...state, visibility: action.visibility};

    case CartActionType.ADD_TO_CART:
      return {...state, data: [...state.data, action.data]}

    default:
      return state;
  }
}
