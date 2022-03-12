import {CartAction, IEntityInCart, IStateEntityInCart} from "../types/reducers/typesCart";
import {CartActionType} from "../constants/actionTypes";


const initialState: IStateEntityInCart = {
  visibility: false,
  data: []
}

export const cart = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.CHANGE_VISIBILITY_CART:
      return {...state, visibility: action.visibility};

    case CartActionType.ADD_TO_CART:
      if (action.cartHasEntity)
        return {
          ...state, data: state.data.map((item: IEntityInCart) => {
            return item.id === action.data.id && item.sizeText === action.data.sizeText ? action.data : item;
          })
        }
      return {...state, data: [...state.data, action.data]}

    case CartActionType.REMOVE_FROM_CART:
      if (action.data.count) {
        return {
          ...state, data: state.data.map((item: IEntityInCart) => {
            return item.id === action.data.id && item.sizeText === action.data.sizeText ? action.data : item;
          })
        }
      } else if (action.data.sizeText) {
        return {
          ...state,
          data: state.data.filter((item: IEntityInCart) => item.id !== action.data.id || (item.id === action.data.id && item.sizeText !== action.data.sizeText))
        }
      } else {
        return {
          ...state,
          data: state.data.filter((item: IEntityInCart) => item.id !== action.data.id)
        }
      }

    default:
      return state;
  }
}
