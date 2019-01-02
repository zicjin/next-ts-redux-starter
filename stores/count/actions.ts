import { action } from "typesafe-actions"
import { INCREMENT, DECREMENT, RESET } from "./constants"

export const increment = () => action(INCREMENT)
export const decrement = () => action(DECREMENT)
export const reset = () => action(RESET)
