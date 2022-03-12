import {CartActionType} from "../../constants/actionTypes";

export interface IStateEntityInCart {
  visibility: boolean,
  data: Array<IEntityInCart>
}

export interface IEntityInCart {
  id: number | null,
  title: string,
  totalPrice: number,
  media: string,
  count: number,
  sizeText?: string
}

interface CHANGE_VISIBILITY_CART_ACTION {
  type: CartActionType.CHANGE_VISIBILITY_CART,
  visibility: boolean
}

interface ADD_TO_CART {
  type: CartActionType.ADD_TO_CART,
  data: IEntityInCart,
  cartHasEntity: boolean
}

interface REMOVE_FROM_CART {
  type: CartActionType.REMOVE_FROM_CART,
  data: IEntityInCart
}

export type CartAction = CHANGE_VISIBILITY_CART_ACTION | ADD_TO_CART | REMOVE_FROM_CART