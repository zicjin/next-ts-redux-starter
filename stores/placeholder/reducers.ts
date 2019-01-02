import { Reducer } from "redux"
import { ActionType } from "typesafe-actions"
import { PlaceholderState, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from "./constants"
import * as actions from "./actions"

export type PlaceholderAction = ActionType<typeof actions>

export const initialState: PlaceholderState = {
  data: null,
  error: null,
}

const reducer: Reducer<PlaceholderState, PlaceholderAction> = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      }
    case LOAD_DATA_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default reducer
