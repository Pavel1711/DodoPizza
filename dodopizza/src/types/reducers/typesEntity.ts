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

export type EntityAction = GET_ENTITY_ACTION