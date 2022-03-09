import {Dispatch} from "redux";
import {EntityActionType} from "../constants/actionTypes";
import {EntityAction} from "../types/reducers/typesEntity";
import axios from "axios";
import {IEntity} from "../types/types";


export const getEntity = (entityId: number, model: string) => async (dispatch: Dispatch<EntityAction>) => {
  try {
    const response = await axios.get(`/api/data-marts/${model}/entities.json`)
    const data = response.data.results.filter((item:IEntity) => item.id === entityId);
    dispatch({type: EntityActionType.GET_ENTITY, data: data[0]})
  } catch (e) {
    console.error(e)
  }
}

export const clearEntity = () => (dispatch: Dispatch<EntityAction>) => {
  dispatch({type: EntityActionType.CLEAR_ENTITY})
}
