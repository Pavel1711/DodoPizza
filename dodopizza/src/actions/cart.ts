import {Dispatch} from "redux";
import {CartAction, IEntityInCart} from "../types/reducers/typesCart";
import {CartActionType} from "../constants/actionTypes";


export const changeVisibilityCart = (visibility: boolean) => (dispatch:Dispatch <CartAction>) => {
  dispatch({type: CartActionType.CHANGE_VISIBILITY_CART, visibility})
}

export const addToCart = (data: IEntityInCart, cartHasEntity: boolean) => (dispatch: Dispatch<CartAction>) => {
  dispatch({type: CartActionType.ADD_TO_CART, data, cartHasEntity})
}
