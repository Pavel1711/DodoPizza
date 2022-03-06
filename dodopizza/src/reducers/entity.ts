import {EntityActionType} from "../constants/actionTypes";
import {IState, EntityAction} from "../types/reducers/typesEntity"


const initialState:IState = {
  id: null,
  title: '',
  composition: '',
  price: null,
  media: ''
}

export const entity = (state = initialState, action: EntityAction): IState => {
  switch (action.type) {
    case EntityActionType.GET_ENTITY:
      return {...action.data};

    default:
      return state;
  }
}