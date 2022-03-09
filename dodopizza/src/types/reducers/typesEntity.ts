import {EntityActionType} from "../../constants/actionTypes";

export interface IState {
  id: number | null
  title: string
  composition: string
  price: number | null
  size?: Array<{
    name: string,
    price: number
  }>
  media: string
}

interface GET_ENTITY_ACTION {
  type: EntityActionType.GET_ENTITY
  data: IState
}

interface CLEAR_ENTITY_ACTION {
  type: EntityActionType.CLEAR_ENTITY
}

interface CHANGE_SIZE_ACTION {
  type: EntityActionType.CHANGE_SIZE,
  price: number
}

export type EntityAction = GET_ENTITY_ACTION | CLEAR_ENTITY_ACTION | CHANGE_SIZE_ACTION