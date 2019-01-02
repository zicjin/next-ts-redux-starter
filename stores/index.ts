import {createStore, applyMiddleware, AnyAction, Store} from "redux"
import createSagaMiddleware, { Task } from "redux-saga"

import Reducers from "./reducers"
import Sagas from "./sagas"

import { ClockState } from "./clock/constants"
import { CountState } from "./count/constants"
import { PlaceholderState } from "./placeholder/constants"

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

interface IStates {
  clock: ClockState;
  count: CountState;
  placeholder: PlaceholderState;
}

export type ComponentProps = IStates & Store

type reduxSagaStore = Store<IStates, AnyAction> & { sagaTask: Task }

function configureStore(initialState = {}) {
  const store: reduxSagaStore = createStore(
    Reducers,
    initialState,
    bindMiddleware([sagaMiddleware]),
  )

  store.sagaTask = sagaMiddleware.run(Sagas)
  return store
}

export default configureStore
