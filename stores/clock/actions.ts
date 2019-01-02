import { action } from "typesafe-actions"
import { START_CLOCK, TICK_CLOCK, ClockState } from "./constants"

// https://github.com/piotrwitek/react-redux-typescript-guide#action-creators

export const startClock = (isServer: boolean) =>
  action(START_CLOCK, { light: isServer, lastUpdate: null } as ClockState)

export const tickClock = (isServer: boolean) =>
  action(TICK_CLOCK, { light: !isServer, lastUpdate: new Date() } as ClockState)

// export function startClock (isServer = true) {
//   return {
//     type: actionTypes.START_CLOCK,
//     light: isServer,
//     lastUpdate: null
//   }
// }

// export function tickClock (isServer) {
//   return {
//     type: actionTypes.TICK_CLOCK,
//     light: !isServer,
//     lastUpdate: Date.now()
//   }
// }
