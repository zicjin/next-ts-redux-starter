import { delay } from "redux-saga"
import { call, put, take } from "redux-saga/effects"
import { START_CLOCK } from "./constants"
import * as actions from "./actions"

function * runClockSaga() {
  yield take(START_CLOCK)
  while (true) {
    yield put(actions.tickClock(false))
    yield call(delay, 800)
  }
}

export default call(runClockSaga)
