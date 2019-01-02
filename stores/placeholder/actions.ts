import { action } from "typesafe-actions"
import { PlaceholderState, LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from "./constants"

export const loadData = () => action(LOAD_DATA)

export const loadDataSuccess = (data: object) =>
  action(LOAD_DATA_SUCCESS, { data } as PlaceholderState)

export const loadDataError = (error: string) =>
  action(LOAD_DATA_ERROR, { error } as PlaceholderState)

// export function loadDataSuccess (data) {
//   return {
//     type: actionTypes.LOAD_DATA_SUCCESS,
//     data
//   }
// }

// export function loadDataError (error) {
//   return {
//     type: actionTypes.LOAD_DATA_ERROR,
//     error
//   }
// }
