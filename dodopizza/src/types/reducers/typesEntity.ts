import {EntityActionType} from "../../constants/actionTypes";

export interface IState {
  id: number | null
  title: string
  composition: string
  price: number | null
  media: string
}

interface GET_ENTITY_ACTION {
  type: EntityActionType.GET_ENTITY
  data: IState
}

interface CLEAR_ENTITY_ACTION {
  type: EntityActionType.CLEAR_ENTITY
}

export type EntityAction = GET_ENTITY_ACTION | CLEAR_ENTITY_ACTION