import { Reducer } from "redux"
import { ActionType } from "typesafe-actions"
import { CountState, INCREMENT, DECREMENT, RESET } from "./constants"
import * as actions from "./actions"

export type CountAction = ActionType<typeof actions>

const initialState: CountState = {
  value: 0,
}

const reducer: Reducer<CountState, CountAction> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      }
    case RESET:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}

export default reducer
