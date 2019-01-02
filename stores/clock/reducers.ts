import { ActionType } from "typesafe-actions"
import { ClockState, TICK_CLOCK } from "./constants"
import * as actions from "./actions"
import { Reducer } from "redux"

// https://github.com/piotrwitek/react-redux-typescript-guide#reducers
export type ClockAction = ActionType<typeof actions>;

const initialState: ClockState = {
  lastUpdate: new Date(),
  light: false,
}

const reducer: Reducer<ClockState, ClockAction> = (state = initialState, action) => {
  switch (action.type) {
    case TICK_CLOCK:
      return {
        ...state,
        lastUpdate: action.payload.lastUpdate,
        light: !!action.payload.light,
      }

    default:
      return state
  }
}

export default reducer
