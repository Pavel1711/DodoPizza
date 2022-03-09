import {EntityActionType} from "../constants/actionTypes";
import {IState, EntityAction} from "../types/reducers/typesEntity"


const initialState:IState = {
  id: null,
  title: '',
  composition: '',
  price: null,
  size: [],
  media: ''
}

export const entity = (state = initialState, action: EntityAction): IState => {
  switch (action.type) {
    case EntityActionType.GET_ENTITY:
      return {...action.data};

    case EntityActionType.CLEAR_ENTITY:
      return initialState;

    case EntityActionType.CHANGE_SIZE:
      return {...state, price: action.price};

    default:
      return state;
  }
}