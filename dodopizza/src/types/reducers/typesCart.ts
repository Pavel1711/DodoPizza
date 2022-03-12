import {CartActionType} from "../../constants/actionTypes";

export interface IStateEntityInCart {
  visibility: boolean,
  data: Array<IEntityInCart>
}

export interface IEntityInCart {
  id: number | null
  title: string,
  sizeText?: string,
  price: number,
  media: string,
  count?: number
}

interface CHANGE_VISIBILITY_CART_ACTION {
  type: CartActionType.CHANGE_VISIBILITY_CART,
  visibility: boolean
}

interface ADD_TO_CART {
  type: CartActionType.ADD_TO_CART,
  data: IEntityInCart
}

export type CartAction = CHANGE_VISIBILITY_CART_ACTION | ADD_TO_CART